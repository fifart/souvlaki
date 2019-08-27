import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public navCtrl: NavController,private iab: InAppBrowser /* 2 */) {}
ngOnInit(){

}

openOnline(){
  const browser = this.iab.create('https://www.thelosouvlakia.gr/adetailframelast.aspx?id=3749','_self',{location:'no'});
  
}

}
