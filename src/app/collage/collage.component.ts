import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-collage',
  templateUrl: './collage.component.html',
  styleUrls: ['./collage.component.css'],
  
  
})


export class CollageComponent implements OnInit {
  photoUrls: string[] = [];

  constructor(private PhotoService: PhotoService) {}

  ngOnInit(): void {
    // this.PhotoService.getCollagePhotos().subscribe(
    //   (urls: string[]) => {
    //     this.photoUrls = urls;
    //     console.info(this.photoUrls)
    //   },
    //   (error) => {
    //     console.error('Error fetching photos', error);
    //   }
    // );
  }
}

