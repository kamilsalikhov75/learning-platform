import { CheckCircleIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, SimpleGrid, Stack, Tag } from "@chakra-ui/react";
import { useAuth } from "entities/auth";
import { getCourse, getCourseLessons, useCourses } from "entities/course";
import { LessonCard } from "features/course";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const CoursePage = () => {
  const { courseId } = useParams();
  const { currentCourse, lessons } = useCourses();
  const { user } = useAuth();
  const finishedTests = user?.finishedTests as string[];
  const isLessonsFinished =
    lessons?.length === 0 ||
    (lessons?.filter((lesson) => !user?.finishedLessons.includes(lesson._id))
      .length === 0 &&
      lessons.length > 0);
  const isTestFinished =
    currentCourse?.test !== undefined &&
    finishedTests?.includes(currentCourse?.test);
  const navigate = useNavigate();

  useEffect(() => {
    if (courseId) {
      getCourse(courseId);
      getCourseLessons(courseId);
    }
  }, [courseId]);

  return (
    <>
      <Heading>{currentCourse?.title}</Heading>
      <Stack>
        {lessons?.map((lesson) => {
          return <LessonCard key={lesson._id} data={lesson} />;
        })}
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="20px">
          <SimpleGrid
            minChildWidth="120px"
            spacing="40px"
            alignItems="center"
            gap="16px"
          >
            <Heading as="h6" size="sm" gap="8px">
              Тест {isTestFinished && <CheckCircleIcon color="green" />}
            </Heading>
            {isTestFinished ? (
              <Tag
                size="lg"
                textAlign="center"
                as="div"
                variant="subtle"
                colorScheme="green"
              >
                Тест пройден
              </Tag>
            ) : (
              <Button
                isLoading={!isLessonsFinished}
                spinner={<>Нужно пройти все уроки</>}
                onClick={() => {
                  navigate(`/tests/${currentCourse?.test}`);
                }}
              >
                Перейти
              </Button>
            )}
          </SimpleGrid>
        </Box>
      </Stack>
    </>
  );
};
