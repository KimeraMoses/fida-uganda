import React from "react";
import { Table, Thead, Tbody, Tr, Td } from "@chakra-ui/react";
import classes from "./Table.module.css";
import { TableHeadColumn } from "../../Membership/Allocations/AllocationsTable/AllocationsTable";
import { formatDate } from "../../../lib/data";
import withTable from "./../../../hoc/withTable";

const ITServicesTable = ({ data, isProducts }) => {
  return (
    <>
      <div className={classes.table_wrapper}>
        <Table
          variant="striped"
          colorScheme="gray"
          size="sm"
          className={classes.data_table}
        >
          <Thead
            className={`${classes.table_header} ${
              isProducts ? classes.products_table_header : ""
            }`}
          >
            <Tr>
              <TableHeadColumn
                title="Name"
                secondaryText={isProducts ? "Brand" : "Location"}
              />
              <TableHeadColumn title="Category" secondaryText="Class" />
              <TableHeadColumn title="Description" />
              <TableHeadColumn title="Status" />
              <TableHeadColumn
                title="Payment Status"
                secondaryText="Purchase Date"
              />
              <TableHeadColumn title="Amount" secondaryText="Currency" />
            </Tr>
          </Thead>
          <Tbody>
            {data &&
              data.map((item) => {
                return (
                  <Tr key={item.id}>
                    <Td className={classes.data_field}>
                      <div
                        className={`${classes.data__primary_text} ${classes.single_line}`}
                      >
                        {item.name}
                      </div>
                      <div className={classes.data__secondary_text}>
                        {item.brand}
                      </div>
                    </Td>
                    <Td className={classes.data_field}>
                      <div
                        className={`${classes.data__primary_text} ${classes.single_line}`}
                      >
                        {item.category}
                      </div>
                      <div className={classes.data__secondary_text}>
                        {item.class}
                      </div>
                    </Td>
                    <Td className={classes.data_field}>
                      <div className={classes.data__primary_text}>
                        {item.description}
                      </div>
                    </Td>
                    <Td className={classes.data_field}>
                      <div
                        className={`${classes.allocation_status_wrapper} ${
                          item.status ? classes.paid : classes.fail
                        }`}
                      >
                        <span className={classes.status_indicator}></span>
                        <h5>{item.status}</h5>
                      </div>
                    </Td>
                    <Td className={classes.data_field}>
                      <div className={classes.data__primary_text}>
                        {item.payment_status}
                      </div>
                      <div className={classes.data__secondary_text}>
                        {formatDate(item.purchase_date)}
                      </div>
                    </Td>
                    <Td className={classes.data_field}>
                      <div className={classes.data__primary_text}>
                        {item.amount}
                      </div>
                      <div className={classes.data__secondary_text}>
                        {item.currency}
                      </div>
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </div>
    </>
  );
};

export default withTable(ITServicesTable);
