import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnapService } from 'src/services/face-snaps.service';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;

  constructor(
    private faceSnapsService: FaceSnapService,
    private router: Router
  ) {}

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
