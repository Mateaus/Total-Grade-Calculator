import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

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
  }, [this.pointValidator()]);

  // TODO: Refactor validator into it's own class and with a single validation purpose.
  pointValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const totalPoints: number | null = control.get('totalPoints')?.value;
      if (totalPoints === null) {
        return {totalPoints: "Total points is empty."};
      }

      const categorySection: FormArray = control.get('categorySection') as FormArray;
      if (categorySection === null || categorySection.length === 0) {
        return {categorySection: "Category Section Array is empty"};
      }

      let totalGradeWeight = 0;
      for (let category of categorySection.controls) {
        const gradeWeight = category.get('gradeWeight')?.value;
        if (gradeWeight !== null) {
          totalGradeWeight += category.get('gradeWeight')?.value;
        }
      }

      if (totalGradeWeight < totalPoints) {
        return {totalPoints: "Less than total points."};
      } else if (totalGradeWeight > totalPoints) {
        return {totalPoints: "More than total points."};
      }

      return null;
    }
  }

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
}
