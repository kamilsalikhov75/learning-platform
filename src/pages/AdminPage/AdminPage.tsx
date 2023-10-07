import { Role } from "@/features/role";
import { RoleComponent } from "@/features/role";
import { Heading } from "@chakra-ui/react";

const AdminPage = () => {
  return (
    <RoleComponent roles={[Role.Admin]}>
      <Heading>Admin Page</Heading>
    </RoleComponent>
  );
};

export { AdminPage };
