import BreadCrump from "./BreadCrump";
import Table from "../../common/Table";
import { dummyDataProgressSummary } from "../../../defaultData/dummyData";
import {
  progressColumns,
  progressSummaryColumns,
} from "../../tables/projects/progress";
import { SimpleGrid } from "@chakra-ui/react";

function ProjectProgress() {
  return (
    <>
      <BreadCrump />
      <SimpleGrid gap="5rem" mt="2rem">
        <Table
          data={dummyDataProgressSummary}
          columns={progressSummaryColumns}
          showSearch={false}
          showPagination={false}
        />
        <Table
          data={progressSummaryColumns}
          columns={progressColumns}
          showSearch={false}
          showPagination={false}
        />
      </SimpleGrid>
    </>
  );
}

export default ProjectProgress;
