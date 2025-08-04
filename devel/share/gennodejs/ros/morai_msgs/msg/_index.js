
"use strict";

let VelocityCmd = require('./VelocityCmd.js');
let NpcGhostCmd = require('./NpcGhostCmd.js');
let Transforms = require('./Transforms.js');
let VehicleSpec = require('./VehicleSpec.js');
let SyncModeCmd = require('./SyncModeCmd.js');
let RadarDetections = require('./RadarDetections.js');
let FaultStatusInfo_Overall = require('./FaultStatusInfo_Overall.js');
let SkidSteer6wUGVCtrlCmd = require('./SkidSteer6wUGVCtrlCmd.js');
let SensorPosControl = require('./SensorPosControl.js');
let MoraiSimProcHandle = require('./MoraiSimProcHandle.js');
let EgoVehicleStatus = require('./EgoVehicleStatus.js');
let ScenarioLoad = require('./ScenarioLoad.js');
let RadarDetection = require('./RadarDetection.js');
let SkidSteer6wUGVStatus = require('./SkidSteer6wUGVStatus.js');
let SyncModeCtrlCmd = require('./SyncModeCtrlCmd.js');
let FaultInjection_Sensor = require('./FaultInjection_Sensor.js');
let ERP42Info = require('./ERP42Info.js');
let SyncModeRemoveObject = require('./SyncModeRemoveObject.js');
let SyncModeAddObject = require('./SyncModeAddObject.js');
let TOF = require('./TOF.js');
let PRCtrlCmd = require('./PRCtrlCmd.js');
let FaultInjection_Response = require('./FaultInjection_Response.js');
let SkateboardCtrlCmd = require('./SkateboardCtrlCmd.js');
let GetTrafficLightStatus = require('./GetTrafficLightStatus.js');
let MoraiTLIndex = require('./MoraiTLIndex.js');
let ObjectStatusList = require('./ObjectStatusList.js');
let RobotOutput = require('./RobotOutput.js');
let SVADC = require('./SVADC.js');
let FaultInjection_Tire = require('./FaultInjection_Tire.js');
let GVStateCmd = require('./GVStateCmd.js');
let FaultInjection_Controller = require('./FaultInjection_Controller.js');
let ObjectStatusExtended = require('./ObjectStatusExtended.js');
let GeoVector3Message = require('./GeoVector3Message.js');
let VehicleCollisionData = require('./VehicleCollisionData.js');
let Conveyor = require('./Conveyor.js');
let DdCtrlCmd = require('./DdCtrlCmd.js');
let SyncModeInfo = require('./SyncModeInfo.js');
let ShipState = require('./ShipState.js');
let EventInfo = require('./EventInfo.js');
let EgoDdVehicleStatus = require('./EgoDdVehicleStatus.js');
let MultiEgoSetting = require('./MultiEgoSetting.js');
let GVDirectCmd = require('./GVDirectCmd.js');
let Lamps = require('./Lamps.js');
let GhostMessage = require('./GhostMessage.js');
let EgoVehicleStatusExtended = require('./EgoVehicleStatusExtended.js');
let WheelControl = require('./WheelControl.js');
let CMDConveyor = require('./CMDConveyor.js');
let UGVServeSkidCtrlCmd = require('./UGVServeSkidCtrlCmd.js');
let MultiPlayEventResponse = require('./MultiPlayEventResponse.js');
let IntersectionControl = require('./IntersectionControl.js');
let DillyCmd = require('./DillyCmd.js');
let MoraiTLInfo = require('./MoraiTLInfo.js');
let ExternalForce = require('./ExternalForce.js');
let SaveSensorData = require('./SaveSensorData.js');
let VehicleSpecIndex = require('./VehicleSpecIndex.js');
let WaitForTickResponse = require('./WaitForTickResponse.js');
let SkateboardStatus = require('./SkateboardStatus.js');
let PREvent = require('./PREvent.js');
let ObjectStatusListExtended = require('./ObjectStatusListExtended.js');
let MoraiSimProcStatus = require('./MoraiSimProcStatus.js');
let TrafficLight = require('./TrafficLight.js');
let CtrlCmd = require('./CtrlCmd.js');
let GPSMessage = require('./GPSMessage.js');
let MultiPlayEventRequest = require('./MultiPlayEventRequest.js');
let WaitForTick = require('./WaitForTick.js');
let SyncModeResultResponse = require('./SyncModeResultResponse.js');
let FaultStatusInfo = require('./FaultStatusInfo.js');
let SyncModeCmdResponse = require('./SyncModeCmdResponse.js');
let PRStatus = require('./PRStatus.js');
let Obstacle = require('./Obstacle.js');
let VehicleCollision = require('./VehicleCollision.js');
let FaultStatusInfo_Sensor = require('./FaultStatusInfo_Sensor.js');
let NpcGhostInfo = require('./NpcGhostInfo.js');
let CollisionData = require('./CollisionData.js');
let IntersectionStatus = require('./IntersectionStatus.js');
let WoowaDillyStatus = require('./WoowaDillyStatus.js');
let RobotState = require('./RobotState.js');
let DillyCmdResponse = require('./DillyCmdResponse.js');
let ReplayInfo = require('./ReplayInfo.js');
let IntscnTL = require('./IntscnTL.js');
let ShipCtrlCmd = require('./ShipCtrlCmd.js');
let Obstacles = require('./Obstacles.js');
let MoraiSrvResponse = require('./MoraiSrvResponse.js');
let SyncModeScenarioLoad = require('./SyncModeScenarioLoad.js');
let ObjectStatus = require('./ObjectStatus.js');
let FaultStatusInfo_Vehicle = require('./FaultStatusInfo_Vehicle.js');
let ManipulatorControl = require('./ManipulatorControl.js');
let SyncModeSetGear = require('./SyncModeSetGear.js');
let MapSpec = require('./MapSpec.js');
let SetTrafficLight = require('./SetTrafficLight.js');
let MapSpecIndex = require('./MapSpecIndex.js');

module.exports = {
  VelocityCmd: VelocityCmd,
  NpcGhostCmd: NpcGhostCmd,
  Transforms: Transforms,
  VehicleSpec: VehicleSpec,
  SyncModeCmd: SyncModeCmd,
  RadarDetections: RadarDetections,
  FaultStatusInfo_Overall: FaultStatusInfo_Overall,
  SkidSteer6wUGVCtrlCmd: SkidSteer6wUGVCtrlCmd,
  SensorPosControl: SensorPosControl,
  MoraiSimProcHandle: MoraiSimProcHandle,
  EgoVehicleStatus: EgoVehicleStatus,
  ScenarioLoad: ScenarioLoad,
  RadarDetection: RadarDetection,
  SkidSteer6wUGVStatus: SkidSteer6wUGVStatus,
  SyncModeCtrlCmd: SyncModeCtrlCmd,
  FaultInjection_Sensor: FaultInjection_Sensor,
  ERP42Info: ERP42Info,
  SyncModeRemoveObject: SyncModeRemoveObject,
  SyncModeAddObject: SyncModeAddObject,
  TOF: TOF,
  PRCtrlCmd: PRCtrlCmd,
  FaultInjection_Response: FaultInjection_Response,
  SkateboardCtrlCmd: SkateboardCtrlCmd,
  GetTrafficLightStatus: GetTrafficLightStatus,
  MoraiTLIndex: MoraiTLIndex,
  ObjectStatusList: ObjectStatusList,
  RobotOutput: RobotOutput,
  SVADC: SVADC,
  FaultInjection_Tire: FaultInjection_Tire,
  GVStateCmd: GVStateCmd,
  FaultInjection_Controller: FaultInjection_Controller,
  ObjectStatusExtended: ObjectStatusExtended,
  GeoVector3Message: GeoVector3Message,
  VehicleCollisionData: VehicleCollisionData,
  Conveyor: Conveyor,
  DdCtrlCmd: DdCtrlCmd,
  SyncModeInfo: SyncModeInfo,
  ShipState: ShipState,
  EventInfo: EventInfo,
  EgoDdVehicleStatus: EgoDdVehicleStatus,
  MultiEgoSetting: MultiEgoSetting,
  GVDirectCmd: GVDirectCmd,
  Lamps: Lamps,
  GhostMessage: GhostMessage,
  EgoVehicleStatusExtended: EgoVehicleStatusExtended,
  WheelControl: WheelControl,
  CMDConveyor: CMDConveyor,
  UGVServeSkidCtrlCmd: UGVServeSkidCtrlCmd,
  MultiPlayEventResponse: MultiPlayEventResponse,
  IntersectionControl: IntersectionControl,
  DillyCmd: DillyCmd,
  MoraiTLInfo: MoraiTLInfo,
  ExternalForce: ExternalForce,
  SaveSensorData: SaveSensorData,
  VehicleSpecIndex: VehicleSpecIndex,
  WaitForTickResponse: WaitForTickResponse,
  SkateboardStatus: SkateboardStatus,
  PREvent: PREvent,
  ObjectStatusListExtended: ObjectStatusListExtended,
  MoraiSimProcStatus: MoraiSimProcStatus,
  TrafficLight: TrafficLight,
  CtrlCmd: CtrlCmd,
  GPSMessage: GPSMessage,
  MultiPlayEventRequest: MultiPlayEventRequest,
  WaitForTick: WaitForTick,
  SyncModeResultResponse: SyncModeResultResponse,
  FaultStatusInfo: FaultStatusInfo,
  SyncModeCmdResponse: SyncModeCmdResponse,
  PRStatus: PRStatus,
  Obstacle: Obstacle,
  VehicleCollision: VehicleCollision,
  FaultStatusInfo_Sensor: FaultStatusInfo_Sensor,
  NpcGhostInfo: NpcGhostInfo,
  CollisionData: CollisionData,
  IntersectionStatus: IntersectionStatus,
  WoowaDillyStatus: WoowaDillyStatus,
  RobotState: RobotState,
  DillyCmdResponse: DillyCmdResponse,
  ReplayInfo: ReplayInfo,
  IntscnTL: IntscnTL,
  ShipCtrlCmd: ShipCtrlCmd,
  Obstacles: Obstacles,
  MoraiSrvResponse: MoraiSrvResponse,
  SyncModeScenarioLoad: SyncModeScenarioLoad,
  ObjectStatus: ObjectStatus,
  FaultStatusInfo_Vehicle: FaultStatusInfo_Vehicle,
  ManipulatorControl: ManipulatorControl,
  SyncModeSetGear: SyncModeSetGear,
  MapSpec: MapSpec,
  SetTrafficLight: SetTrafficLight,
  MapSpecIndex: MapSpecIndex,
};
