import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  isLoading: boolean;
  users: any;
  search: string;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.userList();
  }

  userList() {
    this.isLoading = true;
    this.apiService.getUsers()
      .subscribe(
        data => {
          this.users = data;
          this.isLoading = false;
        },
        error => {
          this.isLoading = false;
        });
  }

  updateSearchModel(value) {
    this.search = value;
  }

}
