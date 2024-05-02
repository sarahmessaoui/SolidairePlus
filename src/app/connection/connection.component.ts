import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  email: string | undefined;
  password: string | undefined;
  msgerreur: string = "";

  constructor(public http: HttpClient, private router: Router) { }

  ngOnInit(): void { }

  connecter() {
    if (!this.email || !this.password) {
      this.msgerreur = "Saisir email et password";
    } else {
      this.http.post("http://localhost/Script/user.php?endpoint=login", { "email": this.email, "password": this.password }, { observe: 'response', responseType: 'json' }).subscribe(
        (response: HttpResponse<any>) => {
          if (response.status === 200) {
            alert("Connexion réussie");
            // Vous pouvez accéder au corps de la réponse JSON ainsi
            const body: any = response.body;
            const data=body.data
            
            console.log("données utilisateur",body.data)
            console.log("Message:", body.msg);
            this.router.navigate(['/home']);
          } else {
            console.log("Réponse du serveur:", response);
            
          }
        },
        error => {
          console.log('Erreur lors de la connexion:', error);
          alert("compte n'existe pas");
        }
      );
    }
  }
  
  
}
