import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapListComponent } from 'src/app/face-snap-list/face-snap-list.component';
import { LandingPageComponent } from 'src/app/landing-page/landing-page.component';
import { SingleFaceSnapsComponent } from 'src/app/single-face-snaps/single-face-snaps.component';

const routes: Routes = [
  { path: 'facesnaps', component: FaceSnapListComponent },
  { path: 'facesnaps/:id', component: SingleFaceSnapsComponent },
  { path: '', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
