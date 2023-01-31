import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'img-icon',
  templateUrl: './img-icon.component.html',
  styleUrls: ['./img-icon.component.scss']
})
export class ImgIconComponent implements OnInit {
  @Input("iconName") iconName!:string;
  iconUrl!:string;

  constructor() { }

  ngOnInit(): void {
    this.iconUrl = "../../../assets/icons/" + this.iconName + ".png"
  }
}
