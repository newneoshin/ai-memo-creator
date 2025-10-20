export const selectedIsAuthenticated = (state) => {
  return Boolean(state.auth?.token);
};
