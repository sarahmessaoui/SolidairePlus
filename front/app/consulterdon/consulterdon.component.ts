import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consulterdon',
  templateUrl: './consulterdon.component.html',
  styleUrls: ['./consulterdon.component.css']
})
export class ConsulterdonComponent implements OnInit {

  dons: any[] = [];
  selectedDons: any[] = [];
  get donsChunked(): any[][] {
    const chunkSize = 3; // Nombre d'éléments par sous-tableau
    const result = [];
    for (let i = 0; i < this.dons.length; i += chunkSize) {
      result.push(this.dons.slice(i, i + chunkSize));
    }
    return result;
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getDonsList();
  }

  getDonsList(): void {
    this.http.get<any>('http://localhost/Script/user.php?endpoint=list').subscribe(
      (response) => {
        this.dons = response.data;
      },
      (error) => {
        console.log('Une erreur est survenue lors de la récupération des dons :', error);
      }
    );
  }

  toggleSelectDon(don: any): void {
    don.selected = !don.selected; // Mettre à jour la propriété selected
    if (don.selected) {
      this.selectedDons.push(don);
    } else {
      this.selectedDons = this.selectedDons.filter(selectedDon => selectedDon.id !== don.id);
    }
  }

  isSelected(don: any): boolean {
    return this.selectedDons.some(selectedDon => selectedDon.id === don.id);
  }

  deleteSelectedDons(): void {
    this.selectedDons.forEach(selectedDon => {
      this.http.post<any>('http://localhost/Script/user.php?endpoint=delete', { id: selectedDon.id }).subscribe(
        (response) => {
          console.log('Don supprimé avec succès :', selectedDon);
          // Mettre à jour la liste des dons après la suppression
          this.getDonsList();
        },
        (error) => {
          console.log('Une erreur est survenue lors de la suppression du don :', error);
        }
      );
    });
  }

}
