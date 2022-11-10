import { useEffect, useState } from "react";
import { legalOfficeColumn } from "../../../lib/tableColumns";
import SectionHeader from "../../common/SectionHeader";
import Table from "../../common/TableComponent/Table";

const legalData = [
  {
    name: "Kimera Moses",
    profession: "Lawyer",
    tel: "0759130054",
    email: "kimeramoses001@gmail.com",
    address: "P.O Box 5569",
    city: "Kampala",
    active: true,
    date: "15/APR/2022",
    clvExpiry: "15/APR/2020",
  },
  {
    name: "Kimera Moses",
    profession: "Lawyer",
    tel: "0759130054",
    email: "kimeramoses001@gmail.com",
    address: "P.O Box 5569",
    city: "Kampala",
    active: true,
    date: "15/APR/2022",
    clvExpiry: "15/APR/2020",
  },
  {
    name: "Kimera Moses",
    profession: "Lawyer",
    tel: "0759130054",
    email: "kimeramoses001@gmail.com",
    address: "P.O Box 5569",
    city: "Kampala",
    active: false,
    date: "15/APR/2022",
    clvExpiry: "15/APR/2020",
  },
  {
    name: "Namugambi Cynthia",
    profession: "Dentist",
    tel: "0759130054",
    email: "cynthia@gmail.com",
    address: "P.O Box 5569",
    city: "Kampala",
    active: true,
    date: "15/APR/2022",
    clvExpiry: "15/APR/2020",
  },
];

const LegalOfficer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([]);
    if (legalData?.length) {
      const dataToSet = legalData?.map((b) => {
        return {
          ...b,
          name: {
            name: b?.name,
            profession: b?.profession,
          },
          contacts: {
            phoneNumber: b?.tel ? b?.tel : "N/A",
            email: b?.email,
          },
          address: {
            address: b?.address,
            city: b?.city,
          },
          date: {
            date: b?.date,
            expDate: b?.clvExpiry,
          },
        };
      });
      setData(dataToSet);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [legalData]);

  return (
    <>
      <SectionHeader title="Legal officer" />
      <Table
        data={data}
        showBtn={false}
        tableName="Legal Officer"
        columns={legalOfficeColumn}
        hideActions
      />
    </>
  );
};

export default LegalOfficer;
