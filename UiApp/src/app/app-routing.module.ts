import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoomComponent} from './room/room.component';
import {StageComponent} from './stage/stage.component';
import {ProductionDashboardComponent} from './production-dashboard/production-dashboard.component';
import {TaskComponent}from './activity/task/task.component'
import {DashboardComponent} from './dashboard/dashboard.component'

const routes: Routes = [
  {path:'rooms', component: RoomComponent},
  {path:'stages', component: StageComponent},
  {path :'dashboard' , component: ProductionDashboardComponent},
  {path :'activity', component: TaskComponent},
  {path :'', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
