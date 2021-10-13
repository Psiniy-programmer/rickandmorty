/**
 * @typedef {
 *   {
 *    id: number,
 *    name: string,
 *    airDate: string,
 *    characters: Array,
 *    url: String
 *   }
 * } OneEpisodeModel
 */

/**
 * Модель ОДНОГО эпизода
 * @type {OneEpisodeModel}
 * @param info
 * @returns {OneEpisodeModel}
 * @constructor
 */
export function OneEpisodeModel(info) {
  const {id, name, air_date, characters, url} = info;

  this.id = id;
  this.name = name;
  this.airDate = air_date;
  this.characters = characters;
  this.url = url;

  return this;
}

/**
 * @typedef {
 *   {
 *    results: OneEpisodeModel[],
 *    info: {
 *      next: string,
 *      pages: number,
 *      prev: string,
 *      count: number
 *    }
 *   }
 * } EpisodeModel
 */

/**
 * Модель all Episodes
 * @type EpisodeModel
 * @param data
 * @returns {EpisodeModel}
 * @constructor
 */
export function EpisodeModel(data) {
  const {count, pages, next, prev} = data.info;

  this.info = {
   count,
   pages,
   next,
   prev
  };
  this.results = {};

  data.results.map((ep) => this.results[ep.id] = new OneEpisodeModel(ep));
  return this;
}