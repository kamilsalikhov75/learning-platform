import { getTest, useCourses } from "entities/course";
import { CreateQuestionForm, AdminQuestion } from "features/course";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const AdminTestPage = () => {
  const { testId } = useParams();
  const { currentTest } = useCourses();

  useEffect(() => {
    if (testId) {
      getTest(testId);
    }
  }, [testId]);

  return (
    <>
      <CreateQuestionForm />
      {currentTest?.questions.map((question) => {
        return <AdminQuestion key={question._id} question={question} />;
      })}
    </>
  );
};
