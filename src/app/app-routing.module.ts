import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from '../user-list/user-list.component';
import { RepoListComponent } from '../repo-list/repo-list.component';
import { UserViewComponent } from '../user-view/user-view.component';
import { RepoViewComponent } from '../repo-view/repo-view.component';


const routes: Routes = [
	
	{
		path:'',
		redirectTo:'/user-list',
		pathMatch:'full'
	},
	{
		path:'user-list',component:UserListComponent
	},
	{
		path:'repo-list',component:RepoListComponent
	},
	{
		path:'user-view',component:UserViewComponent
	},
	{
		path:'repo-view',component:RepoViewComponent
	},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
