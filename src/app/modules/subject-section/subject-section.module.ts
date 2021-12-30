import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubjectSectionComponent } from './subject-section.component';
import { GradeSectionComponent } from './components/grade-section/grade-section.component';
import { SubjectScetionRoutingModule } from './subject-section-routing.module';



@NgModule({
  declarations: [
    SubjectSectionComponent,
    GradeSectionComponent
  ],
  imports: [
    CommonModule,
    SubjectScetionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SubjectSectionComponent,
    GradeSectionComponent
  ]
})
export class SubjectSectionModule { }
