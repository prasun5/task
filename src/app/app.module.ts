import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Http client for using api data fetching
import { HttpClientModule } from '@angular/common/http';


//Import component for using list and view
import { AppComponent } from './app.component';
import { UserListComponent } from '../user-list/user-list.component';
import { RepoListComponent } from '../repo-list/repo-list.component';
import { UserViewComponent } from '../user-view/user-view.component';
import { RepoViewComponent } from '../repo-view/repo-view.component';

// App routing modules
import { AppRoutingModule } from './app-routing.module';
import { CommonModuleModule } from '../common-module/common-module.module';

// Services file
import { HttpClientHelperService } from '../core/Http/http-client-helper.service';
import { CitGlobalContantsService } from '../core/globalUrl/cit-global-contants.service';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserViewComponent,
    RepoListComponent,
    RepoViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
