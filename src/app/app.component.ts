import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private readonly platform: Platform) {}

  async ngOnInit() {
    await this.platform.ready();
    alert('Platform is ready');
    this.platform.resume.subscribe(() => {
      alert('We have resumed the app.');
    });
  }
}
