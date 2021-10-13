const paths = {
  index: '/',
  character: {
    url: '/character/:id',
    link: (id) => `/character/${id}`
  },
  episode: {
    url: '/episode/:id',
    link: (id) => `/episode/${id}`
  }
}

export default paths;
