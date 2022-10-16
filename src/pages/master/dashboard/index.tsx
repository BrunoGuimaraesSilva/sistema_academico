import { useContext } from "react";
import { StudantPage } from "components";
import Sidebar from "components/Sidebar/sidebar";
import { ClientContext, ScreenControlContext } from "services";

export default function Dashboard() {
  const { LinkItems } = useContext(ScreenControlContext);
  const { userData } = useContext(ClientContext);

  return (
    <Sidebar userData={userData} linkItems={LinkItems}>

    </Sidebar>
  );
}
