import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-section',
  templateUrl: './category-section.component.html',
  styleUrls: ['./category-section.component.scss']
})
export class CategorySectionComponent {

  @Input() categoryGroup!: FormGroup;
  @Input() index!: number;
  
  @Output() categoryRemoveEvent = new EventEmitter<number>();

  constructor() {
  }

  initGradeSection() {
    return new FormGroup({
      taskName: new FormControl('', Validators.required),
      taskGrade: new FormControl('', Validators.required)
    });
  }

  /**
   * Emits index number event to parent in order
   * to remove the current instance from this
   * component in the ArrayForm.
   */
  removeSelf() {
    this.categoryRemoveEvent.emit(this.index);
  }

  addGradeSection() {
    const control = <FormArray>this.categoryGroup.controls['gradeSection'];
    control.push(this.initGradeSection());
  }

  removeGradeSection(i: number) {
    const control = <FormArray>this.categoryGroup.controls['gradeSection'];
    control.removeAt(i);
  }

  getGradeSectionFormArray() {
    return (this.categoryGroup.get('gradeSection') as FormArray);
  }

  getGradeSectionFormGroup(i: number) {
    return (this.categoryGroup.get('gradeSection') as FormArray).controls[i] as FormGroup;
  }

  isCategorySectionValid() {
    return (this.categoryGroup.get('category')?.valid
      && this.categoryGroup.get('gradeWeight')?.valid);
  }
}
