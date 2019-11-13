import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../models/Post.model';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})

export class PostListItemComponent implements OnInit {
  @Input() post: Post;
  @Input() created: Date;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.created = new Date();
  }

  onLike() {
    this.postsService.like(this.post);
  }

  onDislike() {
    this.postsService.dislike(this.post);
  }
}
