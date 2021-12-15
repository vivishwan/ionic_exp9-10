/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { FeedbackService } from './../shared/feedback.service';

@Component({
  selector: 'app-feedback-detail',
  templateUrl: './feedback-detail.page.html',
  styleUrls: ['./feedback-detail.page.scss'],
})
export class FeedbackDetailPage implements OnInit {
  updateFeedbackForm: FormGroup;
  id: any;
  constructor(private feedService: FeedbackService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder) {
      this.id = this.actRoute.snapshot.paramMap.get('id');
      this.feedService.getFeedback(this.id).valueChanges().subscribe(res => {
        this.updateFeedbackForm.setValue(res);
    });
     }

  ngOnInit() {
    this.updateFeedbackForm = this.fb.group({
      name: [''],
      gender: [''],
      rate: [''],
      suggestion: [''],
      dob:['']
  })
  console.log(this.updateFeedbackForm.value)
  }
  // updatefeedForm() {
  //   this.feedService.updateFeedback(this.id, this.updateFeedbackForm.value)
  //     .then(() => {
  //       this.router.navigate(['/view-feedback']);
  //     })
  //     .catch(error => console.log(error));
  // }
}
