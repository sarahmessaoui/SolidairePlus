import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inscrire',
  templateUrl: './inscrire.component.html',
  styleUrls: ['./inscrire.component.css']
})
export class InscrireComponent implements OnInit {
  cin: number | undefined;
  tel: string | undefined;
  nom: string | undefined;
  prenom: string | undefined;
  email: string | undefined;
  password: string | undefined;
  role: string | undefined;
  msgerreur: string = "";

  constructor(public http: HttpClient) {}

  inscrire() {
    if (
      this.email == undefined ||
      this.password == undefined ||
      this.cin == undefined ||
      this.nom == undefined ||
      this.prenom == undefined ||
      this.tel == undefined ||
      this.role == undefined
    ) {
      this.msgerreur = "Saisir tous les champs obligatoires";
    } else {
      this.http
        .post("http://localhost/Script/user.php?endpoint=register", {
          cin: this.cin,
          nom: this.nom,
          prenom: this.prenom,
          tel: this.tel,
          email: this.email,
          password: this.password,
          role: this.role,
        }, { observe: 'response', responseType: 'json' })
        .subscribe({
          next: (response) => {
            if (response.status == 200) {
              alert("Ajout utilisateur effectué avec succès");
            } else {
              const body: any = response.body;
              alert("Echec : " + body.msg);
            }
          },
          error: (error) => {
            this.msgerreur = error.message; // Affichage du message d'erreur explicite
            console.log("Une erreur est survenue:", error);
          },
        });
    }
  }

  ngOnInit(): void {}
}
