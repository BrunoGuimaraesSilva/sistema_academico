import { useContext } from "react";
import { StudantPageTeacher } from "components";
import Sidebar from "components/Sidebar/sidebar";
import { ClientContext, ScreenControlContext } from "services";

export default function ListagemEstudantes() {
  const { LinkItems } = useContext(ScreenControlContext);

  return (
    <Sidebar linkItems={LinkItems}>
      <StudantPageTeacher/>
    </Sidebar>
  );
}
