import { Component } from '@angular/core';
import * as $ from 'jquery';
import { routerTransition } from './animations';
import { RouterOutlet } from '@angular/router';

export function isHome() {
  return window.location.pathname === '/';
}

export function getPath() {
  const path = window.location.pathname.replace('/', '');
  return path === '' ? 'home' : path;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    routerTransition
  ]
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
