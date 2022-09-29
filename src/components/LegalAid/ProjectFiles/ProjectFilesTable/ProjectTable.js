import React from "react";
import { Table, Thead, Tbody, Tr, Td, IconButton } from "@chakra-ui/react";
import { TableHeadColumn } from "../../../Membership/Allocations/AllocationsTable/AllocationsTable";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import classes from "../../../common/table/TableStyles.module.css";
import { useNavigate} from "react-router-dom";
import { useProject } from "../../../../hooks/useProjects";
import Loader from "../../../common/UI/Loader/Loader";
import {useSelector} from "react-redux";

const ProjectTable = () => {
  //get project id
  const { user } = useSelector((state) => state.auth);
  const projectId = user?.project?.id
  const projectName =user?.project?.name


  const { data, isLoading } = useProject(projectId);

  const navigate = useNavigate();
  const handleClick = (type) => {
    // type === "documents"
    //   ? navigate("/project-files/documents")
    //     : type === "progress"
    //   ? navigate("/project-files/progress")
    //         :navigate("/project-files/logframe")

    if (type === "documents") {
      navigate(`/project-files/documents/${projectName}/${projectId}`);
    } else {
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={classes.table_wrapper}>
          <Table
            variant="striped"
            colorScheme="gray"
            size="sm"
            className={classes.table}
          >
            <Thead className={classes.table_header}>
              <Tr>
                <TableHeadColumn title="Name" />
                <TableHeadColumn title="Created By" />
                <TableHeadColumn title="Last Modified" />
                <TableHeadColumn title="Actions" />
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <div className={classes.primary_text_icon}>
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 18H2C0.89543 18 0 17.1046 0 16V2C0 0.89543 0.89543 0 2 0H8C8.26519 0 8.51951 0.105451 8.707 0.293L10.414 2H18C19.1046 2 20 2.89543 20 4V16C20 17.1046 19.1046 18 18 18ZM2 4V16H18V4H2Z"
                        fill="#562B85"
                      />
                    </svg>
                    Project Documents
                  </div>
                </Td>
                <Td className={classes.data__purpose_primary_text}>
                  {/*Kimera Moses*/} {data?.project?.createdBy?.full_name}
                </Td>
                <Td>{new Date(data?.project?.createdAt).toLocaleString()}</Td>
                <Td>
                  <div className={classes.table_actions_wrapperr}>
                    <IconButton
                      size="sm"
                      variant="outline"
                      aria-label="Download Item"
                      icon={<MdOutlineRemoveRedEye />}
                      onClick={() => handleClick("documents")}
                    />
                  </div>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <div className={classes.primary_text_icon}>
                    <svg
                      width="20"
                      height="12"
                      viewBox="0 0 20 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 8.414C11.1875 8.60155 11.4418 8.70694 11.707 8.707H12.293C12.5582 8.70694 12.8125 8.60155 13 8.414L17.707 3.707L20 6V0H14L16.293 2.293L12 6.586L8.99997 3.586C8.81248 3.39845 8.55816 3.29306 8.29297 3.293H7.70697C7.44177 3.29306 7.18746 3.39845 6.99997 3.586L0.292969 10.293L1.70697 11.707L7.99997 5.414L11 8.414Z"
                        fill="#562B85"
                      />
                    </svg>
                    Project Progress
                  </div>
                </Td>
                <Td className={classes.data__purpose_primary_text}>
                  {/*Geoffrey Ariong*/}
                  {data?.project?.createdBy?.full_name}
                </Td>
                <Td>{new Date(data?.project?.createdAt).toLocaleString()}</Td>
                <Td>
                  <div className={classes.table_actions_wrapperr}>
                    <IconButton
                      size="sm"
                      variant="outline"
                      aria-label="Download Item"
                      icon={<MdOutlineRemoveRedEye />}
                      onClick={() => handleClick("progress")}
                    />
                  </div>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <div className={classes.primary_text_icon}>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 18H1C0.447715 18 0 17.5523 0 17V0H2V16H18V18ZM5.373 13L4 11.656L8.856 6.9C9.23827 6.52848 9.84673 6.52848 10.229 6.9L12.456 9.081L16.627 5L18 6.344L13.144 11.1C12.7617 11.4715 12.1533 11.4715 11.771 11.1L9.543 8.918L5.374 13H5.373Z"
                        fill="#562B85"
                      />
                    </svg>
                    Project logframe
                  </div>
                </Td>
                <Td className={classes.data__purpose_primary_text}>
                  {/*Andrew Tebandeke*/}
                  {data?.project?.createdBy?.full_name}
                </Td>
                <Td>{new Date(data?.project?.createdAt).toLocaleString()}</Td>
                <Td>
                  <div className={classes.table_actions_wrapperr}>
                    <IconButton
                      size="sm"
                      variant="outline"
                      aria-label="Download Item"
                      icon={<MdOutlineRemoveRedEye />}
                      onClick={() => handleClick("logframe")}
                    />
                  </div>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </div>
      )}
    </>
  );
};
export default ProjectTable;
// export default withTable(ProjectTable);
