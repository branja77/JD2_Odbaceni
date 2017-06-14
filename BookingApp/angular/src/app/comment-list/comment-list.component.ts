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
      this.comments = 
      [
       { id: 1,
          grade: 5,
          text: "Odlicno brt, svaka cas",
          user: {id:"1", email:"branja@gmail.com", password:"branja", username:"branja"},
          accommodation:{ Id: 1,
          Name: 'pepski1',
          Description: 'pepica deskripsn',
          Address: 'pepska',
          AverageGrade: 1,
          Latitude: 1,
          Longitude: 1,
          ImageUrl: "",
          Approved: true,
          AccommodationType: null,
          Place : null,
          Owner: null}
       },

       { id: 2,
          grade: 3,
          text: "Onako, nije lose",
          user: {id:"2", email:"pepo@gmail.com", password:"pepo", username:"pepo"},
          accommodation:{ Id: 1,
          Name: 'pepski1',
          Description: 'pepica deskripsn',
          Address: 'pepska',
          AverageGrade: 1,
          Latitude: 1,
          Longitude: 1,
          ImageUrl: "",
          Approved: true,
          AccommodationType: null,
          Place : null,
          Owner: null}
       }, 

       { id: 3,
          grade: 5,
          text: "Predobr",
          user: {id:"3", email:"komso@gmail.com", password:"komso", username:"komso"},
          accommodation:{ Id: 1,
          Name: 'pepski1',
          Description: 'pepica deskripsn',
          Address: 'pepska',
          AverageGrade: 1,
          Latitude: 1,
          Longitude: 1,
          ImageUrl: "",
          Approved: true,
          AccommodationType: null,
          Place : null,
          Owner: null}
       }

      ];
    }
}