import React, { useEffect, useState } from "react";
import SectionHeader from "../../common/SectionHeader";
import Modal from "../../common/Modal";
import { useDisclosure } from "@chakra-ui/react";
import NewContract from "./NewContract/NewContract";
import Loader from "./../../common/UI/Loader/Loader";
import Table from "../../common/TableComponent/Table";
import { useContracts } from "../../../hooks/useContract";
import { contractsTableColumn } from "../../../lib/tableColumns";
import { computeTimeDuration } from "./NewContract/RecentUploads";

const EmployeeContract = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: contractsData, isLoading } = useContracts();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([]);
    if (contractsData?.contracts?.length) {
      const dataToSet = contractsData?.contracts.map((contract) => {
        const size = `${+contract.size / 1000} MB`;
        const filenameArray = contract.filename.split(".");
        const fileType = filenameArray[filenameArray.length - 1];
        const diff = Math.abs(new Date() - new Date(contract.createdAt));
        const timeInSeconds = Math.ceil(diff / 1000);

        const { time, duration } = computeTimeDuration(timeInSeconds);
        return {
          id: contract?.id,
          contract: {
            name: contract.filename,
            time: `${time} ${duration}`,
            size: size,
            fileType: fileType,
            downloadUrl: contract?.downloadUrl,
          },
        };
      });
      setData(dataToSet);
    }
  }, [contractsData]);

  return (
    <>
      <SectionHeader title="Contracts" />
      {isLoading ? (
        <Loader />
      ) : (
        <Table
          columns={contractsTableColumn}
          data={data}
          btnLabel="Add Contract"
          btnClick={onOpen}
          tableName="Employee contracts"
          hideActions
        />
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <NewContract />
      </Modal>
    </>
  );
};

export default EmployeeContract;
