import { useContext } from "react";
import { EmployeePage } from "components/Pages";
import Sidebar from "components/Sidebar/sidebar";
import { ScreenControlContext } from "services";

export default function ListagemFuncionario() {
  const { LinkItems } = useContext(ScreenControlContext);

  return (
    <Sidebar linkItems={LinkItems}>
      <EmployeePage />
    </Sidebar>
  );
}
