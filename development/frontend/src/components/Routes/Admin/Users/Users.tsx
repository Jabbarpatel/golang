import React, { useEffect, useState } from "react";
import * as userActions from "@/actions/users_api";
import AppTable from "@/components/General/AppTable";
import { Table, Button } from "rsuite";
import AppStatusPill from "@/components/General/AppStatusPill";

const { Column, Cell, HeaderCell } = Table;

const renderColumns = () => {
  return (
    <>
      <Column width={60} align="center" fixed>
        <HeaderCell style={{ fontWeight: "bold", fontSize: 13 }}>ID</HeaderCell>
        <Cell dataKey="ID" />
      </Column>

      <Column width={150} align="center">
        <HeaderCell style={{ fontWeight: "bold", fontSize: 13 }}>
          User Name
        </HeaderCell>
        <Cell dataKey="UserName" />
      </Column>

      <Column width={150} align="center">
        <HeaderCell style={{ fontWeight: "bold", fontSize: 13 }}>
          Created By
        </HeaderCell>
        <Cell dataKey="CreatedBy" />
      </Column>
      <Column width={200} align="center">
        <HeaderCell style={{ fontWeight: "bold", fontSize: 13 }}>
          Created At
        </HeaderCell>
        <Cell dataKey="CreatedAt" />
      </Column>
      <Column width={250} align="center">
        <HeaderCell style={{ fontWeight: "bold", fontSize: 13 }}>
          Contact Info
        </HeaderCell>
        <Cell dataKey="ContactInfo" />
      </Column>
      <Column width={100} align="center">
        <HeaderCell style={{ fontWeight: "bold", fontSize: 13 }}>
          Status
        </HeaderCell>
        <Cell>{(rowData) => <AppStatusPill active={rowData.IsActive} />}</Cell>
      </Column>
      <Column width={100} align="center">
        <HeaderCell style={{ fontWeight: "bold", fontSize: 13 }}>
          Role
        </HeaderCell>
        <Cell dataKey="Role" />
      </Column>

      <Column width={150} fixed="right">
        <HeaderCell style={{ fontWeight: "bold", fontSize: 13 }}>
          Actions
        </HeaderCell>
        <Cell style={{ padding: "6px" }}>
          {(rowData) => (
            <div>
              <Button
                appearance="link"
                onClick={() => alert(`id:${rowData.id}`)}
              >
                Edit
              </Button>
              <Button
                appearance="link"
                onClick={() => alert(`id:${rowData.id}`)}
              >
                Edit
              </Button>
            </div>
          )}
        </Cell>
      </Column>
    </>
  );
};

const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [totalPages, setTotalPages] = useState<number>();

  const {
    data: usersData,
    status: isUsers,
    refetch: refetchUsers,
  } = userActions.useGetUsers(page, pageSize);

  useEffect(() => {
    refetchUsers();
  }, []);

  useEffect(() => {
    if (isUsers === "success") {
      setUsers(usersData.Data);
      setTotalPages(usersData.TotalPages);
    }
  }, [isUsers]);

  return <AppTable data={users}>{renderColumns()}</AppTable>;
};
export default Users;
