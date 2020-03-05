import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Http client for using api data fetching
import { HttpClientModule } from '@angular/common/http';


//Import component for using list and view
import { AppComponent } from './app.component';
import { UserListComponent } from '../user-list/user-list.component';
import { RepoListComponent } from '../repo-list/repo-list.component';
import { UserViewComponent } from '../user-view/user-view.component';
import { RepoViewComponent } from '../repo-view/repo-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// App routing modules
import { AppRoutingModule } from './app-routing.module';
import { CommonModuleModule } from '../common-module/common-module.module';

// Services file
import { HttpClientHelperService } from '../core/Http/http-client-helper.service';
import { CitGlobalContantsService } from '../core/globalUrl/cit-global-contants.service';
import { DatePipe } from '@angular/common';

//Search filter
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserViewComponent,
    RepoListComponent,
    RepoViewComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    CommonModuleModule,
    AppRoutingModule
  ],
  providers: [
    CitGlobalContantsService,
    HttpClientHelperService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
