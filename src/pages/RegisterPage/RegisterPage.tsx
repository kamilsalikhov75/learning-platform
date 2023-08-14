import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <Center w="100vw" h="100vh">
      <FormControl w="500px">
        <FormLabel marginBottom="50px">
          <Heading>Register</Heading>
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
        <Button w="100%" type="submit" marginBottom="20px" borderRadius="20px">
          Register
        </Button>
        <Button borderRadius="20px" as={Link} to={"/login"} w="100%">
          Login
        </Button>
      </FormControl>
    </Center>
  );
};

export { RegisterPage };
