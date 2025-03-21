import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RoomService} from '../service/room.service'
import {Room} from '../model/room.model'

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  rooms: Room[] = [];
  newRoom  = {  roomName: '', roomCapacity: 0, roomLength: 0, roomWidth: 0, roomHeight: 0 };


  constructor(private http: HttpClient, private service: RoomService ) {}

  ngOnInit(): void {
    this.loadRooms();
  }

  loadRooms() {
    this.service.getRooms().subscribe(data => {
      this.rooms = data;
    });
  }

  addRoom() {
    this.service.saveRoom(this.newRoom).subscribe(() => {
      this.loadRooms();
      this.newRoom = { roomName: '', roomCapacity: 0, roomLength: 0, roomWidth: 0, roomHeight: 0 };
    });
  }
  editRoom(room: Room){

    this.newRoom=room;

  }

  deleteRoom(id: number) {
    this.service.deleteRoom(id).subscribe(() => {
      this.loadRooms();
    });
  }
}

