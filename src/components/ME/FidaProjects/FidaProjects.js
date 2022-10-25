import { useDisclosure } from "@chakra-ui/react";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
import FidaProjectTable from "./FidaProjectTable/FidaProjectTable";
import NewFidaProjectForm from "./NewFidaProject/NewFidaProjectForm";
import { useAddProject, useProjects } from "../../../hooks/useProjects";
import Loader from "./../../common/UI/Loader/Loader";
import { projectInitialValues, projectSchema } from "./NewFidaProject/schema";
import { fidaProjectsTableColumns } from "../../../lib/tableColumns";
import Table from "../../common/TableComponent/Table";
import { useEffect, useState } from "react";

const FidaProjects = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { data:projects, isLoading } = useProjects();
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([]);
    if (projects?.projects?.length) {
      const dataToSet = projects?.projects?.map((b) => {
        return {
          ...b,
          date: {
            date: b?.updateAt
          }
        };
      });
      setData(dataToSet);
    }
  }, [projects]);


  return (
    <>
      <SectionHeader title="Fida Projects" />
      {isLoading ? (
        <Loader />
      ) : (
        data && (
          <Table
          onViewHandler
          data={data?data:null}
          columns={fidaProjectsTableColumns}
          showBtn={false}
          loading={isLoading}
          showActions={true}
        />
          // <FidaProjectTable
          //   data={data?.projects}
          //   btnLabel="Add Project"
          //   btnClick={onOpen}
          // />
        )
      )}
      <Modal isOpen={isOpen} onClose={onClose} title="Project Profiling Form">
        <NewFidaProjectForm
          initialValues={projectInitialValues}
          validationSchema={projectSchema}
          onSuccess={onClose}
          success={`Project added successfully`}
          useMutate={useAddProject}
        />
      </Modal>
    </>
  );
};

export default FidaProjects;
