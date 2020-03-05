import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [HeaderComponent, FooterComponent, LoaderComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent
  ],
  providers: []
})
export class CommonModuleModule { }
