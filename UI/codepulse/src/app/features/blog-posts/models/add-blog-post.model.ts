export interface AddBlogPost {
  title: string;
  shortDescription: string;
  content: string;
  urlHandle: string;
  featuredImageUrl: string;
  author: string;
  publishedDate: Date;
  isVisible: boolean;
  categories: string[];
}
