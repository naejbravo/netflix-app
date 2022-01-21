export interface NetflixModel {
  nav: Nav;
  hero: Film;
}

export interface Nav {
  logo: Image;
}

export interface Film {
  title: string;
  imageGallery: Image[];
}

export interface Image {
  src: string;
  alt: string;
}
