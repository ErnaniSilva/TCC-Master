import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LembreteModel } from 'src/app/models/lembrete.model';
import { LembretesService } from 'src/app/services/lembretes.service';

@Component({
  selector: 'app-lembretes-detalhes',
  templateUrl: './lembretes-detalhes.component.html',
  styleUrls: ['./lembretes-detalhes.component.css']
})
export class LembretesDetalhesComponent implements OnInit {

  lembrete: LembreteModel;

  constructor(private lembreteService: LembretesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
   this.lembreteService.getLembrete(this.route.snapshot.params['id']).subscribe(lembrete => this.lembrete = lembrete)
  }

}
