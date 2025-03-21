import { Component , OnInit} from '@angular/core';
import {ActivityService} from '../service/activity.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  activityDetail: [] = [];

  constructor(private activityService:ActivityService){}

  ngOnInit(): void {
    this.loadActivityInstance();
    }

     buildTodayActivityInstance(){
      this.activityService.scheduleActivity().subscribe(
      data=>{
        this.loadActivityInstance();
      }
      );
    }

    private loadActivityInstance(){
      this.activityService.getActivityInstance().subscribe(
        data =>{ this.activityDetail=data;

        }
      );

    }
    
}
