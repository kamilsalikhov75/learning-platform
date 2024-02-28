import {
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useAuth } from "entities/auth";
import { Link } from "react-router-dom";

export const UsersTable = () => {
  const { users } = useAuth();

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Фамилия</Th>
            <Th>Имя</Th>
            <Th>Отчество</Th>
            <Th>Выполнено тестов</Th>
            <Th>Должность</Th>
            <Th>Действия</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users?.map((user) => {
            return (
              <Tr key={user._id}>
                <Td>{user.lastName}</Td>
                <Td>{user.firstName}</Td>
                <Td>{user.surName}</Td>
                <Td>{user.finishedTests.length}</Td>
                <Td>{user.job.title}</Td>
                <Td>
                  <Button as={Link} to={`/supervisor/users/${user._id}`}>
                    Подробнее
                  </Button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
