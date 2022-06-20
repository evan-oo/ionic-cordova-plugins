import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  public camera: string;


  constructor(private activatedRoute: ActivatedRoute) { console.log("camera constructor"); }

  ngOnInit() {
    this.camera = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
