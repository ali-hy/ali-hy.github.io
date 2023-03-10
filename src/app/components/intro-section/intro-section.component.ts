import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-intro-section',
  templateUrl: './intro-section.component.html',
  styleUrls: ['./intro-section.component.scss']
})
export class IntroSectionComponent implements OnInit {
  @Input() title = "";
  @Input() subtitle?:string = undefined;

  constructor() {}

  ngOnInit(): void {
  }
}
