import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
})
export class CountriesPage implements OnInit {
  countries: any[] = [];
  searchTerm: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.searchCountries();
  }

  searchCountries() {
    if (this.searchTerm.trim() === '') {
      this.countries = [];
      return;
    }

    this.http
      .get<any[]>(`https://restcountries.com/v3.1/name/${this.searchTerm}`)
      .subscribe((data) => {
        this.countries = data;
      });
  }
}
