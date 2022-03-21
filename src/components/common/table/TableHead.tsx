import { HeaderGroup } from "react-table";
import { Thead, Tr, Th } from "@chakra-ui/react";

type Props = {
  headerGroups: HeaderGroup<any>[];
};

const TableHead = ({ headerGroups }: Props) => {
  return (
    <Thead>
      {headerGroups.map((headerGroup) => (
        <Tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
          {headerGroup.headers.map((column, index) => (
            <Th
              {...column.getHeaderProps()}
              whiteSpace="nowrap"
              key={index.toString()}
            >
              {column.render("Header")}
            </Th>
          ))}
        </Tr>
      ))}
    </Thead>
  );
};

export default TableHead;
