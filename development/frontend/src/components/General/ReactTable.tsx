import { JSX } from "react";
import { Table } from "rsuite";

const { Column, HeaderCell, Cell } = Table;

type Props = {
  height: number;
  data: object[];
  headers: string[];
  datakeys: string[];
  onRowClick: (value: object) => void;
  isActions: boolean;
  actions: () => JSX.Element | null;
  headerWidth?: number;
  columnWidth?: number;
};

const ReactTable = ({
  height = 400,
  headerWidth = 100,
  columnWidth = 100,
  data,
  headers,
  datakeys,
  onRowClick,
  isActions,
  actions,
}: Props) => {
  return (
    <Table
      height={height}
      data={data}
      onRowClick={(rowData) => {
        onRowClick(rowData);
      }}
    >
      {headers.length > 0 &&
        headers.map((item: string, index: number) => (
          <Column
            width={headerWidth}
            align="center"
            fixed={datakeys[index] === "id" ? "left" : false}
          >
            <HeaderCell style={{ fontWeight: "bold", fontSize: 15 }}>
              {item}
            </HeaderCell>
            <Cell dataKey={datakeys[index]} />
          </Column>
        ))}

      {isActions && (
        <Column width={columnWidth} align="center" fixed="right">
          <HeaderCell style={{ fontWeight: "bold", fontSize: 15 }}>
            Actions
          </HeaderCell>
          {actions()}
          {/* 
          <Cell style={{ padding: "6px" }}>
            {(rowData) => (
              <Button
                appearance="link"
                onClick={() => alert(`id:${rowData.id}`)}
              >
                Edit
              </Button>
            )}
          </Cell> */}
        </Column>
      )}
    </Table>
  );
};

export default ReactTable;
