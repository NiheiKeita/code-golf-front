import { RankingView } from "@/views/RankingView";
import React from "react";

const QuestionSubmitPage = React.memo(({ params }: { params: { id: string } }) => {
  return <RankingView id={params.id} />;
});

export default QuestionSubmitPage;
QuestionSubmitPage.displayName = "RankingView";
