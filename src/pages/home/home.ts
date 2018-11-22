import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';

/**
 * Initial and unique page for the APP
 *
 * @autor Brandon Sanchez
 * @created 2018-11-22 12:13:00
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public search_text: string = "";
  public items: any = [];
  public audio: any = null;

  constructor(
    public navCtrl: NavController,
    private http: HttpClient,
    private toastCtrl: ToastController
  ) {

  }

  /**
   * Initialize files from json
   */
  ionViewDidLoad(refresher?: any) {
    this.search_text = '';
    this.http.get('assets/audios.json')
      // .map((res: any) => res.json())
      .subscribe(
        audios => {
          console.log(audios);
          this.items = audios;

          if (refresher != undefined) {
            refresher.complete();
          }
        },
        err => {
          console.log("Error loading audios => ", err);
          if (refresher != undefined) {
            refresher.complete();
          }

          this.toastCtrl.create({
            duration: 5000,
            message: "Ups! no se pudo cargar, arrastre y suelte para refrescar"
          }).present();
        });
  }

  /**
   * Reproduce file from item audio
   * @param item Audio item from json file
   */
  play(item) {
    if (this.audio != null) {
      try {
        this.audio.pause();
      } catch (e) {
        console.log(e);
      } finally { this.audio = null; }
    }

    this.audio = new Audio(item.file);
    this.audio.play();
  }
}
