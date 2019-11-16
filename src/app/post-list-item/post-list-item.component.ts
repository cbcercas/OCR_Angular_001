import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../models/Post.model';
import {PostsService} from '../services/posts.service';
import {AuthService} from '../services/auth.service';
import * as firebase from 'firebase';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})

export class PostListItemComponent implements OnInit {
  @Input() post: Post;
  @Input() created: Date;
  isAuth: boolean;
  faTrash = faTrash;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.created = new Date();
    firebase.auth().onAuthStateChanged(
      (user) => {
        this.isAuth = !!user;
      }
    );
  }

  onLike() {
    this.postsService.like(this.post);
  }

  onDislike() {
    this.postsService.dislike(this.post);
  }

  onDeletePost() {
    this.postsService.removePost(this.post);
  }
}
