/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { StudentService } from './../shared/student.service';
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.page.html',
  styleUrls: ['./edit-student.page.scss'],
})
export class EditStudentPage implements OnInit {
  updateStudentForm: FormGroup;
  id: any;
  constructor( private stuService: StudentService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder) {
      this.id = this.actRoute.snapshot.paramMap.get('id');
    this.stuService.getStudent(this.id).valueChanges().subscribe(res => {
      this.updateStudentForm.setValue(res);
    });
  }

  ngOnInit() {
    this.updateStudentForm = this.fb.group({
      name: [''],
      email: [''],
      mobile: [''],
      class:[''],
      uid:[''],
      course:['']
  })
  console.log(this.updateStudentForm.value)
}
updateForm() {
  this.stuService.updateStudent(this.id, this.updateStudentForm.value)
    .then(() => {
      this.router.navigate(['/tabs/tab2']);
    })
    .catch(error => console.log(error));
}
}
