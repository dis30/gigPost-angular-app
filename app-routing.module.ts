import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommitmentsComponent } from '../app/seller-registration/commitments/commitments.component';
import { ConfirmationComponent } from './seller-registration/confirmation/confirmation.component';
import { ExpAndExpertiseDetailsComponent } from './seller-registration/exp-and-expertise-details/exp-and-expertise-details.component';
import { PersonalInfoComponent } from './seller-registration/personal-info/personal-info.component';
import { SellerRegistrationComponent } from './seller-registration/seller-registration.component';


const routes: Routes = [
  {
    path: '', component: SellerRegistrationComponent,
    children: [
      { path: '', component: PersonalInfoComponent, pathMatch: 'full' },
      { path: 'step1', component: ExpAndExpertiseDetailsComponent, pathMatch: 'full' },
      { path: 'step2', component: CommitmentsComponent, pathMatch: 'full' },
      { path: 'step3', component: ConfirmationComponent, pathMatch: 'full' },
   
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations:[],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }