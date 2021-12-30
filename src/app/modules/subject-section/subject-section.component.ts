import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-subject-section',
  templateUrl: './subject-section.component.html',
  styleUrls: ['./subject-section.component.scss']
})
export class SubjectSectionComponent implements OnInit {

  subjectSection: FormGroup = new FormGroup({
    subject: new FormControl(''),
    totalPoints: new FormControl(),
    gradeSection: new FormArray([

    ])
  });

  constructor() { }

  ngOnInit(): void {
    // this.subjectSection.get('gradeSection')?.value
    
  }

  initGradeSection() {
    return new FormGroup({
      type: new FormControl('', Validators.required),
      grade: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)])
    });
  }

  addGradeSection() {
    const control = <FormArray>this.subjectSection.controls['gradeSection'];
    control.push(this.initGradeSection());
  }

  removeGradeSection(i: number) {
    const control = <FormArray>this.subjectSection.controls['gradeSection'];
    control.removeAt(i);
  }

  save($event: any) {
    console.log($event);
  }

  getGradeSectionFormArray() {
    return (this.subjectSection.get('gradeSection') as FormArray);
  }

  getGradeSectionFormGroup(i: number) {
    return (this.subjectSection.get('gradeSection') as FormArray).controls[i] as FormGroup;
  }
}
