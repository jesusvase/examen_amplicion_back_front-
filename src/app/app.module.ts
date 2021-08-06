import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentAddValidateComponent } from './student-add-validate/student-add-validate.component';
import { MajorListComponent } from './major-list/major-list.component';
import { MajorAddComponent } from './major-add/major-add.component';
import { MajorDetailComponent } from './major-detail/major-detail.component';
import { MajorUpdateComponent } from './major-update/major-update.component';



const appRoutes: Routes = [
 /* {
    path: 'Student',
    component: StudentListComponent,
    data: { title: 'Student List' }
  },
   {
   path: 'student-add',
    component: StudentAddComponent,
    data: { title: 'Student Add' }
  },
  {
    path: 'student-detail/:studentId',
    component: StudentDetailComponent,
    data: { title: 'Student Details' }
  },

   {
    path: 'student-update/:id',
    component: StudentUpdateComponent,
    data: { title: 'Student Update' }
  },
  {
    path: 'student-add-validate',
    component: StudentAddValidateComponent,
    data: { title: 'Student Add Validate' }
  },
  { path: '',
    redirectTo: '/Student',
    pathMatch: 'full'
  }, */
  
  {
    path: 'Major',
    component: MajorListComponent,
    data: { title: 'Major List' }
  },
   {
   path: 'Major-add',
    component: MajorAddComponent,
    data: { title: 'Major Add' }
  },
  {
    path: 'Major-detail/:MajorId',
    component: MajorDetailComponent,
    data: { title: 'Major Details' }
  },

   {
    path: 'Major-update/:id',
    component: MajorUpdateComponent,
    data: { title: 'Major Update' }
  },
  { path: '',
    redirectTo: '/Major',
    pathMatch: 'full'
  }


];
@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentAddComponent,
    StudentUpdateComponent,
    StudentDetailComponent,
    StudentAddValidateComponent,
    MajorListComponent,
    MajorAddComponent,
    MajorDetailComponent,
    MajorUpdateComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule, 
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


