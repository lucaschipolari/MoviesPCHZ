export class PeliculaSerie {
  constructor(title, type, image, category, description, estaPublicada, banner, video) {
    this.code = window.self.crypto.randomUUID();
    this.title = title;
    this.type = type;
    this.image = image;
    this.category = category;
    this.description = description;
    this.estaPublicada = estaPublicada;
    this.banner = banner;
    this.video = video;
  }
}
