import { useContext } from "react";
import { StudantPageTeacher } from "components";
import Sidebar from "components/Sidebar/sidebar";
import { ClientContext, ScreenControlContext } from "services";

export default function ListagemEstudantes() {
  const { LinkItems } = useContext(ScreenControlContext);
  const { userData } = useContext(ClientContext);

  return (
    <Sidebar userData={userData} linkItems={LinkItems}>
      <StudantPageTeacher/>
    </Sidebar>
  );
}
