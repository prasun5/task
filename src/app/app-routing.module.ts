import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from '../user-list/user-list.component';
import { RepoListComponent } from '../repo-list/repo-list.component';
import { UserViewComponent } from '../user-view/user-view.component';
import { RepoViewComponent } from '../repo-view/repo-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [

	{
		path: '',
		redirectTo: '/users',
		pathMatch: 'full'
	},
	{
		path: 'repository-detail/:firstName/:lastName', component: RepoViewComponent
	},
	{
		path: 'repositories/:userName', component: RepoListComponent
	},
	{
		path: 'users', component: UserListComponent
	},
	{
		path: 'user-detail/:userName', component: UserViewComponent
	},
	{
		path: '**',
		component: PageNotFoundComponent
	}

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
