import { FC, ReactNode } from "react";
import { Role } from "../model/role.enums";
import { useStore } from "effector-react";
import { $user } from "@/features/user";

interface RoleComponentProps {
  roles: Role[];
  children: ReactNode;
}

export const RoleComponent: FC<RoleComponentProps> = ({ roles, children }) => {
  const { role } = useStore($user);
  if (!role || !roles.includes(role)) {
    return null;
  }

  return children;
};
