import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
	  <div class="jumbotron">
	  <h1 class="display-4">Book App</h1>
	  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
	
	</div>

  `,
  styles: []
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
