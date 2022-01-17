import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
 public title: string | undefined;
 public logo: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.title = 'KC';
    this.logo= '../../../assets/logo_angular.svg';
  }

}
