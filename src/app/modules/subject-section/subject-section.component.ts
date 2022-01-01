import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-subject-section',
  templateUrl: './subject-section.component.html',
  styleUrls: ['./subject-section.component.scss']
})
export class SubjectSectionComponent implements OnInit {

  subjectSection: FormGroup = new FormGroup({
    subject: new FormControl('', Validators.required),
    totalPoints: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(10000)]),
    categorySection: new FormArray([])
  });

  constructor() { }

  ngOnInit(): void {
    this.addCategorySection();
  }

  initGradeSection() {
    return new FormGroup({
      category: new FormControl('', Validators.required),
      gradeWeight: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]),
      gradeSection: new FormArray([])
    });
  }

  addCategorySection() {
    const control = <FormArray>this.subjectSection.controls['categorySection'];
    control.push(this.initGradeSection());
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
}
