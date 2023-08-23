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

const RegisterPage = () => {
  return (
    <Flex w="100vw" h="100vh" flexDirection="column" p="0 10px">
      <AuthHeader />
      <Center justifyContent="center" h="100%">
        <FormControl w="500px">
          <FormLabel marginBottom="50px">
            <Heading>Register</Heading>
          </FormLabel>
          <Input
            variant="flushed"
            placeholder="Name"
            marginBottom="20px"
            required={true}
          />
          <Input
            variant="flushed"
            type="email"
            placeholder="Email"
            marginBottom="20px"
            required={true}
          />
          <Input
            variant="flushed"
            type="password"
            placeholder="Password"
            marginBottom="20px"
            required={true}
          />
          <Input
            variant="flushed"
            placeholder="Telegram username"
            marginBottom="20px"
          />
          <Input
            variant="flushed"
            placeholder="Github username"
            marginBottom="20px"
          />
          <Button
            w="100%"
            type="submit"
            marginBottom="20px"
            borderRadius="20px"
            onClick={() => login(mockUser)}
          >
            Register
          </Button>
          <Button borderRadius="20px" as={Link} to={"/login"} w="100%">
            Login
          </Button>
        </FormControl>
      </Center>
    </Flex>
  );
};

export { RegisterPage };
