import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-subject-section',
  templateUrl: './subject-section.component.html',
  styleUrls: ['./subject-section.component.scss']
})
export class SubjectSectionComponent {

  subjectSection: FormGroup = new FormGroup({
    subject: new FormControl(null, Validators.required),
    totalPoints: new FormControl(null, [Validators.required, Validators.min(10), Validators.max(10000)]),
    categorySection: new FormArray([], [Validators.required])
  });

  constructor() { }

  initCategorySection() {
    return new FormGroup({
      category: new FormControl(null, Validators.required),
      gradeWeight: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(10000)]),
      gradeSection: new FormArray([], [Validators.required])
    });
  }

  addCategorySection() {
    const control = <FormArray>this.subjectSection.controls['categorySection'];
    control.push(this.initCategorySection());
  }

  removeCategorySection(i: number) {
    const control = <FormArray>this.subjectSection.controls['categorySection'];
    control.removeAt(i);
  }

  saveForm(form: FormGroup) {
    console.log(form.value);
  }

  getCategorySectionFormArray() {
    return (this.subjectSection.get('categorySection') as FormArray);
  }

  getCategorySectionFormGroup(i: number) {
    return (this.subjectSection.get('categorySection') as FormArray).controls[i] as FormGroup;
  }

  isSubjectSectionValid() {
    return (this.subjectSection.get('subject')?.valid
      && this.subjectSection.get('totalPoints')?.valid);
  }

  isSubjectSectionAndSubSectionsValid() {

  }
}
