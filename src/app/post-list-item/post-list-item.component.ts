import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../models/Post.model';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})

export class PostListItemComponent implements OnInit {
  @Input() post: Post;
  @Input() created: Date;

  constructor() { }

  ngOnInit() {
    this.created = new Date();
  }

  like() {
    this.post.loveIts++;
  }

  dislike() {
    this.post.loveIts--;
  }
}
