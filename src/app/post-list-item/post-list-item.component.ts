import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})

export class PostListItemComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created: Date;

  constructor() { }

  ngOnInit() {
    this.created = new Date();
  }

  like() {
    this.loveIts++;
  }

  dislike() {
    this.loveIts--;
  }
}
