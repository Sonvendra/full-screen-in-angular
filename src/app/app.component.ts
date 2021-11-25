import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fullScreen';

  constructor(@Inject(DOCUMENT) private document: any){}

  btnClick(){
    let elem =  document.body; 
    let methodToBeInvoked = elem.requestFullscreen;
    if(methodToBeInvoked) methodToBeInvoked.call(elem);
  }

  exitFullScreen(){
    document.exitFullscreen();
  }
}
