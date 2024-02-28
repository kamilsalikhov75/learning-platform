import { Outlet } from "react-router-dom";
import { SupervisorHeader } from "widgets/header";

export const SupervisorLayout = () => {
  return (
    <>
      <SupervisorHeader />
      <Outlet />
    </>
  );
};
