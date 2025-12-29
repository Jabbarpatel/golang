import { ReactNode } from "react";
import { Table, TableProps } from "rsuite";

type Props = TableProps & {
  data: object[];
  onRowClick?: (value: object) => void | undefined;
  children: ReactNode;
};

const AppTable = ({
  data,
  height = 400,
  onRowClick = undefined,
  children,
  ...props
}: Props) => {
  return (
    <Table
      height={height}
      data={data}
      onRowClick={(rowData: object) => {
        onRowClick?.(rowData);
      }}
      {...props}
    >
      {children}
    </Table>
  );
};

export default AppTable;
