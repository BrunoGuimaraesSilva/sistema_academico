import { useContext } from "react";
import { StudantPage } from "components";
import Sidebar from "components/Sidebar/sidebar";
import { ClientContext, ScreenControlContext } from "services";
import { AbsenceProvider, AbsencePage } from "components";

export default function Absence() {
  const { LinkItems } = useContext(ScreenControlContext);

  return (
    <Sidebar linkItems={LinkItems}>
      <AbsenceProvider>
      <AbsencePage/>
      </AbsenceProvider>
    </Sidebar>
  );
}
