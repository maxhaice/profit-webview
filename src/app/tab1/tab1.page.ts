import { Component, OnInit } from '@angular/core';
import {Platform} from '@ionic/angular';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {FCM} from '@ionic-native/fcm/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public barcode = 'Barcode';
  public iframe;
  public src = 'https://h-profit.com/?utm_source=android';
  constructor(public platform: Platform, public barcodeScanner: BarcodeScanner,
              private fcm: FCM, private storage: Storage) {
    if (this.platform.is('android')){
      this.src = 'https://h-profit.com/?utm_source=android';
    }
    else{
      this.src = 'https://h-profit.com/?utm_source=ios';
    }
    this.platform.ready()
        .then(() => {
          this.fcm.onNotification().subscribe(data => {
            if (data.wasTapped) {
              console.log('Received in background');
            } else {
              console.log('Received in foreground');
            }
          });
    });
  }
  ngOnInit(): void {
    window.addEventListener('message', (event)=>{
      if(event.data){
        this.storage.set('account', event.data);
      }
    }, false);

  }

  barcodeScan(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.barcode = barcodeData.text;
      this.postMessage(barcodeData.text);
    }).catch(err => {
      console.log('Error', err);
    });
  }


  onAframeContentLoad(){
    // @ts-ignore
    this.iframe = window.frames.aframe;
    this.storage.get('account').then((value)=>{
      if (!value) return;
      this.iframe.postMessage(value,'*');
    });
  }

  postMessage(barcode1: string){
    this.iframe.postMessage(barcode1, 'ionic-security');
  }
}
