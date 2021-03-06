import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
//
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { ReviewerComponent } from './reviewer/reviewer.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './menu/menu.component';
import { DetailReviewerComponent } from './reviewer/detail/detail.component';
import { UpdateInfoReviewerComponent } from './reviewer/update-info-reviewer/update-info-reviewer.component';
import { FeedbackReviewerComponent } from './reviewer/feedback-reviewer/feedback-reviewer.component';
import { ViewHistoryReviewerComponent } from './reviewer/view-history-reviewer/view-history-reviewer.component';
import { RegisterCompanyComponent } from './reviewer/register-company/register-company.component';
import { DetailCompanyComponent } from './company/detail-company/detail-company.component';
import { ViewHistoryCompanyComponent } from './company/view-history-company/view-history-company.component';
import { StatsComponent } from './company/stats/stats.component';
import { ReportAdminComponent } from './admin/report-admin/report-admin.component';
import { FeedbackAdminComponent } from './admin/feedback-admin/feedback-admin.component';
import { CustomerCareAdminComponent } from './admin/customer-care-admin/customer-care-admin.component';
import { LockReviewerComponent } from './admin/lock-reviewer/lock-reviewer.component';
import { ComfirmCompanyComponent } from './admin/comfirm-company/comfirm-company.component';

const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'right',
      distance: 12
    },
    vertical: {
      position: 'top',
      distance: 12,
      gap: 10
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompanyComponent,
    ReviewerComponent,
    AdminComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    DetailReviewerComponent,
    UpdateInfoReviewerComponent,
    FeedbackReviewerComponent,
    ViewHistoryReviewerComponent,
    RegisterCompanyComponent,
    DetailCompanyComponent,
    ViewHistoryCompanyComponent,
    StatsComponent,
    ReportAdminComponent,
    FeedbackAdminComponent,
    CustomerCareAdminComponent,
    LockReviewerComponent,
    ComfirmCompanyComponent
  ],
  imports: [
    BrowserModule,
    NotifierModule.withConfig(customNotifierOptions)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
