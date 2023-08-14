import { Button, Flex } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { RouteMode, useRoutes } from "../../config/route/routes";
import { FC } from "react";
import { setAuth } from "../../effector/auth";

interface RoutingMenuProps {
  onClick?: () => void;
}

const RoutingMenu: FC<RoutingMenuProps> = (props) => {
  const { onClick = undefined } = props;
  const { pathname } = useLocation();
  const { routes } = useRoutes({ mode: RouteMode.Sidebar });

  return (
    <Flex gap="24px" flexDirection="column" width="100%">
      {routes.map((route) => {
        const isActive = pathname === route.path;
        return (
          <Button
            borderRadius="20px"
            isActive={isActive}
            key={route.path}
            as={Link}
            to={route.path}
            leftIcon={route?.icon}
            _hover={{}}
            w="100%"
            onClick={onClick}
          >
            {route.title}
          </Button>
        );
      })}
      <Button borderRadius="20px" w="100%" onClick={() => setAuth(false)}>
        Выход
      </Button>
    </Flex>
  );
};

export { RoutingMenu };
