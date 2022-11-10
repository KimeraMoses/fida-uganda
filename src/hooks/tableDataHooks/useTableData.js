import { useState, useEffect } from "react";
import { useCaseFiles } from "../useCaseFiles";
import { useClients } from "../useClients";
import { useClvs } from "../useClv";
import { useComplaints } from "../useComplaint";
import { useFleets } from "../useFleet";
import { useItProducts } from "../useItProduct";
import { useProjectOptions } from "../useProjects";
import { useApprovedDopTravelOrders } from "../useTravelOrders";

export const useCLVData = () => {
  const [data, setData] = useState([]);
  const { data: clvsData, isLoading } = useClvs();

  useEffect(() => {
    setData([]);
    if (clvsData?.clvs?.length) {
      const dataToSet = clvsData?.clvs?.map((b) => {
        return {
          ...b,
          name: {
            name: b?.first_name + " " + b?.last_name,
            profession: b?.profession,
          },
          contacts: {
            phoneNumber: b?.phoneNumber ? b?.phoneNumber : "N/A",
            email: b?.email,
          },
          idNumber: {
            idNumber: b?.fida_id,
            date: b?.createdAt,
          },
          address: {
            address: b?.address,
            city: b?.city,
          },
        };
      });
      // console.log('it data', dataToSet)
      setData(dataToSet);
    }
  }, [clvsData]);

  return { data, isLoading, originalData: clvsData?.clvs };
};

export const useITComplaintsData = () => {
  const { data: itComplaintsData, isLoading } = useComplaints();

  const [data, setData] = useState([]);
  useEffect(() => {
    setData([]);
    if (itComplaintsData?.complaints?.length) {
      const dataToSet = itComplaintsData?.complaints?.map((b) => {
        return {
          ...b,
          name: {
            id: b?.id,
            name: b?.name,
          },
          date: {
            date: b?.createdAt,
            time: b?.createdAt,
          },
          subject: {
            subject: b?.subject,
            body: b?.body,
          },
          status: {
            status: b?.status,
            date_recieved: b?.dueDate,
          },
        };
      });
      // console.log('it data', dataToSet)
      setData(dataToSet);
    }
  }, [itComplaintsData]);

  return { data, isLoading, originalData: itComplaintsData?.complaints };
};

export const useCasesData = () => {
  const { data: clvData, isLoading } = useCaseFiles();
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([]);
    if (clvData?.cases?.length) {
      const dataToSet = clvData?.cases?.map((b) => {
        return {
          ...b,
          nature: b?.nature ? b?.nature : "N/A",
          next_visit: b?.next_visit ? b?.next_visit : "N/A",
          legal_officer: b?.legal_officer ? b?.legal_officer : "N/A",
          referred_to: b?.referred_to?.full_name
            ? b?.referred_to?.full_name
            : "N/A",
          reason_for_referral: b?.reason_for_referral
            ? b?.reason_for_referral
            : "N/A",
          follow_up_feedback: b?.follow_up_feedback
            ? b?.follow_up_feedback
            : "N/A",
          respondentPhone: b?.respondentPhone ? b?.respondentPhone : "N/A",
          complainantDisability: b?.complainant?.disability
            ? b?.complainant?.disability
            : "N/A",
          phoneNumber: b?.complainant?.phoneNumber
            ? b?.complainant?.phoneNumber
            : "N/A",
          respondentName: b?.respondentName ? b?.respondentName : "N/A",
          fida: b?.fida ? b?.fida : "N/A",
        };
      });
      setData(dataToSet);
    }
  }, [clvData]);
  return { data, isLoading, originalData: clvData?.cases };
};

export const useClientsData = () => {
  const { data: clientsData, isLoading } = useClients();
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([]);
    if (clientsData?.clients?.length) {
      const dataToSet = clientsData?.clients?.map((b) => {
        return {
          ...b,
          name: {
            name: b?.name,
            occupation: b?.occupation,
          },
          contacts: {
            phoneNumber: b?.phoneNumber,
            email: b?.email,
          },
          address: {
            address: b?.address ? b?.address : "N/A",
            city: b?.village,
          },
        };
      });
      setData(dataToSet);
    }
  }, [clientsData]);
  return { data, isLoading, originalData: clientsData?.clients };
};

export const useItData = () => {
  const { data: itProductsData, isLoading } = useItProducts();

  const [data, setData] = useState([]);
  useEffect(() => {
    setData([]);
    if (itProductsData?.ITProducts?.length) {
      const dataToSet = itProductsData?.ITProducts?.map((b) => {
        return {
          ...b,
          name: {
            name: b?.brand,
            location: b?.delivery_location,
          },
          category: {
            category: b?.category ? b?.category : "N/A",
            class: b?.class,
          },
          amount: {
            amount: b?.amount,
            currency: b?.currency,
          },
          payment_status: {
            payment_status: b?.payment_status ? b?.payment_status : "N/A",
            purchase_date: b?.purchase_date ? b?.purchase_date : "N/A",
          },
        };
      });
      // console.log('it data', dataToSet)
      setData(dataToSet);
    }
  }, [itProductsData]);
  return { data, isLoading, originalData: itProductsData?.ITProducts };
};

export const useTravleOrdersdata = () => {
  const [approvedDopData, setApprovedDopData] = useState([]);
  const { data: approvedDopTravelOrders, isLoading } =
  useApprovedDopTravelOrders();
  const projectOptions = useProjectOptions();

  useEffect(() => {
    setApprovedDopData([]);
    if (approvedDopTravelOrders?.TravelOrders?.length) {
      const dataToSet = approvedDopTravelOrders?.TravelOrders?.map((b) => {
        return {
          ...b,
          full_name: b?.createdBy?.full_name ? b.createdBy.full_name : "N/A",
          project: projectOptions.find((project) => project.value === b.project)
            ?.label,
          stage:
            b?.approval_levels.length === 0
              ? "Dop"
              : b?.approval_levels.length === 1 &&
                b?.DOPApprovalStatus === "rejected"
              ? "Dop"
              : b?.approval_levels.length === 1 &&
                b?.DOPApprovalStatus === "approved"
              ? "Accountant"
              : b?.approval_levels.length === 2 &&
                b?.accountantApprovalStatus === "rejected"
              ? "Accountant"
              : b?.approval_levels.length === 2 &&
                b?.accountantApprovalStatus === "approved"
              ? "Fleet  Manager"
              : "Fleet  Manager",
          status:
            b?.approval_levels.length === 0
              ? b?.DOPApprovalStatus
              : b?.approval_levels.length === 1 &&
                b?.DOPApprovalStatus === "rejected"
              ? b?.DOPApprovalStatus
              : b?.approval_levels.length === 1 &&
                b?.DOPApprovalStatus === "approved"
              ? b?.accountantApprovalStatus
              : b?.approval_levels.length === 2 &&
                b?.accountantApprovalStatus === "rejected"
              ? b?.accountantApprovalStatus
              : b?.approval_levels.length === 2 &&
                b?.accountantApprovalStatus === "approved"
              ? b?.fleetManagerApprovalStatus
              : b?.approval_levels.length === 2 &&
                b?.fleetManagerApprovalStatus === "rejected"
              ? b?.fleetManagerApprovalStatus
              : b?.fleetManagerApprovalStatus,
        };
      });
      setApprovedDopData(dataToSet);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [approvedDopTravelOrders]);
  return { approvedDopData, isLoading, originalData: approvedDopTravelOrders?.TravelOrders };

};

export const useFleetData = () => {
  const {data: fleets, isLoading} =useFleets();

  const [data, setData] = useState([]);
  useEffect(() => {
    setData([]);
    if (fleets?.fleets?.length) {
      const dataToSet = fleets?.fleets?.map((b, index) => {
        return {
          ...b,
          sn:{
            sn:'000'+(index + 1)
          },
          date: {
            date: b?.createdAt
          }
        };
      });
      setData(dataToSet);
    }
  }, [fleets]);
  return { data, isLoading, originalData: fleets?.fleets };

}
