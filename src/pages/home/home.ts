import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
fields: any;
title: any;
  constructor(public navCtrl: NavController, public http: Http) {
    this.http.get('assets/data/theme.json').map(res => res.json()).subscribe(data => {
        this.fields = data.eventsetup.fields;
        this.title = data.eventsetup.title;
        // console.log("posts",this.posts);

    });
  }

}
