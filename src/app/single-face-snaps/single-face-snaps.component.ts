import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnapService } from 'src/services/face-snaps.service';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-single-face-snaps',
  templateUrl: './single-face-snaps.component.html',
  styleUrls: ['./single-face-snaps.component.scss'],
})
export class SingleFaceSnapsComponent {
  @Input() faceSnap!: FaceSnap;

  buttonText!: string;

  constructor(
    private faceSnapsService: FaceSnapService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.buttonText = 'Oh..snap!';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onSnap() {
    this.faceSnapsService.snapFaceSnapById(
      this.faceSnap.id,
      this.faceSnap.snaps
    );
    this.faceSnap.snaps === 0
      ? (this.buttonText = 'Oh..snap!')
      : (this.buttonText = 'Oups..snap!');
  }
}
