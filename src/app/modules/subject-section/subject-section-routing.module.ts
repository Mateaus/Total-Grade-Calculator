import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectSectionComponent } from './subject-section.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/subject-section',
        pathMatch: 'full'
    },
    {
        path: 'subject-section',
        component: SubjectSectionComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectScetionRoutingModule { }
