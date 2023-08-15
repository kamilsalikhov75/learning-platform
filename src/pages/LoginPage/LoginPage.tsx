import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AuthHeader } from "../../components/Header/AuthHeader";
import { login } from "../../effector/user";
import { mockUser } from "../../effector/mocks/user";

const LoginPage = () => {
  return (
    <Flex w="100vw" h="100vh" flexDirection="column">
      <AuthHeader />
      <Center justifyContent="center" h="100%">
        <FormControl w="500px">
          <FormLabel marginBottom="50px">
            <Heading>Login</Heading>
          </FormLabel>
          <Input
            variant="flushed"
            type="email"
            placeholder="Email"
            marginBottom="20px"
          />
          <Input
            variant="flushed"
            type="password"
            placeholder="Password"
            marginBottom="20px"
          />
          <Button
            w="100%"
            type="submit"
            marginBottom="20px"
            borderRadius="20px"
            onClick={() => login(mockUser)}
          >
            Login
          </Button>
          <Button borderRadius="20px" as={Link} to={"/register"} w="100%">
            Register
          </Button>
        </FormControl>
      </Center>
    </Flex>
  );
};

export { LoginPage };
