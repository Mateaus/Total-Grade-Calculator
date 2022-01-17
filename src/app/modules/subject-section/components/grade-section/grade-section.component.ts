import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-grade-section',
  templateUrl: './grade-section.component.html',
  styleUrls: ['./grade-section.component.scss']
})
export class GradeSectionComponent {

  @Input() gradeGroup!: FormGroup;
  @Input() index!: number;

  @Output() gradeRemoveEvent = new EventEmitter<number>();

  constructor() { }

  removeSelf() {
    this.gradeRemoveEvent.emit(this.index);
  }
}
