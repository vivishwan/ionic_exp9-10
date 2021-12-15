import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('./registration/registration.module').then(
        (m) => m.RegistrationPageModule
      ),
  },

  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'edit-student/:id',
    loadChildren: () =>
      import('./edit-student/edit-student.module').then(
        (m) => m.EditStudentPageModule
      ),
  },

  {
    path: 'view-feedback',
    loadChildren: () =>
      import('./view-feedback/view-feedback.module').then(
        (m) => m.ViewFeedbackPageModule
      ),
  },
  {
    path: 'feedback-detail/:id',
    loadChildren: () =>
      import('./feedback-detail/feedback-detail.module').then(
        (m) => m.FeedbackDetailPageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
