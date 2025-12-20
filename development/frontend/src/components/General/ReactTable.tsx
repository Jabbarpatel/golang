import { JSX } from "react";
import { Table } from "rsuite";

const { Column, HeaderCell, Cell } = Table;

type Props = {
  data: object[];
  headers: string[];
  datakeys: string[];
  height?: number;
  onRowClick?: (value: object) => void | undefined;
  isActions?: boolean;
  actions?: () => JSX.Element | null;
  headerWidth?: number;
  columnWidth?: number;
};

const ReactTable = ({
  headerWidth = 100,
  columnWidth = 100,
  data,
  headers,
  datakeys,
  height = 400,
  onRowClick = undefined,
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
          <Column width={headerWidth} align="center" fixed>
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
