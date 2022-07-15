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
  public peripheral : any = {};
  //public id: string;

  constructor(private activatedRoute: ActivatedRoute) { 
    console.log("bluetooth constructor");
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("bluetooth ngoninit");
    
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
    ble.setPin("B10", function(){
      console.log("setPin success")
    }, function(err){
      console.error(err)
    });
  }

  connectToPIE(){
    /*
    console.log("connectToPIE.")
    
    ble.scan(['6e400001-b5a3-f393-e0a9-e50e24dcca9e'], 5, function(device) {
      console.log(JSON.stringify(device));
      ble.connect(device.id, peripheral => this.onConnected(peripheral), function(err){
        console.error(err)
      })
    }, function(err) {
      console.error(err);
    });
    console.log("end")
    */
    ble.connect("F033CD9F-4E54-DC70-CB47-E3970C8CCD01", peripheral => this.onConnected(peripheral), function(err){
      console.error(err)
    })
  }

  disconnect() {
    console.log("disconnect.")
    if (this.peripheral){
      console.log(JSON.stringify(this.peripheral))
    }
    ble.disconnect(this.peripheral.id, function(){
      console.log("Disconnected.")
    }, function(err){
      console.error(err)
    })
  }

  read(){
    console.log("read.")
    //this.connectToPIE()
    ble.connect("301BF8D2-C4FE-E999-9CBD-D87784E3DA92", function(p){
      console.log(JSON.stringify(p))
      //this.onConnected(p)
      ble.read("301BF8D2-C4FE-E999-9CBD-D87784E3DA92", "180A", "2A25", function(data){
        console.log("Hooray we have data"+JSON.stringify(data));
      }, function(err){
        console.error(err)
      })
    }, function(err){
      console.error(err)
    })
  }


  onConnected(p){
    //this.peripheral = Object.assign({}, p)
    this.peripheral = p
    console.log(this.peripheral)
  }

  write(){
    let data = stringToBytes("Hello")
    ble.writeWithoutResponse("301BF8D2-C4FE-E999-9CBD-D87784E3DA92", 
    "6E400001-B5A3-F393-E0A9-E50E24DCCA9E", 
    "6E400002-B5A3-F393-E0A9-E50E24DCCA9E",
    data, function(){
      console.log("Wrote.")
    }, function(err){
      console.error(err)
    }
    )
  }

  startNotification(){
    ble.startNotification("F033CD9F-4E54-DC70-CB47-E3970C8CCD01"
    , "0x1811"
    , "0x2A46", onData
    , err => console.error(err))
  }

  stopNotification(){
    ble.stopNotification("301BF8D2-C4FE-E999-9CBD-D87784E3DA92"
    , "6E400001-B5A3-F393-E0A9-E50E24DCCA9E"
    , "6e400003-b5a3-f393-e0a9-e50e24dcca9e"
    , ()=> console.log("Stopped Notification.")
    , err=> console.error(err))
  }

  isConnected(){
    ble.isConnected("301BF8D2-C4FE-E999-9CBD-D87784E3DA92",
    ()=>console.log("isConnected."),
    ()=> console.error("not Connected."))
  }
}

function stringToBytes(string) {
  var array = new Uint8Array(string.length);
  for (var i = 0, l = string.length; i < l; i++) {
      array[i] = string.charCodeAt(i);
   }
   return array.buffer;
}
function bytesToString(buffer) {
  return String.fromCharCode.apply(null, new Uint8Array(buffer));
}

var onData = function(buffer) {
  // Decode the ArrayBuffer into a typed Array based on the data you expect
  var data = new Uint8Array(buffer);
  try{
    console.log(data[0])
    console.log(data[1])
  }catch{
    console.log(data[0])
  }
}