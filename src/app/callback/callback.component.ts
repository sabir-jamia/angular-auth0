import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log('in call back');
    const hash = this.route.snapshot.fragment;
    if (/access_token|id_token|error/.test(hash)) {
      this.authService.authenticate();
    } else {
      throw new Error('Invalid callback URL');
    }
  }
}
