import { Component ,OnInit} from '@angular/core';
import {ProductionDashboard} from '../model/production-dashboard.model';
import {Stage} from '../model/stage.model';
import {Room} from '../model/room.model';
import {RoomService, } from '../service/room.service';
import {ProductionService} from '../service/production.service';


@Component({
  selector: 'app-production-dashboard',
  templateUrl: './production-dashboard.component.html',
  styleUrls: ['./production-dashboard.component.css']
})
export class ProductionDashboardComponent implements OnInit {
  productions: ProductionDashboard[] = [];
  stages: Stage[] = [];
  rooms : Room[] =[];
  newProduction = { batchName: '', roomId : null,  quantity: 0, expectedStageId: null, actualStageId: null, startDate:null };

  constructor(private stageService: RoomService, private prodService: ProductionService) {}

  ngOnInit(): void {
    this.loadProductions();
    this.loadStages();
    this.loadRooms();
  }

  loadProductions() {
    this.prodService.loadProductions().subscribe(data => {
      this.productions = data;
    });
  }

  loadStages() {
    this.stageService.getStages().subscribe(data => {
      this.stages = data;
    });
  }

  loadRooms(){
    this.stageService.getRooms().subscribe(data => {
      this.rooms = data;
    });

  }

  addProduction() {
    this.prodService.addNewProduction(this.newProduction).subscribe(() => {
      console.log("current production ", this.newProduction);
      this.loadProductions();
      this.newProduction = { batchName: '', roomId : null, quantity: 0, expectedStageId: null, actualStageId: null, startDate:null };
    });
  }

  deleteProduction(id: number) {
    this.prodService.deleteProduction(id).subscribe(() => {
      this.loadProductions();
    });
  }
}

