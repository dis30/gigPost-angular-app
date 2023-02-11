import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SellerRegistrationComponent } from './seller-registration/seller-registration.component';
import { PersonalInfoComponent } from './seller-registration/personal-info/personal-info.component';
import { ExpAndExpertiseDetailsComponent } from './seller-registration/exp-and-expertise-details/exp-and-expertise-details.component';
import { CommitmentsComponent } from './seller-registration/commitments/commitments.component';
import { GigPostComponent } from './gig-post/gig-post.component';
import { OverviewComponent } from './gig-post/overview/overview.component';
import { PricingComponent } from './gig-post/pricing/pricing.component';
import { DescriptionComponent } from './gig-post/description/description.component';
import { GalleryComponent } from './gig-post/gallery/gallery.component';
import { PreviewComponent } from './gig-post/preview/preview.component';
import { SubmitGigPostComponent } from './gig-post/submit-gig-post/submit-gig-post.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BuyerComponent } from './dashboard/buyer/buyer.component';
import { ViewGigsComponent } from './dashboard/view-gigs/view-gigs/view-gigs.component'
import { ConfirmationComponent } from './seller-registration/confirmation/confirmation.component';
import { FooterComponent } from './modules/footer/footer.component';
import { HeaderComponent } from './modules/header/header.component';
import { SellerComponent } from './dashboard/seller/seller.component';
import { HttpClientModule } from '@angular/common/http';
import { RequirementsComponent } from './gig-post/requirements/requirements.component';

@NgModule({
  declarations: [

    AppComponent,
    CommitmentsComponent,
    SellerRegistrationComponent,
    PersonalInfoComponent,
    ExpAndExpertiseDetailsComponent,

    GigPostComponent,
    OverviewComponent,
    PricingComponent,
    DescriptionComponent,
    GalleryComponent,
    PreviewComponent,
    SubmitGigPostComponent,
    DashboardComponent,
    BuyerComponent,
    ViewGigsComponent,
    ConfirmationComponent,
    FooterComponent,
    HeaderComponent,
    SellerComponent,
    RequirementsComponent
    
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }