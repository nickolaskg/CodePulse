import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../../blog-posts/services/blog-post.service';
import { Observable } from 'rxjs';
import { BlogPost } from '../../blog-posts/models/blog-post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  blogs$?: Observable<BlogPost[]>;
  constructor(private blogPostService: BlogPostService){

  }

  ngOnInit(): void {
    
    this.blogs$ = this.blogPostService.getAllBlogPosts();
  
  }

  
  
}
