import { useContext } from "react";
import { StudantPage } from "components";
import Sidebar from "components/Sidebar/sidebar";
import { ScreenControlContext } from "services";

export default function ListagemEstudantes() {
  const { LinkItems } = useContext(ScreenControlContext);

  return (
    <Sidebar linkItems={LinkItems}>
      <StudantPage key='1'/>
    </Sidebar>
  );
}
