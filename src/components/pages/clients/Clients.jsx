import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, useDisclosure } from "@chakra-ui/react";
import GenericModal from "../../common/GenericModal";
import SectionHeader from "../../common/SectionHeader";
import { getComplaints } from "../../../store/reducers/clv";
import { clvComplaintsColumns } from "../../tables/clvs/complaints";
import Table from "../../common/Table";
import { getAllDistricts } from "../../../store/reducers/registration";
import ClientForm from "../../forms/clients/ClientForm";

function Clients() {
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
    dispatch(getAllDistricts());
  }, [dispatch]);

  return (
    <Box>
      <SectionHeader title="Clients" />
      <Table
        data={data}
        columns={columns}
        btnLabel="Add Client"
        btnClick={handleBtnClick}
      />
      <GenericModal isOpen={isOpen} onClose={onClose}>
        <ClientForm />
      </GenericModal>
    </Box>
  );
}

export default Clients;
