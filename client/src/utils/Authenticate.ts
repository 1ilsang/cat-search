export const isDevMode = () =>
  window.sessionStorage.getItem(`isDev`) === `true` || false;
