import { Component, OnInit } from '@angular/core';
import { LembreteModel } from '../models/lembrete.model';
import { LembretesService } from '../services/lembretes.service';

@Component({
  selector: 'app-lembretes',
  templateUrl: './lembretes.component.html',
  styleUrls: ['./lembretes.component.css']
})
export class LembretesComponent implements OnInit {

  lembrete: LembreteModel = new LembreteModel();
  lembretes: Array<any> = new Array();

  constructor(private lembreteService: LembretesService) { }

  ngOnInit(): void {
    this.listarLembretes();
  }

  salvar(){
    console.log(this.lembrete);
    this.lembreteService.cadastrarLembrete(this.lembrete).subscribe(lembrete =>{
      this.lembrete = new LembreteModel();
      this.listarLembretes();
    }, err =>{
      console.log("Erro ao cadastrar o lembrete", err);
    });
  }

  listarLembretes(){
    this.lembreteService.listarLembretes().subscribe(lembretes => {
      this.lembretes = lembretes;
    }, err =>{
      console.log('Erro ao listar os lembretes', err);
    });
  }

  editarLembrete(id: number){
    this.lembreteService.editarLembrete(id, this.lembrete).subscribe(lembrete =>{
      this.lembrete = new LembreteModel();
      this.listarLembretes();
    }, err =>{
      console.log('Erro ao editar o lembrete', err);
    });
  }

  removerLembrete(id: number){
    this.lembreteService.removerLembrete(id).subscribe(lembrete =>{
      this.lembrete = new LembreteModel();
      this.listarLembretes();
    }, err =>{
      console.log("Erro ao deletar o lembrete", err);
    });
  }

}
