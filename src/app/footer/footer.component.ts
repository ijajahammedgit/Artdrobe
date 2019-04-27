import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public currentYear: string;
  constructor() {
    const currDate = Date().toString();
    this.currentYear = currDate.split(' ')[3].toString();

   }

  ngOnInit() {
  }

}
