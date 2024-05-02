import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  comptes: any[] = [];
  comptesSelectionnes: any[] = [];
  modifierActivee: boolean = false;
  cin: string = '';
  nouvelEmail: string = '';
  nouveauPassword: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getListeComptes();
  }

  getListeComptes() {
    this.apiService.getListeComptes().subscribe(
      response => {
        if (response && response.data) {
          this.comptes = response.data;
          this.comptes.forEach(compte => compte.selectionnee = false);
        } else {
          console.log('Aucune donnée disponible');
        }
      },
      error => {
        console.error('Erreur lors de la récupération des comptes:', error);
      }
    );
  }

  selectionnerCompte(compte: any) {
    compte.selectionnee = !compte.selectionnee;
    if (compte.selectionnee) {
      this.comptesSelectionnes.push(compte);
    } else {
      const index = this.comptesSelectionnes.findIndex(selected => selected.cin === compte.cin);
      if (index !== -1) {
        this.comptesSelectionnes.splice(index, 1);
      }
    }
    this.modifierActivee = this.comptesSelectionnes.length > 0;
  }

  toggleModifier() {
    this.modifierActivee = !this.modifierActivee;
  }

  modifierComptes() {
    const observables = this.comptesSelectionnes.map(compte => {
      const data = {
        cin: compte.cin,
        nouvelEmail: this.nouvelEmail,
        nouveauPassword: this.nouveauPassword
      };
      return this.apiService.updateCompte(data);
    });
  
    forkJoin(observables).subscribe(
      responses => {
        alert('Modifications terminées');
        this.getListeComptes(); 
        this.cin = '';
        this.nouvelEmail = ''; 
        this.nouveauPassword = '';
        this.modifierActivee = false;
        console.log('Données des comptes après modification :', this.comptes);

      },
      error => {
        console.log('Erreur lors de la modification des comptes:', error);
      }
    );
  }
}
