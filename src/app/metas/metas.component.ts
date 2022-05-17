import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MetaModel } from '../models/meta';
import { MetasService } from '../services/metas.service';

@Component({
  selector: 'app-metas',
  templateUrl: './metas.component.html',
  styleUrls: ['./metas.component.css']
})
export class MetasComponent implements OnInit {
  meta: MetaModel = new MetaModel();
  metas: Array<any> = new Array();

  constructor(private metasService: MetasService, public dialog: MatDialog) { }

  ngOnInit(){
      this.listarMetas();
  }

  salvar(){
    console.log(this.meta);
    this.metasService.criarMeta(this.meta).subscribe(meta => {
      this.meta = new MetaModel();
      this.listarMetas();
    }, err => {
      console.log("Erro ao cadastrar a meta", err)
    });
  }

  listarMetas(){
    this.metasService.listarMetas().subscribe(metas => {
      this.metas = metas;
    }, err => {
      console.log("Error em listar as metas", err);
    });
  }

  editarMeta(id: number){
    this.metasService.editarMeta(id,this.meta).subscribe(meta =>{
      this.meta = new MetaModel();
      this.listarMetas();
    }, err => {
      console.log("Erro ao atuaalizar a meta", err)
    });
  }

  removerMeta(id: any){
    this.metasService.removerMeta(id).subscribe(meta => {
      this.meta = new MetaModel();
      this.listarMetas();
    }, err => {
      console.log("Erro ao deletar a meta", err)
    });
  }

}
