const api = {
  characters: {
    all: 'https://rickandmortyapi.com/api/character',
    episode: (eps) => `https://rickandmortyapi.com/api/episode/${eps}`,
  },
  locations: "https://rickandmortyapi.com/api/location",
  episodes: "https://rickandmortyapi.com/api/episode",
}

export default api;
