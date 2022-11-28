import { useContext } from "react";
import { CoursesPage, ModalProvider } from "components";
import Sidebar from "components/Sidebar/sidebar";
import { ClientContext, ScreenControlContext } from "services";

export default function Dashboard() {
  const { LinkItems } = useContext(ScreenControlContext);

  return (
    <Sidebar linkItems={LinkItems}>
      <ModalProvider>
        <CoursesPage />
      </ModalProvider>
    </Sidebar>
  );
}
