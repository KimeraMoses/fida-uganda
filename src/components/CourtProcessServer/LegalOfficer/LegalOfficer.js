import SectionHeader from "../../common/SectionHeader";
import LegalOfficerTable from "./LegalOfficerTable/LegalOfficerTable";

const data = [
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
    active: true,
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
  return (
    <>
      <SectionHeader title="Legal officer" />
      <LegalOfficerTable
        data={data}
        showBtn={false}
        tableName="Legal Officer"
      />
    </>
  );
};

export default LegalOfficer;
