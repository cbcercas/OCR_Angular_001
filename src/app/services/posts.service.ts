import {Post} from '../models/Post.model';
import {Subject} from 'rxjs';
import * as firebase from 'firebase';
import {toArray} from 'rxjs/operators';

export class PostsService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() {
    const self = this;
    const ref = firebase.database().ref('/posts');
    ref.on('child_added', snap => {
        self.posts.push(snap.val());
        this.emitPosts();
    });
    ref.on('child_removed', snap => {
      const index = self.posts.findIndex(
        (postEl) => {
          if (postEl.ref === snap.val().ref) {
            return true;
          }
        }
      );
      if (index !== -1) {
        this.posts.splice(index, 1);
        this.emitPosts();
      }
    });
    ref.on('child_changed', snap => {
      const index = self.posts.findIndex(
        (postEl) => {
          if (postEl.ref === snap.val().ref) {
            return true;
          }
        }
      );
      if (index !== -1) {
        this.posts[index] = snap.val();
        this.emitPosts();
      }
    });
  }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  getPosts() {
    this.emitPosts();
  }

  like(post: Post) {
    const index = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    if (index !== -1) {
      this.posts[index].loveIts++;
      firebase.database().ref('posts/' + post.ref + '/loveIts').set(this.posts[index].loveIts);
    }
  }

  dislike(post: Post) {
    const index = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    if (index !== -1) {
      this.posts[index].loveIts--;
      firebase.database().ref('posts/' + post.ref + '/loveIts').set(this.posts[index].loveIts);
    }
  }

  addPost(post: Post) {
    const newPostKey = firebase.database().ref().child('posts').push().key;
    const updates = {};

    post.loveIts = 0;
    post.created = new Date();
    post.ref = newPostKey;

    updates['/posts/' + newPostKey] = post;
    firebase.database().ref().update(updates).then(
      () => {
        console.log('Post ajoute !');
      }
    ).catch(
      (error) => {
        console.log('Post non ajout: ' + error);
      }
    );
  }

  removePost(post: Post) {
    firebase.database().ref('posts/' + post.ref).remove().then(
      () => {
        console.log('Post supprime !');
      }
    ).catch(
      (error) => {
        console.log('Post non trouve: ' + error);
      }
    );
  }
}
