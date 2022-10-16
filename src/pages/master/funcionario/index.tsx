import { useContext } from "react";
import { EmployeePage } from "components/Pages";
import Sidebar from "components/Sidebar/sidebar";
import { ClientContext, ScreenControlContext } from "services";

export default function ListagemFuncionario() {
  const { LinkItems } = useContext(ScreenControlContext);
  const { userData } = useContext(ClientContext);

  return (
    <Sidebar userData={userData} linkItems={LinkItems}>
      <EmployeePage />
    </Sidebar>
  );
}
