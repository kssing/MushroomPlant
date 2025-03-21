import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment }from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductionService {

  private  baseUrl = environment.API_ENDPOINT;
  private productionListApi = '/api/plant-production';
  
    constructor(private http :HttpClient) {
     }

     loadProductions(){
      return this.http.get<any[]>(this.productionListApi);
     }
     addNewProduction(production :any){
      return this.http.post(this.productionListApi, production);
     }
     deleteProduction(id:number){
      return this.http.delete(this.productionListApi+'/'+ id);

     }
}
