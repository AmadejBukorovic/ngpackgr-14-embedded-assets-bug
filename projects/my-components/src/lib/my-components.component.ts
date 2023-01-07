import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'lib-my-components',
  template: `
    <div class="coffee-icon"></div>
  `,
  styles: [`
    .coffee-icon {
      background-image: url('../../../../scss/resources/coffee-icon.svg');
      background-repeat: no-repeat;
      width: 100px;
      height: 100px;
    }
  `
  ]
})

export class MyComponentsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
