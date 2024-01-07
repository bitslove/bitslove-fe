import { RouterModule, Routes } from '@angular/router';
import { CollageComponent } from './collage/collage.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'collage', component: CollageComponent },
    { path: '', redirectTo: '/collage' , pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}