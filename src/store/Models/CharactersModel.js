/**
 * @typedef {
 *   {
 *    image: string,
 *    name: string,
 *    id: number,
 *    species: string,
 *    status: ('Alive'|'Dead'|'Unknown')
 *    episode: string[]
 *   }
 * } CharacterModel
 */

import paths from "@/router/paths";

/**
 * Модель ОДНОГО персонажа, прим. https://rickandmortyapi.com/api/character/1
 * @type {CharacterModel}
 * @param info - приходящая информация из ручки
 * @returns {CharacterModel}
 */
export function CharacterModel(info) {
  const {id, name, species, image, episode, status} = info;
  this.id = id;
  this.name = name;
  this.species = species;
  this.image = image;
  this.episode = episode.slice(0,5).map((ep) => ep);
  this.status = status;
  this.url = paths.character.link(id);

  return this;
}

/**
 * @typedef {
 *   {
 *    results: CharacterModel[],
 *    info: {
 *      next: string,
 *      pages: number,
 *      prev: string,
 *      count: number
 *    }
 *   }
 * } CharactersModel
 */

/**
 * Модель всех персонажей
 * @type {CharactersModel}
 * @param data - Данные из апи с ручки https://rickandmortyapi.com/api/character
 * @returns {CharactersModel}
 */
export function CharactersModel(data) {
  const {count, pages, next, prev} = data.info;
  this.info = {
    count,
    pages,
    next,
    prev
  }

  this.results = data.results.map((character) => new CharacterModel(character));

  return this;
}
