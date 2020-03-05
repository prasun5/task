import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../core/services/api.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  isLoading: boolean;
  user: any;
  userName: string;


  constructor(
    private apiService: ApiService,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.userName = this.activeRoute.snapshot.paramMap.get('userName');
    this.userDetails();
  }

  userDetails() {
    this.isLoading = true;
    this.apiService.getUser(this.userName)
      .subscribe(
        data => {
          this.user = data;
          this.isLoading = false;
        },
        error => {
          this.isLoading = false;
        });
  }



}
