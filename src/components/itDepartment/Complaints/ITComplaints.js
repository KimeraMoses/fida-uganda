import { useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import { useAddComplaint, useComplaints } from "../../../hooks/useComplaint";
import ComplaintForm from "./ComplaintForm/ComplaintForm";
import {
  itComplaintInitialValues,
  itComplaintOrderSchema,
} from "../../forms/it/schemas/it";
import Loader from "../../common/UI/Loader/Loader";
import Table from "../../common/TableComponent/Table";
import { itComplaintsColumns } from "../../../lib/tableColumns";

const ITComplaints = () => {
  const { isOpen,  onClose } = useDisclosure();
  const { data: itComplaintsData, isLoading } = useComplaints();

  const [data, setData] = useState([]);
  useEffect(() => {
    setData([]);
    if (itComplaintsData?.complaints?.length) {
      const dataToSet = itComplaintsData?.complaints?.map((b) => {
        return {
          ...b,
          name: {
            id: b?.id,
            name: b?.name,
          },
          date: {
            date: b?.createdAt,
            time: b?.createdAt,
          },
          subject: {
            subject: b?.subject,
            body: b?.body
          },
            status:{
              status:b?.status,
              date_recieved: b?.dueDate
            }
        };
      });
      // console.log('it data', dataToSet)
      setData(dataToSet);
    }
  }, [itComplaintsData]);

  return (
    <>
      <SectionHeader title="IT Complaints" />
      {isLoading ? (
        <Loader />
      ) : (
        <Table
        isLoading={isLoading}
        data={data ? data : null}
        btnLabel="Add Complaint"
        tableName="IT Complaints"
        columns={itComplaintsColumns}
        hideActions
      />
        // <ComplaintsTable
        //   data={data?.complaints}
        //   isLoading={isLoading}
        //   btnLabel="Add Complaint"
        //   btnClick={onOpen}
        //   tableName="IT Complaints"
        //   keysToFilterOut={["body"]}
        // />
      )}
      <Modal isOpen={isOpen} onClose={onClose} title="New Complaint Form">
        <ComplaintForm
          initialValues={itComplaintInitialValues}
          validationSchema={itComplaintOrderSchema}
          onSuccess={onClose}
          success={`IT Complaint added successfully`}
          useMutate={useAddComplaint}
        />
      </Modal>
    </>
  );
};

export default ITComplaints;
