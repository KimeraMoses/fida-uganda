import React, { useEffect, useState } from "react";
import SectionHeader from "../../common/SectionHeader";
import Modal from "../../common/Modal";
import { useDisclosure } from "@chakra-ui/react";
import EmployeeContractTable from "./EmployeeContractTable/EmployeeContractTable";
import NewContract from "./NewContract/NewContract";
import Loader from "./../../common/UI/Loader/Loader";
import { useActivatedUsers } from "../../../hooks/useUser";
import { employeesColumns } from "../../../lib/tableColumns";
import Table from "../../common/TableComponent/Table";

const Employees = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: activatedUsersData, isLoading } = useActivatedUsers();
console.log('activatedUsersData', activatedUsersData)
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([]);
    if (activatedUsersData?.users?.length) {
      const dataToSet = activatedUsersData?.users?.map((b) => {
        return {
          ...b,
          name: {
            name: b?.full_name,
            role: b?.role,
          },
          contacts: {
            phoneNumber: b?.createdAt?b?.createdAt:'N/A',
            email: b?.email,
          },
          sex: {
            sex: b?.subject,
            district: b?.email
          },
            dateOfBirth:{
              dateOfBirth:b?.status,
              nin: b?.dueDate
            },
            hiringDate:{
              hiringDate:b?.status,
              terminationDate: b?.dueDate
            },
            workingStatus:{
              workingStatus:b?.status,
              lastLogin: b?.dueDate
            }
        };
      });
      // console.log('it data', dataToSet)
      setData(dataToSet);
    }
  }, [activatedUsersData]);
  return (
    <>
      <SectionHeader title="Employees" />
      {isLoading ? (
        <Loader />
      ) : (
        data && (
          <Table
          isLoading={isLoading}
          data={data ? data : null}
          btnLabel="Add Employee"
          tableName="Employees"
          columns={employeesColumns}
          hideActions
        />
          // <EmployeeContractTable
          //   data={[]}
          //   btnLabel="Add Employee"
          //   btnClick={onOpen}
          //   tableName="Employees table"
          // />
        )
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <NewContract />
      </Modal>
    </>
  );
};

export default Employees;
