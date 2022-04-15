export type NamePage = '/main-page' | '/login-page';

export interface User {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  token: string;
}
