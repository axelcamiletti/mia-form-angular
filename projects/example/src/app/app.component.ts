import { Component, OnInit } from '@angular/core';
import { MiaFormConfig } from 'projects/agencycoda/mia-form/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  config!: MiaFormConfig;

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {
    this.config = new MiaFormConfig();
    this.config.fields = [
      { key: 'title', type: 'string' },
      { key: 'caption', type: 'string' },
      { key: 'subtitle', type: 'string' },
    ];
  }
}
