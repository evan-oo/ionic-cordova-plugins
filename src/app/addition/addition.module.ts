import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
/*
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
*/
import { AdditionPageRoutingModule } from './addition-routing.module';

import { AdditionPage } from './addition.page';
//declare var Calculator: any;

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdditionPageRoutingModule
  ],
  declarations: [AdditionPage]
  //providers: [Calculator]
})
export class AdditionPageModule {}
