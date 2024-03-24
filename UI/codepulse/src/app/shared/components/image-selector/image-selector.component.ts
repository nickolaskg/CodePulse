import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageService } from './image.service';
import { BlogImage } from './models/blog-image.model';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-image-selector',
  templateUrl: './image-selector.component.html',
  styleUrl: './image-selector.component.css',
})
export class ImageSelectorComponent implements OnInit {
  private file?: File;
  fileName: string = '';
  title: string = '';
  blogImages$?: Observable<BlogImage[]>;

  @ViewChild('form', { static: false }) imageUploadForm?: NgForm;

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.getImages();
  }

  onFileUploadChange(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    this.file = element.files?.[0];
  }

  selectImage(image: BlogImage): void {
    this.imageService.selectImage(image);
  }
  
  uploadImage(): void {
    if (this.file && (this.fileName !== '' && this.fileName !== null) && (this.title !== '' && this.title !== null)) {
      // Image service to upload the image
      this.imageService
        .uploadImage(this.file, this.fileName, this.title)
        .subscribe({
          next: (response) => {
            this.imageUploadForm?.resetForm();
            this.getImages();
          },
        });
    }
  }

  private getImages() {
    this.blogImages$ = this.imageService.getAllImages();
  }
}
