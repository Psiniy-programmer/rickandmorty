const api = {
  characters: 'https://rickandmortyapi.com/api/character',
  filterCharacters: (name, status) => `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}`,
  characterEpisode: (eps) => `https://rickandmortyapi.com/api/episode/${eps}`,
  locations: "https://rickandmortyapi.com/api/location",
  episodes: "https://rickandmortyapi.com/api/episode",
}

export default api;
