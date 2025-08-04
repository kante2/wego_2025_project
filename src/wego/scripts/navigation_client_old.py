import rospy

from move_base_msgs.msg import MoveBaseAction, MoveBaseGoal
from actionlib_msgs.msg import GoalStatus
import actionlib

'''
move_base액션 서버에 goal을 보내고, 일정시간 안에 도착하지 못하면 goal을 취소한다,
waypoint 자동 전송 클라이언트이다.

test>
1.
  pose: 
    position: 
      x: 0.21264897227021717
      y: -0.022631780860152523
      z: 0.0
    orientation: 
      x: 0.0
      y: 0.0
      z: -0.0065466020221381736
      w: 0.999978570771376

2.
pose: 
  pose: 
    position: 
      x: 3.442798825981533
      y: 8.953197075512833
      z: 0.0
    orientation: 
      x: 0.0
      y: 0.0
      z: 0.7000367576097115
      w: 0.7141068113351685
'''

class NavigationClient():
    def __init__(self):
        self.client = actionlib.SimpleActionClient('move_base', MoveBaseAction)
        self.client.wait_for_server()

        self.goal_list = []

        # Waypoint 1
        waypoint_1 = MoveBaseGoal()
        waypoint_1.target_pose.header.frame_id = "map"
        waypoint_1.target_pose.pose.position.x = 0.21264897227021717
        waypoint_1.target_pose.pose.position.y = -0.022631780860152523
        waypoint_1.target_pose.pose.orientation.w = 0.999978570771376
        waypoint_1.target_pose.pose.orientation.z = -0.0065466020221381736
        self.goal_list.append(waypoint_1)

        # Waypoint 2
        waypoint_2 = MoveBaseGoal()
        waypoint_2.target_pose.header.frame_id = "map"
        waypoint_2.target_pose.pose.position.x = 3.442798825981533
        waypoint_2.target_pose.pose.position.y = 8.953197075512833
        waypoint_2.target_pose.pose.orientation.w = 0.7141068113351685
        waypoint_2.target_pose.pose.orientation.z = 0.7000367576097115
        self.goal_list.append(waypoint_2)

        self.sequence = 0
        self.start_time = rospy.Time.now()
        
    def run(self):
        # 현재 goal이 없으면 새로운 goal을 전송한다.
        if self.client.get_state() != GoalStatus.ACTIVE:
            self.start_time = rospy.Time.now()
            self.sequence = (self.sequence + 1) % 2 # 0이나 1, 로 시퀀스를 업데이트,
            self.client.send_goal(self.goal_list[self.sequence])
        # 진행중인데 30초가 넘으면 goal을 취소한다.
        else:
            if (rospy.Time.now().to_sec() - self.start_time.to_sec()) > 30.0:
                self.stop()
    
    def stop(self):
        self.client.cancel_all_goals()
        
def main():
    rospy.init_node("navigation_client")
    nc = NavigationClient()
    rate = rospy.Rate(10)
    
    while not rospy.is_shutdown():
        nc.run()
        rate.sleep()
    
if __name__ == "__main__":
    main()