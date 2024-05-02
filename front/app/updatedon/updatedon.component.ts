import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-updatedon',
  templateUrl: './updatedon.component.html',
  styleUrls: ['./updatedon.component.css']
})
export class UpdatedonComponent implements OnInit {
  dons: any[] = [];
  donsSelectionnes: any[] = [];
  modifierActivee: boolean = false;
  lib: string = '';
  Qt: string = '';
  desc: string = '';
  photo: string = '';
  id: string = '';
  

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getListeDons();
  }

  getListeDons() {
    this.apiService.getListeDons().subscribe(
      response => {
        if (response && response.data) {
          this.dons = response.data;
          this.dons.forEach(don => don.selectionne = false);
        } else {
          console.log('Aucune donnée disponible');
        }
      },
      error => {
        console.error('Erreur lors de la récupération des dons:', error);
      }
    );
  }

  selectionnerDon(don: any) {
    don.selectionne = !don.selectionne;
    if (don.selectionne) {
      this.donsSelectionnes.push(don);
    } else {
      const index = this.donsSelectionnes.findIndex(selected => selected.id === don.id);
      if (index !== -1) {
        this.donsSelectionnes.splice(index, 1);
      }
    }
    this.modifierActivee = this.donsSelectionnes.length > 0;
  }

  toggleModifier() {
    this.modifierActivee = !this.modifierActivee;
  }

  modifierDons() {
    const observables = this.donsSelectionnes.map(don => {
      const data = {
        id: don.id,
        lib: this.lib,
        Qt: this.Qt,
        desc: this.desc,
        photo: this.photo
      };
      console.log(data);
      return this.apiService.updateDon(data);
    });

    forkJoin(observables).subscribe(
      responses => {
        alert('Modifications terminées');
        this.getListeDons(); 
        this.lib = '';
        this.Qt = ''; 
        this.desc = '';
        this.photo = '';
        this.modifierActivee = false;
      },
      error => {
        console.log('Erreur lors de la modification des dons:', error);
      }
    );
  }
}
