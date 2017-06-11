import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the StopTimingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-stop-timing',
  templateUrl: 'stop-timing.html',
})
export class StopTimingPage {

    elapsedTime: any = 0;
    hours: any;
    minutes: any;
    seconds: any;
 
    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {}
 
    ionViewDidLoad() {
 
        this.elapsedTime = this.navParams.get('elapsedTime');
 
        this.minutes = Math.floor(this.elapsedTime / 60);
        this.hours = Math.floor(this.minutes / 60);
        this.seconds = Math.floor(this.elapsedTime % 60);
 
    }
 
    submitTime(){
 
        let modifiedSeconds = (this.hours * 60 * 60) + (this.minutes * 60) + this.seconds;
 
        this.viewCtrl.dismiss(modifiedSeconds);
    }

}
