import {useDisclosure} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {useAddEvent, useEvents} from "../../../hooks/useEvents";
import Modal from "../../common/Modal";
import SectionHeader from "../../common/SectionHeader";
// import TableSearch from "../../common/table/TableSearch";
import Loader from "../../common/UI/Loader/Loader";
// import AttendenceTable from "./AttendenceTable/AttendenceTable";
import NewAttendence from "./NewAttendence/NewAttendence";
import {attendanceInitialValues, attendanceSchema} from "./NewAttendence/schema";
import Table from "../../common/TableComponent/Table";
import {eventsAttendanceTableColumns} from "../../../lib/tableColumns";
import {useProjectOptions} from "../../../hooks/useProjects";

const EventAttendence = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const {data: eventsData, isLoading} = useEvents();
    const projectOptions = useProjectOptions();

    const [data, setData] = useState([]);
    useEffect(() => {
        setData([]);
        if (eventsData?.events?.length) {
            const dataToSet = eventsData?.events?.map((b, index) => {
                return {
                    ...b,
                    index: index + 1,
                    full_name: b?.user?.full_name
                        ? b.user.full_name
                        : b?.registeredBy?.full_name
                            ? b.registeredBy.full_name
                            : b?.createdBy?.full_name
                                ? b.createdBy.full_name
                                : "N/A",
                    // project: projectOptions.find(project=>project.value === b.project)?.label,
                    project: b?.project?.name
                        ? b.project.name
                        : b?.project_name
                       ? projectOptions.find(project=>project.value === b.project_name)?.label
                    :"N/A",

                };
            });
            setData(dataToSet);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [eventsData]);

    return (
        <>
            <SectionHeader title="Events Attendence"/>
            {isLoading ? (
                <Loader/>
            ) : (
                <>
                    <Table
                        data={data}
                        columns={eventsAttendanceTableColumns}
                        loading={isLoading}
                        btnLabel="Add Attendance"
                        btnClick={onOpen}
                        hideActions={true}
                        // showActions={true}
                        // onEditHandler={onEditHandler}
                    />
                    {/*{data?.events && <AttendenceTable data={data?.events} btnLabel="Add Attendance" btnClick={onOpen}/>}*/}
                </>
            )}
            <Modal isOpen={isOpen} size="xl" title="Event Attendance" onClose={onClose}>
                <NewAttendence
                    validationSchema={attendanceSchema}
                    initialValues={attendanceInitialValues}
                    onSuccess={onClose}
                    onClose={onClose}
                    success={`Event added successfully`}
                    useMutate={useAddEvent}

                />
            </Modal>
        </>
    );
};

export default EventAttendence;
