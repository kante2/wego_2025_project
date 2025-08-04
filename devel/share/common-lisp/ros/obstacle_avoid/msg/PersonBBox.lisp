; Auto-generated. Do not edit!


(cl:in-package obstacle_avoid-msg)


;//! \htmlinclude PersonBBox.msg.html

(cl:defclass <PersonBBox> (roslisp-msg-protocol:ros-message)
  ((xmin
    :reader xmin
    :initarg :xmin
    :type cl:float
    :initform 0.0)
   (xmax
    :reader xmax
    :initarg :xmax
    :type cl:float
    :initform 0.0)
   (ymin
    :reader ymin
    :initarg :ymin
    :type cl:float
    :initform 0.0)
   (ymax
    :reader ymax
    :initarg :ymax
    :type cl:float
    :initform 0.0)
   (confidence
    :reader confidence
    :initarg :confidence
    :type cl:float
    :initform 0.0))
)

(cl:defclass PersonBBox (<PersonBBox>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <PersonBBox>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'PersonBBox)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name obstacle_avoid-msg:<PersonBBox> is deprecated: use obstacle_avoid-msg:PersonBBox instead.")))

(cl:ensure-generic-function 'xmin-val :lambda-list '(m))
(cl:defmethod xmin-val ((m <PersonBBox>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader obstacle_avoid-msg:xmin-val is deprecated.  Use obstacle_avoid-msg:xmin instead.")
  (xmin m))

(cl:ensure-generic-function 'xmax-val :lambda-list '(m))
(cl:defmethod xmax-val ((m <PersonBBox>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader obstacle_avoid-msg:xmax-val is deprecated.  Use obstacle_avoid-msg:xmax instead.")
  (xmax m))

(cl:ensure-generic-function 'ymin-val :lambda-list '(m))
(cl:defmethod ymin-val ((m <PersonBBox>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader obstacle_avoid-msg:ymin-val is deprecated.  Use obstacle_avoid-msg:ymin instead.")
  (ymin m))

(cl:ensure-generic-function 'ymax-val :lambda-list '(m))
(cl:defmethod ymax-val ((m <PersonBBox>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader obstacle_avoid-msg:ymax-val is deprecated.  Use obstacle_avoid-msg:ymax instead.")
  (ymax m))

(cl:ensure-generic-function 'confidence-val :lambda-list '(m))
(cl:defmethod confidence-val ((m <PersonBBox>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader obstacle_avoid-msg:confidence-val is deprecated.  Use obstacle_avoid-msg:confidence instead.")
  (confidence m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <PersonBBox>) ostream)
  "Serializes a message object of type '<PersonBBox>"
  (cl:let ((bits (roslisp-utils:encode-single-float-bits (cl:slot-value msg 'xmin))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) bits) ostream))
  (cl:let ((bits (roslisp-utils:encode-single-float-bits (cl:slot-value msg 'xmax))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) bits) ostream))
  (cl:let ((bits (roslisp-utils:encode-single-float-bits (cl:slot-value msg 'ymin))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) bits) ostream))
  (cl:let ((bits (roslisp-utils:encode-single-float-bits (cl:slot-value msg 'ymax))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) bits) ostream))
  (cl:let ((bits (roslisp-utils:encode-single-float-bits (cl:slot-value msg 'confidence))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) bits) ostream))
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <PersonBBox>) istream)
  "Deserializes a message object of type '<PersonBBox>"
    (cl:let ((bits 0))
      (cl:setf (cl:ldb (cl:byte 8 0) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) bits) (cl:read-byte istream))
    (cl:setf (cl:slot-value msg 'xmin) (roslisp-utils:decode-single-float-bits bits)))
    (cl:let ((bits 0))
      (cl:setf (cl:ldb (cl:byte 8 0) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) bits) (cl:read-byte istream))
    (cl:setf (cl:slot-value msg 'xmax) (roslisp-utils:decode-single-float-bits bits)))
    (cl:let ((bits 0))
      (cl:setf (cl:ldb (cl:byte 8 0) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) bits) (cl:read-byte istream))
    (cl:setf (cl:slot-value msg 'ymin) (roslisp-utils:decode-single-float-bits bits)))
    (cl:let ((bits 0))
      (cl:setf (cl:ldb (cl:byte 8 0) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) bits) (cl:read-byte istream))
    (cl:setf (cl:slot-value msg 'ymax) (roslisp-utils:decode-single-float-bits bits)))
    (cl:let ((bits 0))
      (cl:setf (cl:ldb (cl:byte 8 0) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) bits) (cl:read-byte istream))
    (cl:setf (cl:slot-value msg 'confidence) (roslisp-utils:decode-single-float-bits bits)))
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<PersonBBox>)))
  "Returns string type for a message object of type '<PersonBBox>"
  "obstacle_avoid/PersonBBox")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'PersonBBox)))
  "Returns string type for a message object of type 'PersonBBox"
  "obstacle_avoid/PersonBBox")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<PersonBBox>)))
  "Returns md5sum for a message object of type '<PersonBBox>"
  "c9d1a9332fa8b4de04d024bcae544972")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'PersonBBox)))
  "Returns md5sum for a message object of type 'PersonBBox"
  "c9d1a9332fa8b4de04d024bcae544972")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<PersonBBox>)))
  "Returns full string definition for message of type '<PersonBBox>"
  (cl:format cl:nil "float32 xmin~%float32 xmax~%float32 ymin~%float32 ymax~%float32 confidence~%~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'PersonBBox)))
  "Returns full string definition for message of type 'PersonBBox"
  (cl:format cl:nil "float32 xmin~%float32 xmax~%float32 ymin~%float32 ymax~%float32 confidence~%~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <PersonBBox>))
  (cl:+ 0
     4
     4
     4
     4
     4
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <PersonBBox>))
  "Converts a ROS message object to a list"
  (cl:list 'PersonBBox
    (cl:cons ':xmin (xmin msg))
    (cl:cons ':xmax (xmax msg))
    (cl:cons ':ymin (ymin msg))
    (cl:cons ':ymax (ymax msg))
    (cl:cons ':confidence (confidence msg))
))
