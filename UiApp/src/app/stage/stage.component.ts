import { Component, OnInit } from '@angular/core';
import {RoomService} from '../service/room.service';
import {Stage} from '../model/stage.model';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {
  stages: Stage[] = [];
  newStage = { stageName: '', stageDescription: '', temperature: 0, humidity: 0, co2Level: 0 };

  constructor(private service: RoomService) {}

  ngOnInit(): void {
    this.loadStages();
  }

  loadStages() {
    this.service.getStages().subscribe(data => {
      this.stages = data;
    });
  }

  editStage( stage:Stage){
    this.newStage=stage;
  }

  addStage() {
    this.service.saveStage(this.newStage).subscribe(() => {
      this.loadStages();
      this.newStage = { stageName: '', stageDescription: '', temperature: 0, humidity: 0, co2Level: 0 };
    });
  }

  deleteStage(id: number) {
    this.service.deleteStage(id).subscribe(() => {
      this.loadStages();
    });
  }
}

