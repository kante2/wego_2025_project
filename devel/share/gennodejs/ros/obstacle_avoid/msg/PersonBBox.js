// Auto-generated. Do not edit!

// (in-package obstacle_avoid.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;

//-----------------------------------------------------------

class PersonBBox {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.xmin = null;
      this.xmax = null;
      this.ymin = null;
      this.ymax = null;
      this.confidence = null;
    }
    else {
      if (initObj.hasOwnProperty('xmin')) {
        this.xmin = initObj.xmin
      }
      else {
        this.xmin = 0.0;
      }
      if (initObj.hasOwnProperty('xmax')) {
        this.xmax = initObj.xmax
      }
      else {
        this.xmax = 0.0;
      }
      if (initObj.hasOwnProperty('ymin')) {
        this.ymin = initObj.ymin
      }
      else {
        this.ymin = 0.0;
      }
      if (initObj.hasOwnProperty('ymax')) {
        this.ymax = initObj.ymax
      }
      else {
        this.ymax = 0.0;
      }
      if (initObj.hasOwnProperty('confidence')) {
        this.confidence = initObj.confidence
      }
      else {
        this.confidence = 0.0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type PersonBBox
    // Serialize message field [xmin]
    bufferOffset = _serializer.float32(obj.xmin, buffer, bufferOffset);
    // Serialize message field [xmax]
    bufferOffset = _serializer.float32(obj.xmax, buffer, bufferOffset);
    // Serialize message field [ymin]
    bufferOffset = _serializer.float32(obj.ymin, buffer, bufferOffset);
    // Serialize message field [ymax]
    bufferOffset = _serializer.float32(obj.ymax, buffer, bufferOffset);
    // Serialize message field [confidence]
    bufferOffset = _serializer.float32(obj.confidence, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type PersonBBox
    let len;
    let data = new PersonBBox(null);
    // Deserialize message field [xmin]
    data.xmin = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [xmax]
    data.xmax = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [ymin]
    data.ymin = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [ymax]
    data.ymax = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [confidence]
    data.confidence = _deserializer.float32(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 20;
  }

  static datatype() {
    // Returns string type for a message object
    return 'obstacle_avoid/PersonBBox';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'c9d1a9332fa8b4de04d024bcae544972';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float32 xmin
    float32 xmax
    float32 ymin
    float32 ymax
    float32 confidence
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new PersonBBox(null);
    if (msg.xmin !== undefined) {
      resolved.xmin = msg.xmin;
    }
    else {
      resolved.xmin = 0.0
    }

    if (msg.xmax !== undefined) {
      resolved.xmax = msg.xmax;
    }
    else {
      resolved.xmax = 0.0
    }

    if (msg.ymin !== undefined) {
      resolved.ymin = msg.ymin;
    }
    else {
      resolved.ymin = 0.0
    }

    if (msg.ymax !== undefined) {
      resolved.ymax = msg.ymax;
    }
    else {
      resolved.ymax = 0.0
    }

    if (msg.confidence !== undefined) {
      resolved.confidence = msg.confidence;
    }
    else {
      resolved.confidence = 0.0
    }

    return resolved;
    }
};

module.exports = PersonBBox;
