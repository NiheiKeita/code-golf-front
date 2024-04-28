import { PushView } from "@/views/PushView";
import React from "react";

const CountPage = React.memo(() => {
  return <PushView />;
});

export default PushView;
CountPage.displayName = "PushView";
