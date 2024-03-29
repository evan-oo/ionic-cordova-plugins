import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { CameraPageRoutingModule } from './camera-routing.module';

import { CameraPage } from './camera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CameraPageRoutingModule
  ],
  declarations: [CameraPage],
  providers: [Camera]
})
export class CameraPageModule {}
