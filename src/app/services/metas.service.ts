import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { MetaModel } from "../models/meta";


@Injectable({
    providedIn: 'root'
})
export class MetasService {
    

    constructor(private http: HttpClient) {}

    listarMetas(): Observable<any>{
        return this.http.get(environment.metasApiUrl);
     }

    criarMeta(meta: MetaModel): Observable<any>{
        return this.http.post(environment.metasApiUrl, meta);
    }

    editarMeta(id: any, meta: MetaModel): Observable<any> {
        return this.http.put(environment.metasApiUrl.concat(id), meta);
    }

    removerMeta(id:any){
        return this.http.delete(environment.metasApiUrl.concat(id));
    }

    getMeta(id: any): Observable<any>{
        return this.http.get(environment.metasApiUrl.concat(id));
    }
}
