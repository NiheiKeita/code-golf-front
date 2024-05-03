import { QuestionsView } from "@/views/QuestionsView";
import React from "react";

const CountPage = React.memo(() => {
  return <QuestionsView />;
});

export default CountPage;
CountPage.displayName = "QuestionsView";
