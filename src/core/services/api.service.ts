
import { Injectable } from '@angular/core';
import { HttpClientHelperService } from '../../core/Http/http-client-helper.service';
import { CitGlobalContantsService } from '../../core/globalUrl/cit-global-contants.service';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(
    private httpClient: HttpClientHelperService,
    private globalConst: CitGlobalContantsService
  ) { }


  getUsers() {
    return this.httpClient.getRequest(this.globalConst.userList, {});
  }
 
 
}
