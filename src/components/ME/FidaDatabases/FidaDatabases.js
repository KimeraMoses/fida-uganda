import React from "react";
import SectionHeader from "../../common/SectionHeader";
import classes from "./FidaDatabases.module.css";
import Img from "../../../assets/images/folder.png";
import { useNavigate } from "react-router-dom";

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
  const handleClick = (name) => {
    navigate(`/fida-databases/${name}`);
  };
  return (
    <>
      <SectionHeader title="FIDA Database" />
      <div className={classes.fida_database_wrapper}>
        <FolderCard action={handleClick} title="Employee Database" />
        <FolderCard action={handleClick} title="clv database" />
        <FolderCard action={handleClick} title="client database" />
        <FolderCard action={handleClick} title="reports" />
        <FolderCard action={handleClick} title="kimera Moxhus" />
        <FolderCard action={handleClick} title="moxtech developers" />
      </div>
    </>
  );
};

export default FidaDatabases;
