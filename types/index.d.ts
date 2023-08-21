interface HttpResponse<T> {
  data: T;
}

interface IUser {
  unique_id?: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  email?: string;
  avatar?: string;
}

interface IUserCredentials {
  email: string;
  password: string;
}
