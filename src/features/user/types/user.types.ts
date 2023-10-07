import { Role } from "@/features/role";

export interface User {
  isAuth: boolean;
  id?: number;
  email?: string;
  firstName?: string;
  lastName?: string;
  github?: string;
  telegram?: string;
  role?: Role;
}
