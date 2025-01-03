import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { Routes } from '@angular/router';  // Import Routes if you need them

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    // Your component logic
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    HttpClientModule,  // Include the HttpClientModule in the imports array
    // Add any additional modules here
  ],
  bootstrap: [AppComponent],  // This should be your root component
})
export class AppModule {}
