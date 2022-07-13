import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

declare let ble: any;

@Component({
  selector: 'app-folder',
  templateUrl: './bluetooth.page.html',
  styleUrls: ['./bluetooth.page.scss'],
})
export class BluetoothPage implements OnInit {

  public folder: string;

  constructor(private activatedRoute: ActivatedRoute) { 
    console.log("bluetooth constructor");
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("bluetooth ngoninit");
    ble.scan([], 5, function(device) {
      console.log(JSON.stringify(device));
    }, function(err) {
      console.error(err);
    });
  }

  startScan() {
    console.log("startScan.")
    ble.startScan([], function(device) {
      console.log(JSON.stringify(device));
    }, function(err){
      console.error(err);
    });
  
    setTimeout(ble.stopScan,
      5000,
      function() { console.log("Scan complete"); },
      function() { console.log("stopScan failed"); }
    );
  }

  startScanWithOptions(){
    console.log("startScanWithOptions.")
    ble.startScanWithOptions([],
      { reportDuplicates: true },
      function(device) {
          console.log(JSON.stringify(device));
      }, function(err){
        console.error(err);
      });
  }

  stopScan(){
    console.log("stopScan.")
    ble.stopScan(function() { console.log("Scan complete");}, function() { console.log("stopScan failed"); })
  }

  setPin(){
    console.log("setPin.")
    ble.setPin("001", function(){
      console.log("setPin success")
    }, function(err){
      console.error(err)
    });
  }
}
