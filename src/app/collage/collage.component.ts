import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';
import { CommonModule } from '@angular/common'; 
import { Lightbox } from 'ngx-lightbox';
@Component({
  selector: 'app-collage',
  templateUrl: './collage.component.html',
  styleUrls: ['./collage.component.css'],
  imports: [CommonModule] ,
  standalone: true
  
})


export class CollageComponent implements OnInit {
  photoUrls: string[] = [];
   _album:any = [];
  


  constructor(private PhotoService: PhotoService,private _lightbox: Lightbox) {
    this._album.push({
      src: 'https://mdbootstrap.com/img/Photos/Slides/img%20(22).webp',
      caption: 'Descripción de la imagen 1'
    }, {
      src: 'https://mdbootstrap.com/img/Photos/Slides/img%20(22).webp',
      caption: 'Descripción de la imagen 2'
    }, {
      src: 'https://mdbootstrap.com/img/Photos/Slides/img%20(22).webp',
      caption: 'Descripción de la imagen 3'
    });

  }

  ngOnInit(): void {

     this.PhotoService.getCollagePhotos().subscribe(
       (urls: string[]) => {
         this.photoUrls = urls;
         console.info(this.photoUrls)
       },
       (error) => {
         console.error('Error fetching photos', error);
       }
     );
  }

  open(index: number): void {
    // abre la imagen en el índice proporcionado
    this._lightbox.open(this._album, index);
  }

  close(): void {
    // cierra la galería
    this._lightbox.close();
  }
}

