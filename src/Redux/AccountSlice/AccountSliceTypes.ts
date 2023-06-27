import { User } from '../../Utils/Types'

export type AuthValues = {
  email: string;
  password: string;
}

export type FetchAccountParams = {
  data: AuthValues;
  successCallback: () => void;
}

export type AccountState = {
  account: User | null;
  isLoading: boolean;
  error: string | null;
}

export type FetchAccountResponse = {
  data: {
    access: string;
    refresh: string;
    user: User;
  }
}
