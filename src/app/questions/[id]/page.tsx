import { QuestionView } from "@/views/QuestionView";
import React from "react";

const QuestionSubmitPage = React.memo(({ params }: { params: { id: string } }) => {
  return <QuestionView id={params.id} />;
});

export default QuestionSubmitPage;
QuestionSubmitPage.displayName = "QuestionView";
