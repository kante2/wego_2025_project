;; Auto-generated. Do not edit!


(when (boundp 'obstacle_avoid::PersonBBox)
  (if (not (find-package "OBSTACLE_AVOID"))
    (make-package "OBSTACLE_AVOID"))
  (shadow 'PersonBBox (find-package "OBSTACLE_AVOID")))
(unless (find-package "OBSTACLE_AVOID::PERSONBBOX")
  (make-package "OBSTACLE_AVOID::PERSONBBOX"))

(in-package "ROS")
;;//! \htmlinclude PersonBBox.msg.html


(defclass obstacle_avoid::PersonBBox
  :super ros::object
  :slots (_xmin _xmax _ymin _ymax _confidence ))

(defmethod obstacle_avoid::PersonBBox
  (:init
   (&key
    ((:xmin __xmin) 0.0)
    ((:xmax __xmax) 0.0)
    ((:ymin __ymin) 0.0)
    ((:ymax __ymax) 0.0)
    ((:confidence __confidence) 0.0)
    )
   (send-super :init)
   (setq _xmin (float __xmin))
   (setq _xmax (float __xmax))
   (setq _ymin (float __ymin))
   (setq _ymax (float __ymax))
   (setq _confidence (float __confidence))
   self)
  (:xmin
   (&optional __xmin)
   (if __xmin (setq _xmin __xmin)) _xmin)
  (:xmax
   (&optional __xmax)
   (if __xmax (setq _xmax __xmax)) _xmax)
  (:ymin
   (&optional __ymin)
   (if __ymin (setq _ymin __ymin)) _ymin)
  (:ymax
   (&optional __ymax)
   (if __ymax (setq _ymax __ymax)) _ymax)
  (:confidence
   (&optional __confidence)
   (if __confidence (setq _confidence __confidence)) _confidence)
  (:serialization-length
   ()
   (+
    ;; float32 _xmin
    4
    ;; float32 _xmax
    4
    ;; float32 _ymin
    4
    ;; float32 _ymax
    4
    ;; float32 _confidence
    4
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; float32 _xmin
       (sys::poke _xmin (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;; float32 _xmax
       (sys::poke _xmax (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;; float32 _ymin
       (sys::poke _ymin (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;; float32 _ymax
       (sys::poke _ymax (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;; float32 _confidence
       (sys::poke _confidence (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; float32 _xmin
     (setq _xmin (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;; float32 _xmax
     (setq _xmax (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;; float32 _ymin
     (setq _ymin (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;; float32 _ymax
     (setq _ymax (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;; float32 _confidence
     (setq _confidence (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;;
   self)
  )

(setf (get obstacle_avoid::PersonBBox :md5sum-) "c9d1a9332fa8b4de04d024bcae544972")
(setf (get obstacle_avoid::PersonBBox :datatype-) "obstacle_avoid/PersonBBox")
(setf (get obstacle_avoid::PersonBBox :definition-)
      "float32 xmin
float32 xmax
float32 ymin
float32 ymax
float32 confidence

")



(provide :obstacle_avoid/PersonBBox "c9d1a9332fa8b4de04d024bcae544972")


