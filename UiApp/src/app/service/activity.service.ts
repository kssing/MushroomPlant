import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment }from '../../environments/environment';
import {Activity} from '../model/room.model';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private activityApi='/api/Activity';
  private activityInstanceApi='/api/Activity/instance';
  private ScheduleActivityInstanceApi='/api/Activity/scheduleAtivity';
 constructor(private http :HttpClient) {
    }
 
    loadActivity(){
    return  this.http.get<Activity[]>(this.activityApi);
    }

    getActivityInstance(){
      return  this.http.get<[]>(this.activityInstanceApi);
      }

      scheduleActivity(){
       return  this.http.post<string>(this.ScheduleActivityInstanceApi, null);
      }
}
