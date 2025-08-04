#!/usr/bin/env python3

import rospy
import tf2_ros
from geometry_msgs.msg import TransformStamped
from turtlesim.msg import Pose
import tf_conversions
from turtlesim.srv import Spawn, SpawnRequest

class TurtleTwoBroadcaster():
    def __init__(self):
        self.br = tf2_ros.TransformBroadcaster()
        self.transformstamped = TransformStamped()
        self.transformstamped.header.frame_id = "world"
        self.transformstamped.child_frame_id = "turtle2"

        # turtle2 스폰
        rospy.wait_for_service('/spawn')
        service = rospy.ServiceProxy('/spawn', Spawn)

        srv = SpawnRequest()
        srv.name = 'turtle2'
        service(srv)

        # pose 콜백 구독
        rospy.Subscriber('/turtle2/pose', Pose, self.callback)

    def callback(self, data):
        self.transformstamped.transform.translation.x = data.x
        self.transformstamped.transform.translation.y = data.y
        self.transformstamped.transform.translation.z = 0.0

        q = tf_conversions.transformations.quaternion_from_euler(0, 0, data.theta)

        self.transformstamped.transform.rotation.x = q[0]
        self.transformstamped.transform.rotation.y = q[1]
        self.transformstamped.transform.rotation.z = q[2]
        self.transformstamped.transform.rotation.w = q[3]

    def broadcast(self):
        self.transformstamped.header.stamp = rospy.Time.now()
        self.br.sendTransform(self.transformstamped)

def main():
    rospy.init_node("turtle_two_broadcaster")
    ttb = TurtleTwoBroadcaster()
    rate = rospy.Rate(10)
    while not rospy.is_shutdown():
        ttb.broadcast()
        rate.sleep()

if __name__ == "__main__":
    main()
