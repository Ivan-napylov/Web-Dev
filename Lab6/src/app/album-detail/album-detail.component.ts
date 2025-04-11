import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlbumsService, Album } from '../services/albums.service';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {
  album!: Album;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbum(id).subscribe(data => {
      this.album = data;
    });
  }

  save(): void {
    this.albumsService.updateAlbum(this.album).subscribe();
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }

  goToPhotos(): void {
    this.router.navigate(['/albums', this.album.id, 'photos']);
  }
}
