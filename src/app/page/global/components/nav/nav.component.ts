import { Nav } from '../../models/netflix-models';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  @Input() public nav!: Nav;
  constructor() {}

  ngOnInit(): void {}
}
