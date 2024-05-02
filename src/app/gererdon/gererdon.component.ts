import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-gererdon',
  templateUrl: './gererdon.component.html',
  styleUrls: ['./gererdon.component.css']
})
export class GererdonComponent {
  showImageInput: boolean = false;
  lib: string | undefined;
  desc: string | undefined;
  Qt: string | undefined;
  photo: string | undefined;
  msgerreur: string = "";

  constructor(private apiService: ApiService) { }

  toggleImageInput() {
    this.showImageInput = !this.showImageInput;
  }

  publierDon() {
    if (!this.lib || !this.desc || !this.Qt || !this.photo) {
      this.msgerreur = "Saisir tous les champs obligatoires";
    } else {
      const data = {
        Qt: this.Qt,
        desc: this.desc,
        lib: this.lib,
        photo: this.photo
      };

      this.apiService.publierDon(data).subscribe({
        next: (response) => {
          alert("produit publié avec succée");
        },
        error: (error) => {
          console.error("Une erreur est survenue:", error);
        }
      });
    }
  }
}
