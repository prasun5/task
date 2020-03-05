import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../core/services/api.service';

@Component({
  selector: 'app-repo-view',
  templateUrl: './repo-view.component.html',
  styleUrls: ['./repo-view.component.scss']
})
export class RepoViewComponent implements OnInit {

  isLoading: boolean;
  repoDetails: any;
  firstName: string;
  lastName: string;
  fullName: string;

  constructor(
    private apiService: ApiService,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.firstName = this.activeRoute.snapshot.paramMap.get('firstName');
    this.lastName = this.activeRoute.snapshot.paramMap.get('lastName');
    this.fullName = this.firstName + '/' + this.lastName;
    this.repoDetail();
  }

  repoDetail() {
    this.isLoading = true;
    this.apiService.getRepoDetails(this.fullName)
      .subscribe(
        data => {
          this.repoDetails = data;
          this.isLoading = false;
        },
        error => {
          this.isLoading = false;
        });
  }
}
