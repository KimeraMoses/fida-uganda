import React from "react";
import SectionHeader from "../../common/SectionHeader";
import classes from "./FidaDatabases.module.css";
import Img from "../../../assets/images/folder.png";
import { useNavigate } from "react-router-dom";
import { useDatabases } from "../../../hooks/useDatabase";

const FolderCard = ({ title, action }) => {
  return (
    <div className={classes.folder_card_wrapper}>
      <div
        className={classes.folder_card_wrapper_inner}
        onClick={() => action(title.replace(/ /g, "-"))}
      >
        <img src={Img} alt={title} />
        <h4>{title}</h4>
      </div>
    </div>
  );
};

const FidaDatabases = () => {
  const navigate = useNavigate();
  const { data } = useDatabases();
  const handleClick = (name) => {
    navigate(`/fida-databases/${name}`);
  };
  return (
    <>
      <SectionHeader title="FIDA Database" />
      <div className={classes.fida_database_wrapper}>
        {data?.databases.map((item) => (
          <FolderCard
            key={item.databaseName}
            title={item.databaseName}
            action={handleClick}
          />
        ))}
      </div>
    </>
  );
};

export default FidaDatabases;
