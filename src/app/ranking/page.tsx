import { RankingView } from "@/views/RankingView";
import React from "react";

const CountPage = React.memo(() => {
  return <RankingView />;
});

export default RankingView;
CountPage.displayName = "RankingView";
