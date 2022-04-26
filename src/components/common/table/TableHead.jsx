import { Thead, Tr, Th } from "@chakra-ui/react";
import { v4 as uuid } from "uuid";

const TableHead = ({ headerGroups }) => {
  return (
    <Thead bgColor="purple.50" color="white">
      {headerGroups.map((headerGroup) => (
        <Tr {...headerGroup.getHeaderGroupProps()} key={uuid()}>
          {headerGroup.headers.map((column, index) => (
            <Th {...column.getHeaderProps()} whiteSpace="nowrap" key={uuid()}>
              {column.render("Headers")}
            </Th>
          ))}
        </Tr>
      ))}
    </Thead>
  );
};

export default TableHead;
