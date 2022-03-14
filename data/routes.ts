const users = `${process.env.BASE_URL}/users`;

export const routes = {
  signIn: `${users}/login`,
  signUp: `${users}/signup`,
  forgotPassword: `${users}/forgotPassword`,
  getMe: `${users}/me`,
  activateAccount: `${users}/activateAccount`,
  deactivateAccount: `${users}/deactivateAccount`,
  changePassword: `${users}/updatePassword`,
  updateProfile: `${users}/updateMe`,
  getUsers: `${users}/getAll`,
  getDeactivatedUsers: `${users}/getAllDeactivatedUsers`,
  getActivateUsers: `${users}/getAllActivatedUsers`,
};
