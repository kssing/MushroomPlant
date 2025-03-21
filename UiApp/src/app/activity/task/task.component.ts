import { Component, OnInit } from '@angular/core';
import {ActivityService} from '../../service/activity.service'
import {Activity} from '../../model/room.model'
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
 activities:  Activity[] = [];
  constructor( private  activityService: ActivityService ){}

  ngOnInit(): void {
    this.loadActivity();
    //throw new Error('Method not implemented.');
  }

  private loadActivity(){
    this.activityService.loadActivity().subscribe({
       next : (data )=> {
              this.activities = data;
              },
       error : (e)=> {console.log("error is fetching data ");}      

  });

  }

}
