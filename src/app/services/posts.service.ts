import {Post} from '../models/Post.model';
import {Subject} from 'rxjs';

export class PostsService {
  posts: Post[] = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at tortor aliquam, cursus dui non, ultricies sem. Duis sed ' +
        'venenatis leo. Ut pharetra tempor vehicula. Donec cursus vehicula odio, ut eleifend elit. In hac habitasse platea dictumst. ' +
        'Aenean aliquet placerat scelerisque. Praesent nec imperdiet ligula, sed faucibus eros. Etiam vehicula mi nibh, vitae imperdiet ' +
        'massa ultricies a.',
      loveIts: 1
    },
    {
      title: 'Mon second post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at tortor aliquam, cursus dui non, ultricies sem. Duis sed ' +
        'venenatis leo. Ut pharetra tempor vehicula. Donec cursus vehicula odio, ut eleifend elit. In hac habitasse platea dictumst. ' +
        'Aenean aliquet placerat scelerisque. Praesent nec imperdiet ligula, sed faucibus eros. Etiam vehicula mi nibh, vitae imperdiet ' +
        'massa ultricies a.',
      loveIts: 0
    },
    {
      title: 'Encore un post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at tortor aliquam, cursus dui non, ultricies sem. Duis sed ' +
        'venenatis leo. Ut pharetra tempor vehicula. Donec cursus vehicula odio, ut eleifend elit. In hac habitasse platea dictumst. ' +
        'Aenean aliquet placerat scelerisque. Praesent nec imperdiet ligula, sed faucibus eros. Etiam vehicula mi nibh, vitae imperdiet ' +
        'massa ultricies a.',
      loveIts: -1
    }
  ];

  postsSubject = new Subject<Post[]>();

  constructor() { }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }


  like(post: Post) {
    const index = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    this.posts[index].loveIts++;
  }

  dislike(post: Post) {
    const index = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    this.posts[index].loveIts--;
  }
  addPost(post: Post) {
    post.loveIts = 0;
    this.posts.push(post);
  }

  removePost(post: Post) {
    const index = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(index, 1);
  }
}
