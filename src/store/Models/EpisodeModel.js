export function oneEpisodeModel(info) {
  const {id, name, air_date, characters, url} = info;

  this.id = id;
  this.name = name;
  this.airDate = air_date;
  this.characters = characters;
  this.url = url;

  return this;
}

export function EpisodeModel(data) {
  const {count, pages, next, prev} = data.info;

  this.info = {
   count,
   pages,
   next,
   prev
  };
  this.results = data.results.map((ep) => new oneEpisodeModel(ep));

  return this;
}