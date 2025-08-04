#! /user/bin/env python3

import rospy
import tf
import tf2_ros
from geometry_msgs.msg import TransformStamped



class CarrotBroadcaster():
    def __init__(self):
        self.br = tf2_ros.StaticTransformBroadcaster()
        self.transformstamped = TransformStamped()
        self.transformstamped.header.frame_id = "turtle1"
        self.transformstamped.child_frame_id = "carrot"
    def broadcast(self):
        # 브로드캐스팅을 진행
        # 언제 브로드캐스트 될지를 결정 
        self.transformstamped.header.stamp = rospy.Time().now()
        self.transformstamped.transform.translation.y = 1.0
        self.transformstamped.transform.rotation.w = 1.0
        # 브로드캐스트 - sendTransform
        self.br.sendTransform(self.transformstamped)

def main():
    rospy.init_node("CarrotBroadcaster")
    cb = CarrotBroadcaster()
    rate = rospy.Rate(10)
    while not rospy.is_shutdown():
        cb.broadcast()
        rate.sleep()

if __name__ == "__main__":
    main()