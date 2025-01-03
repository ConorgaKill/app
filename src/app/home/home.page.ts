import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  selectedUnit: string = 'metric';  // Default to Metric

  constructor(private storage: Storage) {}

  ngOnInit() {
    this.loadUnit();
  }

  // Load the selected unit from storage
  async loadUnit() {
    const storedUnit = await this.storage.get('unit');
    if (storedUnit) {
      this.selectedUnit = storedUnit;
    }
  }
}
