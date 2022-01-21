import { Film } from '../../models/netflix-models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  @Input() hero!: Film
  constructor() {}

  ngOnInit(): void {}
}
