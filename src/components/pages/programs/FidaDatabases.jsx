import { useDispatch, useSelector } from "react-redux";
import { Box, SimpleGrid } from "@chakra-ui/react";
import SectionHeader from "../../common/SectionHeader";
import StatCard from "../../common/StatCard";
import { useEffect } from "react";
import { getAllDatabases } from "../../../store/reducers/databases";

function FidaDatabases() {
  const dispatch = useDispatch();
  const { databases } = useSelector((state) => state.databases);

  useEffect(() => {
    dispatch(getAllDatabases());
  }, [dispatch]);

  return (
    <Box>
      <SectionHeader title="FIDA Databases" />
      <SimpleGrid columns={3} spacing={4} mt="2rem">
        {databases.length > 0
          ? databases.map((database, idx) => (
              <StatCard
                key={idx}
                title={database.databaseName.toUpperCase()}
                value={database.num_of_records}
              />
            ))
          : null}
      </SimpleGrid>
    </Box>
  );
}

export default FidaDatabases;
