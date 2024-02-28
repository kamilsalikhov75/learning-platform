import { Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import { getUser, useAuth } from "entities/auth";
import { Course, Test } from "entities/course";
import { CourseCard } from "features/course";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { WithLabel } from "shared/ui/WithLabel";

export const UserPage = () => {
  const { userId } = useParams();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (userId) {
      getUser(userId);
    }
  }, [userId]);

  return (
    <>
      <SimpleGrid columns={3} gap="8px">
        <WithLabel label="Фамилия">{currentUser?.lastName}</WithLabel>
        <WithLabel label="Имя">{currentUser?.firstName}</WithLabel>
        <WithLabel label="Отчество">{currentUser?.surName}</WithLabel>
        <WithLabel label="Пройдено тестов">
          {currentUser?.finishedTests.length}
        </WithLabel>
      </SimpleGrid>
      {currentUser?.finishedTests.length ? (
        <Stack>
          <Heading size="md">Завершенные курсы</Heading>
          {currentUser.finishedTests.map((test) => {
            const data = test as Test;
            return <CourseCard data={data.course as Course} />;
          })}
        </Stack>
      ) : (
        <Heading size="md">Нет завершенных курсов</Heading>
      )}
    </>
  );
};
