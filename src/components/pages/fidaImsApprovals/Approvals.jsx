import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDisclosure } from "@chakra-ui/react";
import SectionHeader from "../../common/SectionHeader";
import GenericModal from "../../common/GenericModal";
import { loadUsers } from "../../../store/reducers/users";
import Table from "../../common/Table";
import { approvalColumns } from "../../tables/approvals/approvals";
import SettingsForm from "../../forms/settings/SettingsForm";
import SettingsFormView from "../../forms/settings/SettingsFormView";

const Approvals = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();
  const { users } = useSelector((state) => state.users);

  const data = useMemo(() => users, [users]);
  const columns = useMemo(() => approvalColumns, []);

  const handleOnOpen = () => {
    onOpen();
  };

  const handleRowClick = (row) => {
    console.log(row);
    onModalOpen();
  };

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  return (
    <>
      <SectionHeader title="FIDA IIMS Approvals" />
      <Table
        data={data}
        columns={columns}
        btnLabel="Add Employee"
        btnClick={handleOnOpen}
        onRowClick={handleRowClick}
      />
      <GenericModal isOpen={isOpen} onClose={onClose}>
        <SettingsForm />
      </GenericModal>
      <GenericModal isOpen={isModalOpen} onClose={onModalClose}>
        <SettingsFormView />
      </GenericModal>
    </>
  );
};

export default Approvals;
