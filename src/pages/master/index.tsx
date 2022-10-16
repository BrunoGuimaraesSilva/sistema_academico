import Sidebar from "components/Sidebar/sidebar";
import { useContext } from "react";
import { ClientContext, ScreenControlContext } from "services";

export default function Dashboard(): JSX.Element {
  const { LinkItems } = useContext(ScreenControlContext);
  const { userData } = useContext(ClientContext);
  return (
    <Sidebar userData={userData} linkItems={LinkItems}><></></Sidebar>
  );
}
