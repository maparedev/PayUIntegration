import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from './Services/store.service';

@Component({
  selector: 'ptc-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title: string = "Paul's Training Company";

  constructor(public storeService : StoreService, private router: Router){

  }
  onLogout() {
    this.storeService.logOut();
    this.router.navigate(["dashboard"]);

  }
}
