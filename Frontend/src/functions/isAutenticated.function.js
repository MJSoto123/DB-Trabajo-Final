export const authenticate = (data, next) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('jwt', JSON.stringify(data));
    next();
  }
}

export const isAuthenticated = () => {
  if(typeof window == 'undefined') {
    return false;
  }
  if (localStorage.getItem('jwt')) {
    if (JSON.parse(localStorage.getItem('jwt')).domain === 'EPCC') {
      return JSON.parse(localStorage.getItem('jwt'));
      // return localStorage.getItem('jwt')
    }
    return false;
  }
    return false;
}