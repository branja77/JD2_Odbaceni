import { Component, Input, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

import { Accommodation } from '../model/accommodation.model';
import { Comment } from '../model/comment.model';
import { HttpCommentsService} from '../services/http-comments.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
})
export class CommentListComponent implements OnInit {

    @Input() accommodation: Accommodation;
    comments: Comment[];
    constructor(private commentsService: HttpCommentsService)
    {
    }

    ngOnInit(){
           this.commentsService.getComments().then(data => { this.comments = data;});
    }
}