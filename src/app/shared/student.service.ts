import { Injectable } from '@angular/core';
import { student } from '../shared/student';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  studentListRef: AngularFireList<any>;
  studentRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {}

  // Create
  createStudent(apt: student) {
    this.studentListRef = this.db.list('/student');
    return this.studentListRef.push({
      name: apt.name,
      email: apt.email,
      mobile: apt.mobile,
      class: apt.class,
      uid: apt.uid,
      course: apt.course,
    });
  }

  // Get Single
  getStudent(id: string) {
    this.studentRef = this.db.object('/student/' + id);
    return this.studentRef;
  }

  // Get List
  getStudentList() {
    this.studentListRef = this.db.list('/student');
    return this.studentListRef;
  }

  // Update
  updateStudent(id, apt: student) {
    return this.studentRef.update({
      name: apt.name,
      email: apt.email,
      mobile: apt.mobile,
      class: apt.class,
      uid: apt.uid,
      course: apt.course,
    });
  }

  // Delete
  deleteStudent(id: string) {
    this.studentRef = this.db.object('/student/' + id);
    this.studentRef.remove();
  }
}
