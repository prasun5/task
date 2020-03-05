import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CitGlobalContantsService {

   // baseUrl
  baseUrl = environment.baseUrl;

  //User List
  userList: string = this.baseUrl + '/users';

  userRepo: string = this.baseUrl + '/repo';


}
