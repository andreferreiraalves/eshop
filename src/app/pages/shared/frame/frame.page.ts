import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.page.html',
})
export class FramePage implements OnInit {

  constructor(
    private menuCtrl: MenuController,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  goToPage(page: string) {
    this.menuCtrl.close();
    this.navCtrl.navigateRoot(page);
  }

}
