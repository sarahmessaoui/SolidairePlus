import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectionComponent } from './connection/connection.component';
import { ConfirmerCollecteComponent } from './confirmer-collecte/confirmer-collecte.component';
import { GererCollecteurComponent } from './gerer-collecteur/gerer-collecteur.component';
import { AffecterDonComponent } from './affecter-don/affecter-don.component';
import { ConsultercollecteurComponent } from './consultercollecteur/consultercollecteur.component';
import { RechercherDonComponent } from './rechercher-don/rechercher-don.component';
import { GerercompteComponent } from './gerercompte/gerercompte.component';
import { GererdonComponent } from './gererdon/gererdon.component';
import { ConsulterCompteComponent } from './consultercompte/consultercompte.component';
import { ConsulterdonComponent } from './consulterdon/consulterdon.component';
import { InscrireComponent } from './inscrire/inscrire.component';
import { UpdateComponent } from './update/update.component';
import { UpdatedonComponent } from './updatedon/updatedon.component';

const routes: Routes = [
 {path:"connexion",component:ConnectionComponent},
 {path:"collect",component:ConfirmerCollecteComponent},
 {path:"gerercollecteur",component:GererCollecteurComponent},
 {path:"affecter",component:AffecterDonComponent},
 {path:"consulter",component:ConsultercollecteurComponent},
 {path:"home",component:RechercherDonComponent},
 {path:"compte",component:GerercompteComponent},
 {path:"gererdon",component:GererdonComponent},
 {path:"consultercompte",component:ConsulterCompteComponent},
 {path:"consulterdon",component:ConsulterdonComponent},
 {path:"inscrire",component:InscrireComponent},
 {path:"updatedon",component:UpdatedonComponent},
 {path:"update",component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
