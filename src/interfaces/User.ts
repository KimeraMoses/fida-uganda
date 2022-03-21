export interface IUser {
  designation: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface IUserSignedIn {
  token: string;
  user: IUser;
}

export interface IUserIsLogged {
  user: IUser;
}
