import { Injectable } from '@angular/core';
import { feedback } from '../shared/feedback';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  feedbackListRef: AngularFireList<any>;
  feedbackRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {}

  // Create
  createFeedback(apt: feedback) {
    this.feedbackListRef = this.db.list('/feedback');
    return this.feedbackListRef.push({
      name: apt.name,

      gender: apt.gender,
      rate: apt.rate,
      suggestion: apt.suggestion,
    });
  }

  // Get Single
  getFeedback(id: string) {
    this.feedbackRef = this.db.object('/feedback/' + id);
    return this.feedbackRef;
  }

  // Get List
  getFeedbackList() {
    this.feedbackListRef = this.db.list('/feedback');
    return this.feedbackListRef;
  }
}
