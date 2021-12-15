import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedbackDetailPageRoutingModule } from './feedback-detail-routing.module';

import { FeedbackDetailPage } from './feedback-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FeedbackDetailPageRoutingModule
  ],
  declarations: [FeedbackDetailPage]
})
export class FeedbackDetailPageModule {}
