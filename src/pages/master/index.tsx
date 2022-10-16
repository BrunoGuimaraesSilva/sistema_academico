import Sidebar from "components/Sidebar/sidebar";
import { useContext } from "react";
import { ScreenControlContext } from "services";

export default function Dashboard(): JSX.Element {
  const { LinkItems } = useContext(ScreenControlContext);
  return (
    <Sidebar linkItems={LinkItems}><></></Sidebar>
  );
}
