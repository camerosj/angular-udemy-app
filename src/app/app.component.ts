import { Component } from '@angular/core';

import { Post } from './post.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedPosts: Post[] = [];

  onPostAdded(post) {
    this.storedPosts.push(post);
  }
}
