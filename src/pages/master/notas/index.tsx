import { useContext } from "react";
import { DashboardProvider, StudantPage } from "components";
import Sidebar from "components/Sidebar/sidebar";
import { ClientContext, ScreenControlContext } from "services";
import { NotesProvider, NotesPage } from "components";

export default function Notas() {
  const { LinkItems } = useContext(ScreenControlContext);

  return (
    <Sidebar linkItems={LinkItems}>
      <NotesProvider>
      <DashboardProvider>
      <NotesPage/>
      </DashboardProvider>
      </NotesProvider>
    </Sidebar>
  );
}
