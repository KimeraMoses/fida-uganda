import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StatCard from "../../common/StatCard";
import { getClientsNumber } from "../../../store/reducers/clients";

function Client() {
  const dispatch = useDispatch();
  const { my_clients } = useSelector((state) => state.clients);

  useEffect(() => {
    dispatch(getClientsNumber());
  }, [dispatch]);

  return (
    <>
      <StatCard title="Clients" value={my_clients} />
    </>
  );
}

export default Client;
