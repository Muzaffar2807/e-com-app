import React from "react";

import MainRoutes from "./routes";
import useConfig from "./hooks/useConfig";

export default function Main() {
  const config = useConfig();

  return config ? <MainRoutes /> : <div>Config Error</div>;
}
