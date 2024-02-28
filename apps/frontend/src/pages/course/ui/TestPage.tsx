import { Button, FormControl, Stack, useToast } from "@chakra-ui/react";
import { updateMe, useAuth } from "entities/auth";
import { getTest, useCourses } from "entities/course";
import type { Answer } from "entities/course";
import { TestQuestion } from "features/course";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const TestPage = () => {
  const { user } = useAuth();
  const { testId } = useParams();
  const { currentTest } = useCourses();
  const [answers, setAnswers] = useState<Answer[]>([]);
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (testId) {
      getTest(testId);
    }
  }, [testId]);

  const onChange = (value: Answer) => {
    if (answers?.find((answer) => answer.question === value.question)) {
      setAnswers(
        answers.map((item) => {
          if (item.question === value.question) {
            return value;
          } else {
            return item;
          }
        })
      );
    } else {
      setAnswers([...answers, value]);
    }
  };
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (answers.length !== currentTest?.questions.length) {
      return toast({
        title: "Ответьте на все!",
        description: "Чтобы проверить тест, ответьте на все вопросы!",
        status: "warning",
        isClosable: true,
      });
    }

    const isError =
      answers.filter((answer) => {
        const question = currentTest.questions.find(
          (item) => item._id === answer.question
        );
        return question?.answer !== answer.answer;
      }).length > 0;

    if (isError) {
      return toast({
        title: "Есть ошибки",
        description: "Не все ответы верные! Попробуйте еще.",
        status: "error",
        isClosable: true,
      });
    }

    const finishedTests = user?.finishedTests || [];
    updateMe({ finishedTests: [...finishedTests, currentTest._id] });

    toast({
      title: "Поздравляем",
      description: "Поздравляем! Вы прошли тест",
      status: "success",
      isClosable: true,
    });
    navigate("/");
  };

  return (
    <form onSubmit={onSubmit}>
      <Stack>
        {currentTest?.questions.map((question) => {
          return (
            <FormControl key={question._id}>
              <TestQuestion
                value={answers.find(
                  (answer) => answer.question === question._id
                )}
                onChange={onChange}
                question={question}
              />
            </FormControl>
          );
        })}
      </Stack>
      <Button type="submit">Проверить</Button>
    </form>
  );
};
