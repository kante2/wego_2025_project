#!/usr/bin/env python3

import rospy
import math
import tf2_ros
from geometry_msgs.msg import Twist

class CarrotFollower():
    def __init__(self):
        self.tfBuffer = tf2_ros.Buffer()
        self.listener = tf2_ros.TransformListener(self.tfBuffer)
        self.publisher = rospy.Publisher('turtle2/cmd_vel', Twist, queue_size=10)

    def follower(self):
        try:
            trans = self.tfBuffer.lookup_transform(
                'turtle2', 'carrot', rospy.Time.now(), rospy.Duration(0.1)
            )
            msg = Twist()
            msg.linear.x = 0.5 * math.sqrt(
                trans.transform.translation.x ** 2 + trans.transform.translation.y ** 2
            )
            msg.angular.z = 4 * math.atan2(
                trans.transform.translation.y, trans.transform.translation.x
            )
            self.publisher.publish(msg)
        except (
            tf2_ros.LookupException, tf2_ros.ConnectivityException, tf2_ros.ExtrapolationException
        ):
            print('Transform not available.')

def main():
    rospy.init_node("CarrotFollower")
    cb = CarrotFollower()
    rate = rospy.Rate(10)
    while not rospy.is_shutdown():
        cb.follower()  # ✅ 올바른 메서드 호출
        rate.sleep()

if __name__ == "__main__":
    main()
