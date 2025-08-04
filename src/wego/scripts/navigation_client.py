import rospy
import actionlib
import math
from move_base_msgs.msg import MoveBaseAction, MoveBaseGoal
from geometry_msgs.msg import PoseStamped, PoseWithCovarianceStamped

class NavigationClient():
    def __init__(self):
        self.client = actionlib.SimpleActionClient('move_base', MoveBaseAction)
        rospy.loginfo("Waiting for move_base action server...")
        self.client.wait_for_server()
        rospy.loginfo("Connected to move_base")

        self.goal_list = []
        self.goal_index = 0
        self.goal_sent = False
        self.distance_threshold = 0.5  # 도달 판정 기준 (m)

        self.robot_x = None
        self.robot_y = None

        rospy.Subscriber("/waypoint", PoseStamped, self.waypoint_callback)  # ✅ waypoint 구독
        rospy.Subscriber("/amcl_pose", PoseWithCovarianceStamped, self.pose_callback)
        rospy.Timer(rospy.Duration(0.1), self.check_distance)

    def pose_callback(self, msg):
        self.robot_x = msg.pose.pose.position.x
        self.robot_y = msg.pose.pose.position.y

    def waypoint_callback(self, msg):
        goal = MoveBaseGoal()
        goal.target_pose = msg
        goal.target_pose.header.frame_id = "map"
        self.goal_list.append(goal)
        rospy.loginfo(f"Received new waypoint. Total: {len(self.goal_list)}")

        # 첫 goal은 자동 전송
        if not self.goal_sent and self.goal_index == 0:
            self.send_goal()

    def send_goal(self):
        if self.goal_index < len(self.goal_list):
            goal = self.goal_list[self.goal_index]
            goal.target_pose.header.stamp = rospy.Time.now()
            self.client.send_goal(goal)
            self.goal_sent = True
            rospy.loginfo(f"Sent goal {self.goal_index + 1}")
        else:
            rospy.loginfo("All goals completed.")
            rospy.signal_shutdown("Done.")

    def check_distance(self, event):
        if self.robot_x is None or not self.goal_sent:
            return

        target = self.goal_list[self.goal_index].target_pose.pose.position
        dx = target.x - self.robot_x
        dy = target.y - self.robot_y
        distance = math.sqrt(dx**2 + dy**2)

        if distance < self.distance_threshold:
            rospy.loginfo(f"Reached waypoint {self.goal_index + 1} (distance: {distance:.2f} m)")
            self.goal_index += 1
            self.goal_sent = False
            rospy.sleep(1.0)  # 잠시 대기
            self.send_goal()

def main():
    rospy.init_node("position_based_waypoint_navigation")
    nav = NavigationClient()
    rospy.spin()

if __name__ == "__main__":
    main()
