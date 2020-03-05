import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CitGlobalContantsService {

  // baseUrl
  baseUrl = environment.baseUrl;

  //userUrl
  user: string = this.baseUrl + '/users';

  //repoUrl
  repo: string = this.baseUrl + '/repos';

}
