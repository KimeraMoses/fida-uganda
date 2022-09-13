import React from "react";
import classes from "../../../HumanResource/Reports/ReportSummary/ReportSummary.module.css";
// import {Textarea} from "@chakra-ui/react";
// import SummaryTable from "./../../../dashboard/SummaryDetails/SummaryTable/SummaryTable";
import ReportBreadCrumb from "../../../HumanResource/Reports/BreadCrumb/ReportBreadCrumb";
// import Logo from "../../../../assets/images/Avater.png";
import FormButton from "../../../common/UI/FormButton/FormButton";
import { useParams} from "react-router-dom";
import Loader from "../../../common/UI/Loader/Loader";
import {SimpleGrid} from "@chakra-ui/react";
import {useProjectFile} from "../../../../hooks/useProjectFiles";


const FileSummaryDetails = () => {

    const {id} = useParams();

    const {data, isLoading} = useProjectFile(id);
    console.log(data)

    const folderName = data?.projectFile?.project?.name;
    const projectId = data?.projectFile?.project?.id;


    return (
        <div className={classes.summary_wrapper}>
            <ReportBreadCrumb
                root={folderName}
                rootLink={`/fida-projects/${folderName}/${projectId}`}
                folderName="Project Documents"
                folderLink={`/project-files/documents/${folderName}/${projectId}`}
                reportName="Document"
            />


            <div className={classes.summary_details_wrapper}>
                <div className={classes.summary_wrapper_inner}>

                    <h2>{data?.report?.type}</h2>


                    <div className={classes.user_details}>
                        {isLoading  ? (
                            <Loader />
                        ) : (
                            !isLoading &&
                            data && (
                                <SimpleGrid columns={2} spacing={1}>
                                    <h6>File Name:</h6>
                                    <h6>{data?.projectFile?.filename}</h6>
                                    <h6>Created By:</h6>
                                    <h6>{data?.projectFile?.createdBy?.full_name}</h6>
                                    <h6>Project:</h6>
                                    <h6>{data?.projectFile?.project?.name}</h6>
                                    <h6>Created At:</h6>
                                    <h6>{new Date(data?.projectFile?.createdAt).toLocaleString()}</h6>
                                    <h6>Update:</h6>
                                    <h6>{new Date(data?.projectFile?.updateAt).toLocaleString()}</h6>
                                </SimpleGrid>
                            )
                        )}
                    </div>

                    <div className={classes.user_details}>
                        {/*<svg*/}
                        {/*    width="64"*/}
                        {/*    height="81"*/}
                        {/*    viewBox="0 0 64 81"*/}
                        {/*    fill="none"*/}
                        {/*    xmlns="http://www.w3.org/2000/svg"*/}
                        {/*>*/}
                        {/*    <path*/}
                        {/*        d="M56 80.9999H8C3.58172 80.9999 0 77.4182 0 72.9999V8.99995C0 4.58167 3.58172 0.999946 8 0.999946H36C36.0359 0.995298 36.0722 0.995298 36.108 0.999946H36.132C36.1698 1.01178 36.2086 1.01982 36.248 1.02395C36.6007 1.04656 36.949 1.11514 37.284 1.22795H37.344H37.404H37.452C37.5258 1.27965 37.5954 1.33717 37.66 1.39995C38.0958 1.59364 38.4929 1.86468 38.832 2.19995L62.832 26.1999C63.1673 26.5391 63.4383 26.9362 63.632 27.3719C63.668 27.4599 63.696 27.5439 63.724 27.6359L63.764 27.7479C63.8757 28.0815 63.9416 28.4287 63.96 28.7799C63.9635 28.8198 63.9729 28.8589 63.988 28.8959V28.9199C63.9946 28.9462 63.9986 28.973 64 28.9999V72.9999C64 75.1217 63.1571 77.1565 61.6569 78.6568C60.1566 80.1571 58.1217 80.9999 56 80.9999ZM41.696 48.9999V68.9999H45.456V60.8399H51.296V57.4879H45.456V52.3639H52V48.9999H41.696ZM26.896 48.9999V68.9999H31.72C33.7437 69.0994 35.7033 68.2756 37.048 66.7599C38.4276 64.9996 39.1187 62.7969 38.992 60.5639V57.3239C39.0847 55.1145 38.3742 52.9462 36.992 51.2199C35.6905 49.7385 33.7904 48.9229 31.82 48.9999H26.896ZM12 48.9999V68.9999H15.76V61.9639H18.264C19.9361 62.0565 21.5693 61.4375 22.76 60.2599C23.8963 58.9896 24.4856 57.3222 24.4 55.6199C24.4742 53.8769 23.8854 52.1703 22.752 50.8439C21.6309 49.6007 20.0124 48.9242 18.34 48.9999H12ZM36 8.99995V28.9999H56L36 8.99995ZM31.784 65.6479H30.656V52.3639H32.024C32.9954 52.3067 33.9294 52.7466 34.504 53.5319C35.0904 54.7451 35.3418 56.093 35.232 57.4359V60.9119C35.3198 62.1909 35.0424 63.4686 34.432 64.5959C33.7764 65.3612 32.786 65.7547 31.784 65.6479ZM18.34 58.5999H15.756V52.3639H18.376C19.0301 52.371 19.6345 52.714 19.976 53.2719C20.4089 53.9862 20.6179 54.8138 20.576 55.6479C20.6262 56.4259 20.4196 57.1988 19.988 57.8479C19.5902 58.3473 18.9779 58.6267 18.34 58.5999Z"*/}
                        {/*        fill="#562B85"*/}
                        {/*    />*/}
                        {/*</svg>*/}
                        <br/>
                        <FormButton variant="save" type="submit">
                            <a href={data?.projectFile?.downloadUrl}>Download Report </a>
                        </FormButton>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FileSummaryDetails;
