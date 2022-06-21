import { Component, OnInit } from '@angular/core';

import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

@Component({
  selector: 'app-folder',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  
  public image: string;
  alt = "alt";
  display = false;

  constructor(private camera: Camera) { }

  ngOnInit() {
    console.log("camera ngOnInit");
  }

    takepic(){
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
      
      this.camera.getPicture(options).then((imageData) => {
       // imageData is either a base64 encoded string or a file URI
       // If it's base64 (DATA_URL):
        console.log("success takepic()");
        let base64Image = 'data:image/jpeg;base64,' + imageData;
        this.image = base64Image;
        this.display = true;
        console.log(this.image)
      }, (err) => {
       // Handle error
       alert(err);
      });
    }
}
