import { getUsers } from "entities/auth";
import { UsersTable } from "features/auth";
import { useEffect } from "react";

export const UsersPage = () => {
  useEffect(() => {
    getUsers();
  }, []);

  return <UsersTable />;
};
