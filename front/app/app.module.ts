
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component'

import { AppRoutingModule } from './app-routing.module';
import { ConfirmerCollecteComponent } from './confirmer-collecte/confirmer-collecte.component';
import { GererCollecteurComponent } from './gerer-collecteur/gerer-collecteur.component';
import { AffecterDonComponent } from './affecter-don/affecter-don.component';
import { ConsultercollecteurComponent } from './consultercollecteur/consultercollecteur.component';
import { RechercherDonComponent } from './rechercher-don/rechercher-don.component';
import { GerercompteComponent } from './gerercompte/gerercompte.component';
import { GererdonComponent } from './gererdon/gererdon.component';
import { ConsulterCompteComponent } from './consultercompte/consultercompte.component';
import { ConsulterdonComponent } from './consulterdon/consulterdon.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InscrireComponent } from './inscrire/inscrire.component';
import { ApiService } from './api.service';
import { ConnectionComponent } from './connection/connection.component';
import { UpdateComponent } from './update/update.component';
import { UpdatedonComponent } from './updatedon/updatedon.component';


@NgModule({
  declarations: [
    
    AppComponent,
    ConnectionComponent,
    ConfirmerCollecteComponent,
    GererCollecteurComponent,
    AffecterDonComponent,
    ConsultercollecteurComponent,
    RechercherDonComponent,
    GerercompteComponent,
    GererdonComponent,
    ConsulterCompteComponent,
    ConsulterdonComponent,
    NavbarComponent,
    InscrireComponent,
    UpdateComponent,
    UpdatedonComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }