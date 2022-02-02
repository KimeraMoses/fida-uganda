import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, useDisclosure } from "@chakra-ui/react";
import GenericModal from "../../common/GenericModal";
import SectionHeader from "../../common/SectionHeader";
import Table from "../../common/Table";
import { getAllDistricts } from "../../../store/reducers/registration";
import ClientForm from "../../forms/clients/ClientForm";
import { clientsColumns } from "../../tables/clients/clients";
import { getClients } from "../../../store/reducers/clients";

function Clients() {
  const dispatch = useDispatch();
  const { clients } = useSelector((state) => state.clients);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const data = useMemo(() => clients, [clients]);
  const columns = useMemo(() => clientsColumns, []);

  const handleBtnClick = () => {
    onOpen();
  };

  useEffect(() => {
    dispatch(getClients());
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
