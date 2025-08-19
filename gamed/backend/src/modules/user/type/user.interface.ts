import { AuthProvider } from '../model/user.model';

export default interface UserInterface {
  email: string;
  password: string;
  username: string;
  authprovider?: AuthProvider;
  isEmailVerified?: boolean;
}