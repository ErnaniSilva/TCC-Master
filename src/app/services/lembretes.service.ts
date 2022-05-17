import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LembreteModel } from "../models/lembrete.model";

import { environment } from "src/environments/environment";



@Injectable({
    providedIn: 'root'
})
export class LembretesService {

    constructor(private http: HttpClient) {}

    listarLembretes(): Observable<any>{
        return   this.http.get(environment.lembretesApiUrl);
    }

    cadastrarLembrete(lembrete: LembreteModel): Observable<any>{
        return this.http.post(environment.lembretesApiUrl, lembrete);
    }  

    editarLembrete(id: any, lembrete: LembreteModel): Observable<any>{
        return this.http.put(environment.lembretesApiUrl.concat(id), lembrete);
    }

    removerLembrete(id: any){
        return this.http.delete(environment.lembretesApiUrl.concat(id));
    }

    getLembrete(id:any): Observable<any>{
        return this.http.get(environment.lembretesApiUrl.concat(id));
    }
}
