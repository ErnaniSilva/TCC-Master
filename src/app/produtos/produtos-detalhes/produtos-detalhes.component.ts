import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoModel } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produtos-detalhes',
  templateUrl: './produtos-detalhes.component.html',
  styleUrls: ['./produtos-detalhes.component.css']
})
export class ProdutosDetalhesComponent implements OnInit {

  produto: ProdutoModel;

  constructor(private produtoService: ProdutoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.produtoService.getProduto(this.route.snapshot.params['id']).subscribe(produto => this.produto = produto);
  }

}
