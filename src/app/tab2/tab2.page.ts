/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable prefer-const */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { student } from '../shared/student';
import { StudentService } from './../shared/student.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  Studentss = [];
  constructor(private stuService: StudentService, private router: Router) {}

  ngOnInit() {
    this.fetchStudents();
    let studentRes = this.stuService.getStudentList();
    studentRes.snapshotChanges().subscribe((res) => {
      this.Studentss = [];
      res.forEach((item) => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Studentss.push(a as student);
      });
    });
  }
  fetchStudents() {
    this.stuService
      .getStudentList()
      .valueChanges()
      .subscribe((res) => {
        console.log(res);
      });
  }
  deleteStudent(id) {
    console.log(id);
    if (window.confirm('Do you really want to delete?')) {
      this.stuService.deleteStudent(id);
    }
  }
  // buttonClick(id) {
  //   this.router.navigate(['/view-student/',id]);
  // }
}
