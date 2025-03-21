import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment }from '../../environments/environment'
import {Room} from '../model/room.model';
import {Stage} from '../model/stage.model'

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private roomApi = '/api/rooms';
  private stageApi = '/api/stages';

  private  baseUrl = environment.API_ENDPOINT;

  constructor(private http :HttpClient) {
   }

   getRooms(){
   return  this.http.get<Room[]>(this.roomApi);
   }
   saveRoom(room:any){
    return this.http.post(this.roomApi,room);

   }
   deleteRoom(id:number ){
    return this.http.delete(this.roomApi+'/'+id);

   }

   getStages(){
    return  this.http.get<Stage[]>(this.stageApi);
    }
    saveStage(stage:any){
     return this.http.post(this.stageApi,stage);
 
    }
    deleteStage(id:number ){
     return this.http.delete(this.stageApi+'/'+id);
 
    }
}
