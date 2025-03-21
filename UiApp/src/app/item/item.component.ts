import { Component , OnInit} from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  users: any = [];
  user = { name: "", email: "", age: null };

  constructor(private userService: ItemService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  createUser() {
    this.userService.createUser(this.user).subscribe(() => {
      this.loadUsers();
      this.user = { name: "", email: "", age: null };
    });
  }

  updateUser(id: string) {
    this.userService.updateUser(id, this.user).subscribe(() => {
      this.loadUsers();
    });
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe(() => {
      this.loadUsers();
    });
  }

}
