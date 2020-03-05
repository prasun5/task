import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../core/services/api.service';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent implements OnInit {

  isLoading: boolean;
  repos: any;
  userName: string;

  constructor(
    private apiService: ApiService,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.userName = this.activeRoute.snapshot.paramMap.get('userName');
    this.userList();
  }

  userList() {
    this.isLoading = true;
    this.apiService.getRepos(this.userName)
      .subscribe(
        data => {
          this.repos = data;
          this.isLoading = false;
        },
        error => {
          this.isLoading = false;
        });
  }

}
