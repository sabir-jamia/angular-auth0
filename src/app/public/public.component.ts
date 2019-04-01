import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageResolved } from '../shared/model/message.model';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {
  message = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const data: MessageResolved = this.route.snapshot.data.public;
    this.message = data.error ? data.error : data.message;
  }
}
