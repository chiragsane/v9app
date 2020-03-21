import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'v9app';
  config: any;
  fullpageAPI: any;

  isFirst = true;

  constructor() {

    // for more details on config options please visit fullPage.js docs
    this.config = {

      // fullpage options
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['', '', '', '', ''],
      menu: '#menu',
      navigation: true,
      onLeave: (origin: any, destination: any, direction: any) => {
        this.isFirst = destination.isFirst;
      }
    };
  }

  getRef(fullPageRef: any) {
    this.fullpageAPI = fullPageRef;
  }
}
