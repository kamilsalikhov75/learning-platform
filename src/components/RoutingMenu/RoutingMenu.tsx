import { Button, Flex } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { useRoutes } from "../../config/route/routes";

const RoutingMenu = () => {
  const { pathname } = useLocation();
  const { routes } = useRoutes();

  return (
    <Flex gap="24px" flexDirection="column" width='100%'>
      {routes.map((route) => {
        const isActive = pathname === route.path;
        return (
          <Button
            key={route.path}
            as={Link}
            to={route.path}
            bg={isActive ? "black.800" : "transparent"}
            color={isActive ? "white" : "black.800"}
            leftIcon={route?.icon}
            _hover={{}}
            w='100%'
          >
            {route.title}
          </Button>
        );
      })}
    </Flex>
  );
};

export { RoutingMenu };
