import { Component, OnInit } from '@angular/core';
import { InscrireComponent } from './inscrire/inscrire.component';
import { InscrireService } from './inscrire/inscrire.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  users: InscrireComponent[] =[];
  erreur='';
  success='';
  constructor(private InscrireService: InscrireService) {}
 
  ngOnInit() {
    

}


}