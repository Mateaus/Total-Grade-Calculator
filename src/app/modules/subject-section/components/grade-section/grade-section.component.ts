import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-grade-section',
  templateUrl: './grade-section.component.html',
  styleUrls: ['./grade-section.component.scss']
})
export class GradeSectionComponent implements OnInit {

  @Input() gradeGroup!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }
}
