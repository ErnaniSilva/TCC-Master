import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinancasComponent } from './financas/financas.component';
import { GeralComponent } from './geral/geral.component';
import { InicioComponent } from './inicio/inicio.component';
import { LembretesDetalhesComponent } from './lembretes/lembretes-detalhes/lembretes-detalhes.component';
import { LembretesComponent } from './lembretes/lembretes.component';
import { MenuComponent } from './menu/menu.component';
import { MetasDetalhesComponent } from './metas/metas-detalhes/metas-detalhes.component';
import { MetasComponent } from './metas/metas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ProdutosDetalhesComponent } from './produtos/produtos-detalhes/produtos-detalhes.component';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [

{ path: 'Menu', component: MenuComponent},

{ path: 'Perfil', component: PerfilComponent, data: { title:'Perfil'} },
 
{ path: 'financas', component: FinancasComponent, data: { title: 'Finanças'} },

{ path: 'inicio', component: InicioComponent, data: { title: 'Inicio'} },

{ path:'geral', component: GeralComponent, data: { title: 'Geral' } },

{ path: 'produtos', component: ProdutosComponent, data: { title: 'Produtos'} },
{ path: 'produtos/produtos-detalhes/:id', component: ProdutosDetalhesComponent, data: { title: 'Detalhes Produto'} },

{ path: 'lembretes', component: LembretesComponent, data: { title: 'Lembretes'} },
{ path: 'lembretes/lembretes-detalhes/:id', component: LembretesDetalhesComponent,data: {title: 'Detalhes Lembretes'}},

{ path: 'metas', component: MetasComponent, data: { title: 'Metas'} },
{ path: 'metas/metas-detalhes/:id', component: MetasDetalhesComponent, data: { title: 'Detalhes Meta'} },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
