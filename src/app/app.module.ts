import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { PerfilComponent } from './perfil/perfil.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { MetasComponent } from './metas/metas.component';
import { LembretesComponent } from './lembretes/lembretes.component';
import { InicioComponent } from './inicio/inicio.component';
import {MatButtonModule} from '@angular/material/button';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FooterComponent } from './inicio/footer/footer.component';
import { GeralComponent } from './geral/geral.component';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { FinancasComponent } from './financas/financas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { LembretesService } from './services/lembretes.service';
import { LembretesDetalhesComponent } from './lembretes/lembretes-detalhes/lembretes-detalhes.component';
import { MetasDetalhesComponent } from './metas/metas-detalhes/metas-detalhes.component';
import { ProdutosDetalhesComponent } from './produtos/produtos-detalhes/produtos-detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PerfilComponent,
    ProdutosComponent,
    MetasComponent,
    LembretesComponent,
    InicioComponent,
    FooterComponent,
    GeralComponent,
    FinancasComponent,
    LembretesDetalhesComponent,
    MetasDetalhesComponent,
    ProdutosDetalhesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatGridListModule,
    MatDividerModule,
    MatSelectModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    
  ],
  providers: [HttpClientModule, LembretesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
