import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  pageUrl: string = "";

  constructor(
    private route:ActivatedRoute,
    private location:Location){
  }

  ngOnInit(): void {
    this.pageUrl = '/' + this.route.snapshot.url.join('/');
    this.location.onUrlChange((url, state) => {
      this.pageUrl = url;
    });
  }
}
