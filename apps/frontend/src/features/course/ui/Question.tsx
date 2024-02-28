import { FormLabel, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { Answer, Question as IQuestion } from "entities/course";

export interface QuestionProps {
  question: IQuestion;
  onChange: (answer: Answer) => void;
  value: Answer | undefined;
}

export const Question = ({ question, onChange, value }: QuestionProps) => {
  const onRadioChange = (nextValue: string) => {
    onChange({ answer: nextValue, question: question._id });
  };

  return (
    <>
      <FormLabel>{question.title}</FormLabel>
      <RadioGroup
        value={value?.answer}
        onChange={onRadioChange}
        defaultValue="1"
      >
        <Stack direction="row">
          {question.options.map((option) => {
            return (
              <Radio key={option} value={option}>
                {option}
              </Radio>
            );
          })}
        </Stack>
      </RadioGroup>
    </>
  );
};
