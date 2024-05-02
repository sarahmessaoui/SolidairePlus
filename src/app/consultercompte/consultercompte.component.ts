import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-consultercompte',
  templateUrl: './consultercompte.component.html',
  styleUrls: ['./consultercompte.component.css']
})
export class ConsulterCompteComponent implements OnInit {
  comptes: any[] = [];
  comptesSelectionnes: any[] = [];
  erreur: string = '';
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getListeComptes();
  }

  getListeComptes() {
    this.http.get<any>('http://localhost/Script/user.php?endpoint=listCompte')
      .subscribe(
        response => {
          if (response && response.data) {
            this.comptes = response.data;
          } else {
            console.log('Aucune donnée disponible');
          }
        },
        error => {
          console.error('Erreur lors de la récupération des comptes:', error);
        }
      );
  }

  // Ajoutez la fonction pour sélectionner/désélectionner un compte
  selectionnerCompte(compte: any) {
    if (this.comptesSelectionnes.includes(compte)) {
      this.comptesSelectionnes = this.comptesSelectionnes.filter(c => c !== compte);
    } else {
      this.comptesSelectionnes.push(compte);
    }
  }

  // Ajoutez la fonction pour supprimer les comptes sélectionnés
  supprimerComptesSelectionnes() {
    this.comptesSelectionnes.forEach(compte => {
      this.supprimerCompte(compte.cin);
    });
    // Effacer la liste des comptes sélectionnés après la suppression
    this.comptesSelectionnes = [];
  }

  supprimerCompte(cin: string) {
    this.http.post<any>('http://localhost/Script/user.php?endpoint=deleteCompte', { cin })
      .subscribe(
        response => {
          console.log(response.message);
          // Actualiser la liste des comptes après la suppression
          this.getListeComptes();
        },
        error => {
          console.error('Erreur lors de la suppression du compte:', error);
        }
      );
  }
}
