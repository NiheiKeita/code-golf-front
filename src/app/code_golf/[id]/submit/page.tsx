import { CodeSubmitView } from "@/views/CodeSubmitView";
import React from "react";

const CountPage = React.memo(() => {
  return <CodeSubmitView id="ss" />;
});

export default CountPage;
CountPage.displayName = "CountPage";
