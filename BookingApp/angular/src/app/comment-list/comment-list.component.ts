import { Component, Input } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

import { Accommodation } from '../model/accommodation.model';
import { Comment } from '../model/comment.model';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
})
export class CommentListComponent {

    @Input() accommodation: Accommodation;
    comments: Comment[];
    constructor()
    {
      this.comments = [];
    }
}