import { Component } from '@angular/core';
import {PostListItemComponent} from './post-list-item/post-list-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mon Blog';

  posts  =  <Array <PostListItemComponent>> [
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

}
