import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';
import { CommonModule } from '@angular/common'; 
import { IAlbum, Lightbox } from 'ngx-lightbox';
@Component({
  selector: 'app-collage',
  templateUrl: './collage.component.html',
  styleUrls: ['./collage.component.css'],
  imports: [CommonModule] ,
  standalone: true
  
})


export class CollageComponent implements OnInit {
  photo: any[] = [];
  //album: Array<any> = [];
  album: Array<IAlbum> = [];


  constructor(private PhotoService: PhotoService,private lightbox: Lightbox) {


  }

  ngOnInit(): void {

     this.PhotoService.getCollagePhotos().subscribe(
       (urls: any) => {
         this.album = urls;
       },
       (error) => {
         console.error('Error fetching photos', error);
       }
     );
  }


  open(index: number): void {
    console.log(this.album[2])
    this.lightbox.open(this.album, index, { showDescription: true });
  }

  close(): void {
    // cierra la galería
    this.lightbox.close();
  }
}


