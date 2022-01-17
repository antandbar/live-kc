import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public autor: string | undefined;
  public empresa: string | undefined;
  constructor() { }

  ngOnInit(): void {
    this.autor = 'Antonio Andreu';
    this.empresa = 'KC'
  }

}
