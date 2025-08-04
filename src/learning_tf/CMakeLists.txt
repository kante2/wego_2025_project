cmake_minimum_required(VERSION 3.0.2)
project(learning_tf)
find_package(catkin REQUIRED COMPONENTS
  rospy
  tf2
  tf2_ros
  turtlesim
)

catkin_package(
  #
)

include_directories(
  #include_directories
  ${catkin_INCLUDE_DIRS}
)

catkin_install_python(PROGRAMS
  scripts/carrot_broadcaster.py
  scripts/turtle_one_broadcaster.py
  scripts/turtle_two_broadcaster.py
  scripts/carrot_follower.py
  DESTINATION ${CATKIN_PACKAGE_BIN_DESTINATION}
)