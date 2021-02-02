import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor() {}
  formObject: any;
  saveObject(formValue: any) {
    this.formObject = formValue;
  }
  getObject() {
    return this.formObject;
  }
}
