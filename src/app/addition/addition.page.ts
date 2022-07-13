import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

declare let Calculator: any;

@Component({
  selector: 'app-folder',
  templateUrl: './addition.page.html',
  styleUrls: ['./addition.page.scss'],
})
export class AdditionPage implements OnInit {

  sum_result = "";
  result = false;
  num1: number;
  num2: number;
  //var a = cordova.plugins.addition;


  constructor() { 
    console.log("AdditionPage Constructor");
  }

  ngOnInit() {
    console.log("AdditionPage ngOnInit");
    console.log(Calculator.PI);
  }

  add() {
    console.log("add function");
    console.log("num1 = " + this.num1 + "  ||  num2 = " + this.num2);
    
    if(!this.num2 || !this.num1) {
      //console.log("null = false");
      alert("Please input a number");
      this.sum_result = ""
    }else {
      this.result = true;
      console.log("adding");
      
      var a = [this.num1, this.num2];
      console.log(a)

      /*
      Calculator.addition(a).then(result =>{
        this.sum_result = this.num1 + " + " + this.num2 + " = " + result ;
        console.log(this.sum_result);
      }).catch(err => {
        alert(err);
      })
      */

      Calculator.addition(a, result =>{
        this.sum_result = this.num1 + " + " + this.num2 + " = " + result ;
        console.log(this.sum_result);
      }, err => {
        alert(err);
      });
    }
    
  }
}
