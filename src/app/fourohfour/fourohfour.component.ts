import { Component, OnInit } from '@angular/core';
import { blackHeader } from '../header/header.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-fourohfour',
  templateUrl: './fourohfour.component.html',
  styleUrls: ['./fourohfour.component.css']
})
export class FourohfourComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Incident 2019 - Error 404');
  }

  ngOnInit() {
    blackHeader();
  }

}
