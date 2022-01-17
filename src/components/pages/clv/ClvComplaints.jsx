import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, useDisclosure } from "@chakra-ui/react";
import GenericModal from "../../common/GenericModal";
import SectionHeader from "../../common/SectionHeader";
import ClvComplaintForm from "../../forms/clv/ClvComplaintForm";
import { getComplaints } from "../../../store/reducers/clv";
import { clvComplaintsColumns } from "../../tables/clvs/complaints";
import Table from "../../common/Table";

function ClvComplaints() {
  const dispatch = useDispatch();
  const { complaints } = useSelector((state) => state.clv);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const data = useMemo(() => complaints, [complaints]);
  const columns = useMemo(() => clvComplaintsColumns, []);

  const handleBtnClick = () => {
    onOpen();
  };

  useEffect(() => {
    dispatch(getComplaints());
  }, [dispatch]);

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
