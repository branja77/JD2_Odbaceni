import { Component, Input, HostBinding } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

import { Comment } from '../model/comment.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
})
export class CommentComponent {
    @Input() comment: Comment;
  constructor()
  {
  }
}