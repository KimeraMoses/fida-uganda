import React from "react";
import { useParams } from "react-router-dom";
import SectionHeader from "../../../common/SectionHeader";
import TableSearch from "../../../common/table/TableSearch";
import FidaProjectTable from "../FidaProjectTable/FidaProjectTable";

const FidaProjectFiles = () => {
  const { folderName } = useParams();
  return (
    <>
      <SectionHeader
        title={`Fida Projects > ${folderName.replace(/-/g, " ")}`}
      />
      <TableSearch showBtn={false} />
      <FidaProjectTable isDocuments={true} />
    </>
  );
};

export default FidaProjectFiles;
