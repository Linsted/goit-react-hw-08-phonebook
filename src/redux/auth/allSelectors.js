export const getIasLoggedInSelector = (state) => state.auth.isLoggedIn;
export const getIsRefreshing = (state) => state.auth.isRefreshing;
export const getMail = (state) => state.auth.user.email;