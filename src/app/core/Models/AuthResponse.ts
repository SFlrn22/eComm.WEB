export interface AuthResponse {
  user: UserDetails;
  authToken: string;
}

export interface UserDetails {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
}
