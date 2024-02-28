import { Flex, Text } from "@chakra-ui/react";

export interface WithLabelProps {
  label: React.ReactNode;
  children: React.ReactNode;
}

export const WithLabel = ({ label, children }: WithLabelProps) => {
  return (
    <Flex direction="column">
      <Text as="label" fontSize="lg">
        {label}
      </Text>
      <Text>{children}</Text>
    </Flex>
  );
};
