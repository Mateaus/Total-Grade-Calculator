import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubjectSectionComponent } from './subject-section.component';
import { GradeSectionComponent } from './components/grade-section/grade-section.component';
import { SubjectScetionRoutingModule } from './subject-section-routing.module';
import { CategorySectionComponent } from './components/category-section/category-section.component';



@NgModule({
  declarations: [
    SubjectSectionComponent,
    GradeSectionComponent,
    CategorySectionComponent
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
