import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'TODO';
  currentIconSrc: string = '../assets/img/icon-sun.svg';
  secondaryIconSrc: string = '../assets/img/icon-moon.svg';
  auxIconSrc: string = "";

  toggleMode(){
    // Change Icon moon/sun
    this.auxIconSrc = this.currentIconSrc;
    this.currentIconSrc = this.secondaryIconSrc;
    this.secondaryIconSrc = this.auxIconSrc;

    //Change global styles
    document.body.classList.toggle('dark-theme');
  }
}
