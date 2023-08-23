interface HttpResponse<T> {
  data: T;
}

interface IUser {
  unique_id: string;
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  avatar: string;
  profile_id: string;
}

type IUserCredentials = Pick<IUser, "email" | "password">;
