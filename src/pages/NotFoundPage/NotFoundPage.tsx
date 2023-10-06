import { Box, Center, Heading, Text } from "@chakra-ui/react";
import { Button } from "../../shared/ui/Button/Button";
import { useNavigate } from "react-router-dom";
import { Path } from "../../config/route/routes";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <Center w="100vw" h="100vh">
      <Box textAlign="center">
        <Heading size="2xl">404</Heading>
        <Text fontSize="18px" mt={3} mb={2}>
          Page Not Found
        </Text>
        <Text mb={6}>
          The page you&apos;re looking for does not seem to exist
        </Text>

        <Button onClick={() => navigate(Path.Main)}>Go to Home</Button>
      </Box>
    </Center>
  );
};

export { NotFoundPage };
