import { NetflixModel, Film } from './models/netflix-models';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss'],
})
export class GlobalComponent implements OnInit {
  public netflix: NetflixModel;
  public sciFi: Film;
  public action: Film;
  constructor() {
    this.netflix = {
      nav: {
        logo: {
          src: './../../../assets/images/LOGO/logo_netflix_corto.jpg',
          alt: 'logo de netflix',
        },
      },
      hero: {
        title: 'Las 5 peliculas mas vistas en netflix',
        imageGallery: [
          {
            src: '../../assets/images/Top10/1-papel.webp',
            alt: 'la casa de papel',
          },
          {
            src: '../../assets/images/Top10/2-reina.webp',
            alt: 'La reina del flow',
          },
          {
            src: '../../assets/images/Top10/3-titanes.webp',
            alt: 'Titanes',
          },
          {
            src: '../../assets/images/Top10/4-lostinspace.webp',
            alt: 'Lost in space',
          },
          {
            src: '../../assets/images/Top10/5-dondecaben.webp',
            alt: 'Donde caben',
          },
        ],
      },
    },
    this.sciFi = {
      title:"Peliculas de ciencia ficcion",
      imageGallery:[
        {
          src:"../../../assets/images/Sci-fi/12monos.webp",
          alt:"12 monos"
        },
        {
          src:"../../../assets/images/Sci-fi/core.webp",
          alt:"core"
        },
        {
          src:"../../../assets/images/Sci-fi/6dia.webp",
          alt:"6 dias"
        },
        {
          src:"../../../assets/images/Sci-fi/afterearth.webp",
          alt:"After re earth"
        },
        {
          src:"../../../assets/images/Sci-fi/doom.webp",
          alt:"doom"
        },
      ]
    },
    this.action = {
      title:"Peliculas de ciencia ficcion",
      imageGallery:[
        {
          src:"../../../assets/images/Accion/ejercitomuertos.jpg",
          alt:"Ejercito de muertos"
        },
        {
          src:"../../../assets/images/Accion/elprotector.webp",
          alt:"El protector"
        },
        {
          src:"../../../assets/images/Accion/equalizer2.webp",
          alt:"equalizer 2"
        },
        {
          src:"../../../assets/images/Accion/heat.webp",
          alt:"Heat"
        },
        {
          src:"../../../assets/images/Accion/johnwick2.webp",
          alt:"Jon wick"
        },
      ]
    }
  }

  ngOnInit(): void {}
}
