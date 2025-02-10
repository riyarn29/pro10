import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { StudentComponent } from './student/student.component';
import { CollegeComponent } from './college/college.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpServiceService } from './http-service.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataValidator } from './utility/data-validator';
import { ForgotPasswordComponent } from './login/forgotpassword.component';
import { SignUpComponent } from './login/signup.component';
import { MessageComponent } from './message/message.component';
import { CookieService } from 'ngx-cookie-service';
import { MessageListComponent } from './message/message-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { CollegeListComponent } from './college/college-list.component';
import { StudentListComponent } from './student/student-list.component';
import { UserComponent } from './user/user.component';

import { UserListComponent } from './user/user-list.component';

import { RoleComponent } from './role/role.component';
import { CourseComponent } from './course/course.component';
import { SubjectComponent } from './subject/subject.component';
import { RoleListComponent } from './role/role-list.component';
import { TimetableComponent } from './timetable/timetable.component';
import { CourseListComponent } from "./course/course-list.component";
import { FacultyComponent } from './faculty/faculty.component';
import { FacultyListComponent } from "./faculty/faculty-list.component";
import { FileComponent } from './file/file.component';
import { TimetableListComponent } from "./timetable/timetable-list.component";
import { SubjectListComponent } from "./subject/subject-list.component";
import { MarksheetmeritListComponent } from "./marksheet/marksheetmerit-list.component";
import { GetmarksheetComponent } from "./marksheet/getmarksheet.component";
import { ChangepasswordComponent } from "./user/changepassword.component";
import { LoaderComponent } from "./loader/loader.component";
import { NavbarComponent } from './navbar/navbar.component';

import { SpinnerComponent } from './spinner/spinner.component';
import { FooterComponent } from './footer/footer.component';
import { MyprofileComponent } from './user/myprofile.component';
import { AuthService } from './auth-service.service';

import { AssetComponent } from './asset/asset.component';
import { AssetListComponent } from './asset/assetlist.component';

import { DepartmentComponent } from './department/department.component';
import { DepartmentlistComponent } from './department/departmentlist.component';
import { StockanalysisComponent } from './stockanalysis/stockanalysis.component';
import { StockanalysislistComponent } from './stockanalysis/stockanalysislist.component';
import { ComputerlistComponent } from './computer/computerlist.component';
import { ComputerComponent } from './computer/computer.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerlistComponent } from './customer/customerlist.component';
import { AbcComponent } from './abc/abc.component';
import { AbclistComponent } from './abc/abclist.component';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfoliolistComponent } from './portfolio/portfoliolist.component';
import { RegionComponent } from './region/region.component';
import { RegionlistComponent } from './region/regionlist.component';
import { FollowupComponent } from './followup/followup.component';
import { FollowuplistComponent } from './followup/followuplist.component';
import { ClientComponent } from './client/client.component';
import { ClientlistComponent } from './client/clientlist.component';
import { XyzComponent } from './xyz/xyz.component';
import { XyzlistComponent } from './xyz/xyzlist.component';



// import { AuthService } from './auth.service';


export function myHttpLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    MarksheetComponent,
    MarksheetListComponent,
    StudentComponent,
    StudentListComponent,
    CollegeComponent,
    CollegeListComponent,
    LoginComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    SignUpComponent,
    MessageComponent,
    MessageListComponent,
    UserComponent,
    UserListComponent,

    RoleComponent,
    RoleListComponent,
    CourseComponent,
    SubjectComponent,
    SubjectListComponent,
    TimetableComponent,
    CourseListComponent,
    FacultyComponent,
    FacultyListComponent,
    TimetableComponent,
    TimetableListComponent,
    MarksheetmeritListComponent,
    GetmarksheetComponent,
    ChangepasswordComponent,
    LoaderComponent,
    FileComponent,
    NavbarComponent,
    SpinnerComponent,
    FooterComponent,
    MyprofileComponent,


   
    
    AssetComponent,
    AssetListComponent,
    DepartmentComponent,
    DepartmentlistComponent,
    StockanalysisComponent,
    StockanalysislistComponent,
    ComputerlistComponent,
    ComputerComponent,
    CustomerComponent,
    CustomerlistComponent,
    AbcComponent,
    AbclistComponent,
 
    PortfolioComponent,
    PortfoliolistComponent,
    RegionComponent,
    RegionlistComponent,
    FollowupComponent,
    FollowuplistComponent,
    ClientComponent,
    ClientlistComponent,
    XyzComponent,
    XyzlistComponent,
    
    

  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: myHttpLoader,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true
    },
    HttpServiceService,
    DataValidator,
    CookieService
  ],
  bootstrap: [AppComponent]

})


export class AppModule {

}