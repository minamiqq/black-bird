import type { FC } from "react";
import "./App.css";
import { AuthPage } from "../pages/auth/ui";

export const App: FC = () => {
  return <AuthPage isHere={true} />;
};
