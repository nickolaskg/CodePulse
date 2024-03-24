import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { AddBlogPost } from '../models/add-blog-post.model';
import { BlogPost } from '../models/blog-post.model';
import { UpdateBlogPost } from '../models/update-blog-post.model';

@Injectable({
  providedIn: 'root',
})
export class BlogPostService {
  constructor(private http: HttpClient) {}

  createBlogPost(data: AddBlogPost): Observable<void> {
    return this.http.post<void>(
      `${environment.apiBaseUrl}/api/blogposts/?addAuth=true`,
      data
    );
  }

  getAllBlogPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(`${environment.apiBaseUrl}/api/blogPosts`);
  }

  getBlogPostById(id: string): Observable<BlogPost> {
    return this.http.get<BlogPost>(
      `${environment.apiBaseUrl}/api/blogPosts/${id}`
    );
  }
  getBlogPostByUrlHandle(url: string): Observable<BlogPost> {
    return this.http.get<BlogPost>(
      `${environment.apiBaseUrl}/api/blogPosts/${url}`
    );
  }

  updateBlogPost(
    id: string,
    updatedBlogPost: UpdateBlogPost
  ): Observable<BlogPost> {
    return this.http.put<BlogPost>(
      `${environment.apiBaseUrl}/api/blogposts/${id}?addAuth=true`,
      updatedBlogPost
    );
  }

  deleteBlogPost(id: string): Observable<BlogPost> {
    return this.http.delete<BlogPost>(
      `${environment.apiBaseUrl}/api/blogposts/${id}?addAuth=true`
    );
  }
}
