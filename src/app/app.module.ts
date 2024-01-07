// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CollageComponent } from './collage/collage.component';
import { PhotoService } from './photo.service';
import { RouterOutlet } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    CollageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterOutlet, 
    AppRoutingModule,
    RouterModule, 
    CommonModule
  ],
  providers: [
    PhotoService,
  ],
  bootstrap: [CollageComponent],  
})
export class AppModule {}
