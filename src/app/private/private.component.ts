import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MessageResolved } from '../shared/model/message.model';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {
  message = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const data: MessageResolved = this.route.snapshot.data.private;
    this.message = data.error ? data.error : data.message;
  }
}
