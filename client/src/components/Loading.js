import React, { memo } from "react";
import { HashLoader } from "react-spinners";
const Loading = () => {
  return <HashLoader color="#f28902" />;
};

export default memo(Loading);
