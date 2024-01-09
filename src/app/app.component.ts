import { Component } from '@angular/core';
import { PhotoService } from './photo.service';
import {  RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Lightbox, LightboxModule } from 'ngx-lightbox';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    HttpClientModule,CommonModule,LightboxModule
    ], 
  styleUrls: ['./app.component.css'], 
  templateUrl: './app.component.html',
  providers: [PhotoService,Lightbox],
  standalone: true,
})
export class AppComponent {
  title = 'bitslove';
}
