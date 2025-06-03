//Typical TS class

class Music{
  public name: string;
  public artist: string;
  public thumbnail: string;
  public duration: number;
  public genre: string;

  constructor(name : string, artist : string, thumbnail : string = "somethumbnail.jpg", duration: number, genre : string){
this.name = name;
this.artist = artist;
this.thumbnail = thumbnail;
this.duration = duration;
this.genre = genre;
  }
}

//Shorthand property

class MusicSH{
  constructor(public name: string, public artist: string, public genre: string){

  }
}