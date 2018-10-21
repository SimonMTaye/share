import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page/front-page.component.html',
  styleUrls: ['./front-page/front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Connect(){
    console.log('Connecting')
  }
  Host(){
    console.log('Hosting')
  }

}
