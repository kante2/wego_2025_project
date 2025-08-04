#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import rospy
from move_base_msgs.msg import MoveBaseAction, MoveBaseGoal
from actionlib_msgs.msg import GoalStatus
import actionlib

'''
move_base 액션 서버에 goal을 보내고, 일정시간 안에 도착하지 못하면 goal을 취소한다.
waypoint 자동 전송 클라이언트이다.

MISSION3 -> MISSION4 로 진입시 사용
'''

class NavigationClient():
    def __init__(self):
        self.client = actionlib.SimpleActionClient('move_base', MoveBaseAction)
        self.client.wait_for_server()

        self.goal_list = []

        # Waypoint 1
        waypoint_1 = MoveBaseGoal()
        waypoint_1.target_pose.header.frame_id = "map"
        waypoint_1.target_pose.pose.position.x = 13.656893783048407
        waypoint_1.target_pose.pose.position.y = 10.251979199577491
        waypoint_1.target_pose.pose.orientation.z = -0.9757984016268536
        waypoint_1.target_pose.pose.orientation.w = 0.21867208185426332
        self.goal_list.append(waypoint_1)

        # Waypoint 2
        waypoint_2 = MoveBaseGoal()
        waypoint_2.target_pose.header.frame_id = "map"
        waypoint_2.target_pose.pose.position.x = 12.314604182568582
        waypoint_2.target_pose.pose.position.y = 10.153134240208155
        waypoint_2.target_pose.pose.orientation.z = -0.9323541860556945
        waypoint_2.target_pose.pose.orientation.w = 0.36154622352394084
        self.goal_list.append(waypoint_2)

        # Waypoint 3
        waypoint_3 = MoveBaseGoal()
        waypoint_3.target_pose.header.frame_id = "map"
        waypoint_3.target_pose.pose.position.x = 11.484320802257207
        waypoint_3.target_pose.pose.position.y = 9.659099291884933
        waypoint_3.target_pose.pose.orientation.z = -0.7119799177937839
        waypoint_3.target_pose.pose.orientation.w = 0.7021998267290848
        self.goal_list.append(waypoint_3)

        # Waypoint 4
        waypoint_4 = MoveBaseGoal()
        waypoint_4.target_pose.header.frame_id = "map"
        waypoint_4.target_pose.pose.position.x = 11.40010802692422
        waypoint_4.target_pose.pose.position.y = 8.449251003781999
        waypoint_4.target_pose.pose.orientation.z = -0.7006535373672704
        waypoint_4.target_pose.pose.orientation.w = 0.7135016612277304
        self.goal_list.append(waypoint_4)

        # Waypoint 5
        waypoint_5 = MoveBaseGoal()
        waypoint_5.target_pose.header.frame_id = "map"
        waypoint_5.target_pose.pose.position.x = 11.39033021307267
        waypoint_5.target_pose.pose.position.y = 7.7856954359201564
        waypoint_5.target_pose.pose.orientation.z = -0.7038552146467884
        waypoint_5.target_pose.pose.orientation.w = 0.7103434639767747
        self.goal_list.append(waypoint_5)

        self.sequence = -1  # 초기값 -1: 시작할 때 0부터 시작하게 하기 위함
        self.start_time = rospy.Time.now()

    def run(self):
        # 현재 goal이 없으면 새로운 goal을 전송한다.
        if self.client.get_state() != GoalStatus.ACTIVE:
            self.start_time = rospy.Time.now()
            self.sequence = (self.sequence + 1) % len(self.goal_list)
            rospy.loginfo(f"Sending goal #{self.sequence+1}")
            self.goal_list[self.sequence].target_pose.header.stamp = rospy.Time.now()
            self.client.send_goal(self.goal_list[self.sequence])
        # 진행 중인데 30초가 넘으면 goal을 취소한다.
        else:
            if (rospy.Time.now().to_sec() - self.start_time.to_sec()) > 30.0:
                rospy.logwarn("Goal timeout. Cancelling goal.")
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
