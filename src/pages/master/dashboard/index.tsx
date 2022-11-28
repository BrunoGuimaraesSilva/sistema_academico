import { useContext } from "react";
import { StudantPage } from "components";
import Sidebar from "components/Sidebar/sidebar";
import { ClientContext, ScreenControlContext } from "services";
import { DashboardProvider, DashboardPage } from "components";

export default function Dashboard() {
  const { LinkItems } = useContext(ScreenControlContext);

  return (
    <Sidebar linkItems={LinkItems}>
      <DashboardProvider>
      <DashboardPage/>
      </DashboardProvider>
    </Sidebar>
  );
}
