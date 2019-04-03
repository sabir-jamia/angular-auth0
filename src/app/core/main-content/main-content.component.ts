import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {
  menus = [
    { name: 'Home', icon: 'home', link: ['home'] },
    { name: 'Profile', icon: 'person', link: ['profile'] },
    { name: 'Public', icon: 'public', link: ['public'] },
    { name: 'Private', icon: 'lock', link: ['private'] },
    { name: 'Courses', icon: 'school', link: ['course'] }
  ];

  @Input() loading = false;
}
