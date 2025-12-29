import { Table, Button } from "rsuite";
import AppStatusPill from "@/components/General/AppStatusPill";

const { Column, Cell, HeaderCell } = Table;

const UserList = () => {
  return (
    <Column width={60} align="center" fixed>
      <HeaderCell style={{ fontWeight: "bold", fontSize: 13 }}>ID</HeaderCell>
      <Cell dataKey="ID" />
    </Column>
  );
};
export default UserList;
