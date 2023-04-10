import { Component, OnInit } from '@angular/core';
import { FaceSnapService } from 'src/services/face-snaps.service';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss'],
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  constructor(private faceSnapsService: FaceSnapService) {}

  ngOnInit() {
    this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();
  }
}
