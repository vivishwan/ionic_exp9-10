import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewFeedbackPageRoutingModule } from './view-feedback-routing.module';

import { ViewFeedbackPage } from './view-feedback.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    ViewFeedbackPageRoutingModule
  ],
  declarations: [ViewFeedbackPage]
})
export class ViewFeedbackPageModule {}
