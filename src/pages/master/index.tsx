import Sidebar from "components/Sidebar/sidebar";
import { useContext } from "react";
import { ClientContext, ScreenControlContext } from "services";

export default function Master(): JSX.Element {
  const { LinkItems } = useContext(ScreenControlContext);
    return (
    <Sidebar linkItems={LinkItems}><></></Sidebar>
  );
}
