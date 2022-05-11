import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import {MatTableModule} from "@angular/material/table";
import {DialogModule} from "primeng/dialog";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {RippleModule} from "primeng/ripple";



@NgModule({
  declarations: [
    AddStudentComponent,
    EditStudentComponent,
    DeleteStudentComponent,
    ListStudentComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    RippleModule
  ],
  exports: [
    ListStudentComponent,
    AddStudentComponent
  ]
})
export class StudentModule { }
