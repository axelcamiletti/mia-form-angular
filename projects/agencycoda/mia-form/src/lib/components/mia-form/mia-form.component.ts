import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MiaFormConfig } from '../../entities/mia-form-config';
import { MiaFormService } from '../../mia-form.service';

@Component({
  selector: 'mia-form',
  templateUrl: './mia-form.component.html',
  styleUrls: ['./mia-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MiaFormComponent implements OnInit, AfterViewInit {

  @Input() config = new MiaFormConfig();

  group: FormGroup = new FormGroup({});

  constructor(
    protected changeDetector: ChangeDetectorRef,
    protected miaFormService: MiaFormService
  ) { }

  ngOnInit(): void {
     
  }

  ngAfterViewInit(): void {
    this.changeDetector.detectChanges();
  }

  getErrors() {
    return this.miaFormService.getErrors(this.config, this.group);
  }

  onSubmit() {
    console.log(this.group.value);
  }
}