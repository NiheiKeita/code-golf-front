import { QuestionListView } from "@/views/QuestionListView";
import React from "react";

const CountPage = React.memo(() => {
  return <QuestionListView />;
});

export default CountPage;
CountPage.displayName = "QuestionListView";
