/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @typescript-eslint/quotes */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from "../shared/authentication-service";

import { FormGroup, FormBuilder } from "@angular/forms";
import { FeedbackService } from '../shared/feedback.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {
  feedbackForm: FormGroup;

  constructor(
    public feedService: FeedbackService,
    public authService: AuthenticationService,
    public router: Router,
    public fb: FormBuilder,
  ) {}

    ngOnInit() {
      this.feedbackForm = this.fb.group({
        name: [''],
        dob: [''],
        gender: [''],
        rate: [''],
        suggestion: ['']
      });
    }

    formSubmit() {
      console.log("clicked");
      if (!this.feedbackForm.valid) {
        return false;
      } else {
        this.feedService.createFeedback(this.feedbackForm.value).then(res => {
          console.log(res);
          this.feedbackForm.reset();
          this.router.navigate(['view-feedback']);

        })
          .catch(error => console.log(error));
      }
    }

}
