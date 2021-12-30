import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
