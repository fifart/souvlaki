import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NavController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit, OnDestroy, AfterViewInit {
  public unsubscribeBackEvent: any;
  backButtonSubscription;
  constructor(public navCtrl: NavController,private iab: InAppBrowser, private platform: Platform /* 2 */) {}

  ngOnInit(){}
  ngAfterViewInit() {
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });
  }
  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();
  }

openOnline(){
  const browser = this.iab.create('https://www.thelosouvlakia.gr/adetailframelast.aspx?id=3749','_self',{location:'no'});
  
}



}
