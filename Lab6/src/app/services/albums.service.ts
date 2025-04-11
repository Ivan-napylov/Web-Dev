import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Album {
  userId: number;
  id: number;
  title: string;
}

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}


@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.baseUrl}/albums`);
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }
  

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.baseUrl}/albums/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/albums/${id}`);
  }

  getPhotosByAlbumId(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}/albums/${id}/photos`);
  }
}