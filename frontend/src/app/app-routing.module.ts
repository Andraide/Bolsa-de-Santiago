import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuitcaseComponent } from './suitcase/suitcase.component';
import { InvestComponent } from './invest/invest.component';

const routes: Routes = [
    { path: '', component: SuitcaseComponent },
    { path: 'invest', component: InvestComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
