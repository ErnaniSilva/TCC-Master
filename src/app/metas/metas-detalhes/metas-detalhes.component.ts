import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaModel } from 'src/app/models/meta';
import { MetasService } from 'src/app/services/metas.service';

@Component({
  selector: 'app-metas-detalhes',
  templateUrl: './metas-detalhes.component.html',
  styleUrls: ['./metas-detalhes.component.css']
})
export class MetasDetalhesComponent implements OnInit {

  meta: MetaModel;

  constructor(private metasService: MetasService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.metasService.getMeta(this.route.snapshot.params['id']).subscribe(meta => this.meta = meta)
  }

}
