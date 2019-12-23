import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Components } from './components';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ComponentsComponent implements OnInit {
  title = 'Components';
  public rootUrl = 'https://www.infragistics.com/products/ignite-ui-angular/angular/components/';
  public components: any[];

  constructor() { }

  ngOnInit() {
    this.components = Components;
  }
}
