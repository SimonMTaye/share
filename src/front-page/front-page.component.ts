import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page/front-page.component.html',
  styleUrls: ['./front-page/front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  Explore() {
    console.log('Exploring')
    this.router.navigate(['explore'])
  }
  Host() {
    this.router.navigate(['landing'])
    console.log('landing')
  }

}
