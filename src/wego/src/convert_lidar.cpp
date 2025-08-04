#include <vector>
#include <algorithm>
#include <ros/ros.h>
#include <memory>
#include "sensor_msgs/LaserScan.h"

using namespace std;

class LidarConvert : public ros::NodeHandle {
public:
    LidarConvert() {
        // 구독자: lidar2D
        this->lidar_sub = this->subscribe("lidar2D", 10, &LidarConvert::lidarCallback, this);
        // 퍼블리셔: scan
        this->lidar_pub = this->advertise<sensor_msgs::LaserScan>("scan", 10);
        init_flag = false;
    }

private:
    ros::Publisher lidar_pub;
    ros::Subscriber lidar_sub;
    bool init_flag;
    sensor_msgs::LaserScan scan_msg;

    void lidarCallback(const sensor_msgs::LaserScan::ConstPtr& msg) {
        if (!this->init_flag) {
            this->scan_msg.header.frame_id     = msg->header.frame_id;
            this->scan_msg.angle_min           = msg->angle_min;
            this->scan_msg.angle_max           = msg->angle_max;
            this->scan_msg.angle_increment     = msg->angle_increment;
            this->scan_msg.time_increment      = msg->time_increment;
            this->scan_msg.scan_time           = msg->scan_time;
            this->scan_msg.range_min           = msg->range_min;
            this->scan_msg.range_max           = msg->range_max;
            this->scan_msg.ranges.resize(msg->ranges.size());
            this->init_flag = true;
        }

        this->scan_msg.header.stamp = ros::Time::now();

        // 0~179 → 뒤로 보내고, 180~359 → 앞으로 보냄
        std::transform(msg->ranges.begin(), msg->ranges.begin() + 180,
                       this->scan_msg.ranges.begin() + 180,
                       [](auto value) { return value; });

        std::transform(msg->ranges.begin() + 180, msg->ranges.end(),
                       this->scan_msg.ranges.begin(),
                       [](auto value) { return value; });

        this->lidar_pub.publish(this->scan_msg);
    }
};

int main(int argc, char** argv) {
    ros::init(argc, argv, "convert_lidar");
    auto lidar_convert = make_shared<LidarConvert>();  // ← 세미콜론 꼭 붙이기
    ros::spin();
    return 0;
}
