import { Button, Heading, Stack } from "@chakra-ui/react";
import {
  Question as IQuestion,
  deleteQuestion,
  useCourses,
} from "entities/course";
import { QuestionOption } from "./QuestionOption";

export interface AdminQuestionProps {
  question: IQuestion;
}

export const AdminQuestion = ({ question }: AdminQuestionProps) => {
  const { currentTest } = useCourses();

  const onQuestionDelete = () => {
    if (currentTest) {
      deleteQuestion({
        questionId: question._id,
        testId: currentTest?._id,
      });
    }
  };

  return (
    <Stack>
      <Heading as="h5" size="md">
        {question.title} <Button onClick={onQuestionDelete}>Удалить</Button>
      </Heading>
      <Stack>
        {question.options.map((option) => {
          return (
            <QuestionOption
              key={option}
              answer={question.answer}
              option={option}
            />
          );
        })}
      </Stack>
    </Stack>
  );
};
