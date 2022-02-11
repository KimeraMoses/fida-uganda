import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, useDisclosure, useToast } from "@chakra-ui/react";
import GenericModal from "../../common/GenericModal";
import SectionHeader from "../../common/SectionHeader";
import ClvComplaintForm from "../../forms/clv/ClvComplaintForm";
import { getComplaints } from "../../../store/reducers/clv";
import { clvComplaintsColumns } from "../../tables/clvs/complaints";
import Table from "../../common/Table";

function ClvComplaints() {
  const dispatch = useDispatch();
  const toast = useToast();
  const { complaints, success } = useSelector((state) => state.clv);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const data = useMemo(() => complaints, [complaints]);
  const columns = useMemo(() => clvComplaintsColumns, []);

  const handleBtnClick = () => {
    onOpen();
  };

  useEffect(() => {
    dispatch(getComplaints());
  }, [dispatch]);

  useEffect(() => {
    if (success) {
      onClose();
      toast({
        title: "Successful",
        description: success,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [success, onClose, toast]);

  return (
    <Box>
      <SectionHeader title="CLV Complaints" />
      <Table
        data={data}
        columns={columns}
        btnLabel="Add Complaint"
        btnClick={handleBtnClick}
      />
      <GenericModal isOpen={isOpen} onClose={onClose}>
        <ClvComplaintForm />
      </GenericModal>
    </Box>
  );
}

export default ClvComplaints;
