export interface Room {
    id:number,
  roomName:string,
  roomCapacity:number,
  roomLength: number,
  roomWidth:number,
  roomHeight:number
}

export interface Activity {
  id:number,
  activityDescription:string,
  activityEntityId:number,
  activityName: string,
  activityType:string,
  duration:number,
  sequence: number,
  stageId: number
}
