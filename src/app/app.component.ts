import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

import {fade} from './shared/animations/fade';
import {ModalRef} from './shared/components/modal/models/modal-ref';
import {ModalService} from './shared/components/modal/services/modal.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fade]
})
export class AppComponent implements OnInit{

  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;
  title = 'a11y-p2';
  // public firstName = 'Luis';
  public info = false;
  public modalRef: ModalRef;
  public form: FormGroup;

  constructor(private modalService: ModalService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form= this.formBuilder.group({
      firstName: ['Luis', Validators.required],
      surName: ['Piovan', Validators.required],
      age: ['30', Validators.required],
      info: [false]
    });
  }

  public show(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details'
    });
  }

  public submit(): void {
    console.log(this.form.value);
  }
}
