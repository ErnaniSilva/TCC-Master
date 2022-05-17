import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProdutoModel } from '../models/produto';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {


  constructor(private http: HttpClient) {}

  listarProdutos():Observable<any>{
    return this.http.get(environment.produtosApiUrl);
  }

  criarProduto(produto: ProdutoModel): Observable<any>{
    return this.http.post(environment.produtosApiUrl, produto);
  }

  editarProduto(id: any, produto: ProdutoModel): Observable<any> {
    return this.http.put(environment.produtosApiUrl.concat(id), produto);
  }

  removerProduto(id:any){
    return this.http.delete(environment.produtosApiUrl.concat(id));
  }

  getProduto(id: any): Observable<any>{
    return this.http.get(environment.produtosApiUrl.concat(id));
  }
}
