import { Component, OnInit } from '@angular/core';
import { AlbumsService, Album } from '../services/albums.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];

  constructor(private albumsService: AlbumsService, private router: Router) {}

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe(data => this.albums = data);
  }

  deleteAlbum(id: number): void {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
    });
  }

  goToDetails(id: number): void {
    this.router.navigate(['/albums', id]);
  }
}
