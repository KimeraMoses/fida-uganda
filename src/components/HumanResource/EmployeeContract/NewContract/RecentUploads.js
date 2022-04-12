import React from "react";
import { MdTaskAlt } from "react-icons/md";
import { FolderIcon, PdfIcon, RetryIcon } from "../../../../assets/Icons/Icons";
import FormButton from "../../../common/UI/FormButton/FormButton";
import classes from "./NewContract.module.css";

const RecentUploadCard = props => {
  const { name, time, size, error, isFolder } = props;
  return (
    <div className={classes.recent_upload_card_wrapper}>
      <div className={classes.card_content_left}>
        <div className={classes.upload_name}>
          <div className={classes.file_name}>
            {isFolder ? <FolderIcon /> : <PdfIcon />}
            <h6>{name}</h6>
          </div>
          <div className={classes.time_uploaded}>"{time} ago</div>
        </div>
      </div>
      <div className={classes.card_content_right}>
        {error && (
          <div className={classes.retry_icon}>
            <RetryIcon />
          </div>
        )}
        <div
          className={`${classes.size_wrapper} ${error ? classes.error : ""}`}
        >
          {size}
        </div>
        <div className={classes.file_actions}>
          <svg
            width="3"
            height="14"
            viewBox="0 0 3 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="1.5" cy="12" r="1.5" fill="#242634" />
            <circle cx="1.5" cy="7" r="1.5" fill="#242634" />
            <circle cx="1.5" cy="2" r="1.5" fill="#242634" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const RecentUploads = () => {
  return (
    <div className={classes.recent_upload_wrapper}>
      <div className={classes.upload_card_wrapper}>
        <RecentUploadCard
          name="Nalubwama Contract.pdf"
          time="2m"
          size="22.4GB"
        />
        <RecentUploadCard
          name="Nalubwama Contract.pdf"
          time="6m"
          size="4.3GB"
          error={true}
        />
        <RecentUploadCard
          name="Nalubwama Contract.pdf"
          time="7hours"
          size="3.2GB"
        />
      </div>
      <div className={classes.load_all_uploads_btn}>
        <FormButton variant="outlined" rounded={true} color="gray">
          View all uploads
        </FormButton>
      </div>
      <div className={classes.last_sync_wrapper}>
        <MdTaskAlt /> Last synced: 3 mins ago
      </div>
    </div>
  );
};

export default RecentUploads;
