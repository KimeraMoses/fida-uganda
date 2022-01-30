import { useDisclosure } from "@chakra-ui/react";
import { dummyDataTravel } from "../../../defaultData/dummyData";
import GenericModal from "../../common/GenericModal";
import StatCard from "../../common/StatCard";
import Table from "../../common/Table";
import { leaveTrackerColumns } from "../../tables/leaveTracker/leaveTracker";

function LeaveTracker() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const openTable = () => {
    onOpen();
  };

  return (
    <>
      <StatCard title="Leave tracker" value={5} onClick={openTable} />
      <GenericModal isOpen={isOpen} onClose={onClose}>
        <Table
          data={dummyDataTravel}
          columns={leaveTrackerColumns}
          showSearch={false}
          showPagination={false}
        />
      </GenericModal>
    </>
  );
}

export default LeaveTracker;
