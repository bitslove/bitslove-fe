import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private apiUrl = 'http://localhost:8080/api/photos/collage'; // Ajusta la URL del backend

  constructor(private http: HttpClient) {}

  getCollagePhotos(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }
}
