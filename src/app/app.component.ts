import { Component } from '@angular/core';
import { PhotoService } from './photo.service';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    HttpClientModule,CommonModule], 
  styleUrls: ['./app.component.css'], 
  templateUrl: './app.component.html',
  providers: [PhotoService],
  standalone: true,
})
export class AppComponent {
  title = 'bitslove';
}
