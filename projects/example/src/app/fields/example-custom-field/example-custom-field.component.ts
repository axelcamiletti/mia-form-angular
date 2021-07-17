import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MiaBaseFieldComponent } from 'projects/agencycoda/mia-form/src/public-api';

@Component({
  selector: 'app-example-custom-field',
  templateUrl: './example-custom-field.component.html',
  styleUrls: ['./example-custom-field.component.scss']
})
export class ExampleCustomFieldComponent extends MiaBaseFieldComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  static updateValuesByItem(group: FormGroup, item: any) {
    //group.setValue();
    console.log('llego aqui2');
  }

  static updateItemByFormField(group: FormGroup, item: any) {
    item['custom_var'] = 'example';
    console.log('llego aqui');
  }

  static toItems() {
    return 'pepe';
  }
}
