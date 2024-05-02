import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { InscrireComponent } from './inscrire.component';

@Injectable({
  providedIn: 'root'
})
export class InscrireService {
  

  constructor(private http: HttpClient) { }
  
}
