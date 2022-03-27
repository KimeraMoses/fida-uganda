import { Thead, Tr, Th } from "@chakra-ui/react";

const TableHead = ({ headerGroups }) => {
  return (
    <Thead bgColor="purple.50" color="white">
      {headerGroups.map((headerGroup) => (
        <Tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
          {headerGroup.headers.map((column, index) => (
            <Th
              {...column.getHeaderProps()}
              whiteSpace="nowrap"
              key={index.toString()}
            >
              {column.render("Headers")}
            </Th>
          ))}
        </Tr>
      ))}
    </Thead>
  );
};

export default TableHead;
