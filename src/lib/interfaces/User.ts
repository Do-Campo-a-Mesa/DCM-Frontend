export interface CreateUserInput {
  email: string;
  password: string;
  repeat_password: string;
}

export interface LoginUserInput {
  email: string;
  password: string;
}

export interface UserLoginResponse {
  id: string;
  email: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  birth?: string;
  gender?: string;
}

export interface LoginResponse {
  status: number;
  data: {
    message: string;
    user: UserLoginResponse;
    token: string;
  };
}

export interface GeneralResponse {
  status: number;
  data: { message: string };
}
