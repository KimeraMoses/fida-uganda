import {
  List,
  ListIcon,
  ListItem,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import React from "react";
import {
  MdDeleteOutline,
  MdDownload,
  MdShare,
  MdTaskAlt,
} from "react-icons/md";
import { RetryIcon } from "../../../../assets/Icons/Icons";
import { useContracts } from "../../../../hooks/useContract";
import FormButton from "../../../common/UI/FormButton/FormButton";
import Loader from "../../../common/UI/Loader/Loader";
import classes from "./NewContract.module.css";

export const RecentUploadCard = (props) => {
  const { name, time, size, error, fileType, isTable } = props;
  return (
    <div
      className={`${classes.recent_upload_card_wrapper} ${
        isTable ? classes.table : ""
      }`}
    >
      <div className={classes.card_content_left}>
        <div className={classes.upload_name}>
          <div className={classes.file_name}>
            {fileType === "pdf" ? (
              <svg
                width="22"
                height="26"
                viewBox="0 0 64 81"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M56 80.9999H8C3.58172 80.9999 0 77.4182 0 72.9999V8.99995C0 4.58167 3.58172 0.999946 8 0.999946H36C36.0359 0.995298 36.0722 0.995298 36.108 0.999946H36.132C36.1698 1.01178 36.2086 1.01982 36.248 1.02395C36.6007 1.04656 36.949 1.11514 37.284 1.22795H37.344H37.404H37.452C37.5258 1.27965 37.5954 1.33717 37.66 1.39995C38.0958 1.59364 38.4929 1.86468 38.832 2.19995L62.832 26.1999C63.1673 26.5391 63.4383 26.9362 63.632 27.3719C63.668 27.4599 63.696 27.5439 63.724 27.6359L63.764 27.7479C63.8757 28.0815 63.9416 28.4287 63.96 28.7799C63.9635 28.8198 63.9729 28.8589 63.988 28.8959V28.9199C63.9946 28.9462 63.9986 28.973 64 28.9999V72.9999C64 75.1217 63.1571 77.1565 61.6569 78.6568C60.1566 80.1571 58.1217 80.9999 56 80.9999ZM41.696 48.9999V68.9999H45.456V60.8399H51.296V57.4879H45.456V52.3639H52V48.9999H41.696ZM26.896 48.9999V68.9999H31.72C33.7437 69.0994 35.7033 68.2756 37.048 66.7599C38.4276 64.9996 39.1187 62.7969 38.992 60.5639V57.3239C39.0847 55.1145 38.3742 52.9462 36.992 51.2199C35.6905 49.7385 33.7904 48.9229 31.82 48.9999H26.896ZM12 48.9999V68.9999H15.76V61.9639H18.264C19.9361 62.0565 21.5693 61.4375 22.76 60.2599C23.8963 58.9896 24.4856 57.3222 24.4 55.6199C24.4742 53.8769 23.8854 52.1703 22.752 50.8439C21.6309 49.6007 20.0124 48.9242 18.34 48.9999H12ZM36 8.99995V28.9999H56L36 8.99995ZM31.784 65.6479H30.656V52.3639H32.024C32.9954 52.3067 33.9294 52.7466 34.504 53.5319C35.0904 54.7451 35.3418 56.093 35.232 57.4359V60.9119C35.3198 62.1909 35.0424 63.4686 34.432 64.5959C33.7764 65.3612 32.786 65.7547 31.784 65.6479ZM18.34 58.5999H15.756V52.3639H18.376C19.0301 52.371 19.6345 52.714 19.976 53.2719C20.4089 53.9862 20.6179 54.8138 20.576 55.6479C20.6262 56.4259 20.4196 57.1988 19.988 57.8479C19.5902 58.3473 18.9779 58.6267 18.34 58.5999Z"
                  fill="#562B85"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="28"
                height="28"
                viewBox="0 0 48 48"
                style={{ fill: "#000000" }}
              >
                <path
                  fill="#ddbaff"
                  d="M42.256,6H15.744C14.781,6,14,6.781,14,7.744v7.259h30V7.744C44,6.781,43.219,6,42.256,6z"
                ></path>
                <path fill="#a64aff" d="M14,15.003h30v9.002H14V15.003z"></path>
                <path fill="#6c19ff" d="M14,24.005h30v9.05H14V24.005z"></path>
                <path
                  fill="#2100c4"
                  d="M14,33v7.256C14,41.219,14.781,42,15.743,42h26.513C43.219,42,44,41.219,44,40.256v-7.202L14,33z"
                ></path>
                <path
                  fill="#a64aff"
                  d="M6.513,15H14v18H6.513C5.678,33,5,32.322,5,31.487V16.513C5,15.678,5.678,15,6.513,15z"
                ></path>
                <path
                  fill="#2100c4"
                  d="M14,24v9h7.487C22.322,33,23,32.322,23,31.487V24H14z"
                ></path>
                <path
                  fill="#6c19ff"
                  d="M14,24v-9h7.487C22.322,15,23,15.678,23,16.513V24H14z"
                ></path>
                <path
                  fill="#fff"
                  d="M18.403,19l-1.546,7.264L15.144,19h-2.187l-1.767,7.489L9.597,19H7.641l2.344,10h2.352l1.713-7.689 L15.764,29h2.251l2.344-10H18.403z"
                ></path>
              </svg>
            )}
            <h6>{name}</h6>
          </div>
          <div className={classes.time_uploaded}>{time} ago</div>
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
        <Popover>
          <PopoverTrigger>
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
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>File Actions</PopoverHeader>
            <PopoverBody>
              <List spacing={3}>
                <ListItem cursor="pointer">
                  <ListIcon as={MdDownload} color="green.500" />
                  Download
                </ListItem>
                <ListItem cursor="pointer">
                  <ListIcon as={MdDeleteOutline} color="green.500" />
                  Delete Contract
                </ListItem>
                <ListItem cursor="pointer">
                  <ListIcon as={MdShare} color="green.500" />
                  Share Contract
                </ListItem>
              </List>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export const computeTimeDuration = (timeInSeconds) => {
  if (timeInSeconds > 86400) {
    return { time: Math.ceil(timeInSeconds / 86400), duration: "day(s)" };
  }
  if (timeInSeconds > 3600) {
    return { time: Math.ceil(timeInSeconds / 3600), duration: "hour(s)" };
  }
  if (timeInSeconds > 60) {
    return { time: Math.ceil(timeInSeconds / 60), duration: "minute(s)" };
  }
  return { time: timeInSeconds, duration: "second(s)" };
};

const RecentUploads = () => {
  const { data, isLoading } = useContracts();
  const [showAll, setShowAll] = React.useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const memoizedData = React.useMemo(() => {
    if (showAll) {
      return data?.contracts || [];
    }
    return data?.contracts.slice(0, 3) || [];
  }, [showAll, data?.contracts]);

  return (
    <div className={classes.recent_upload_wrapper}>
      <div className={classes.upload_card_wrapper}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {memoizedData.map((contract) => {
              const size = `${+contract.size / 1000} MB`;
              const filenameArray = contract.filename.split(".");
              const fileType = filenameArray[filenameArray.length - 1];
              const diff = Math.abs(new Date() - new Date(contract.createdAt));
              const timeInSeconds = Math.ceil(diff / 1000);

              const { time, duration } = computeTimeDuration(timeInSeconds);

              return (
                <RecentUploadCard
                  key={contract.id}
                  name={contract.filename}
                  time={`${time} ${duration}`}
                  size={size}
                  fileType={fileType}
                />
              );
            })}
          </>
        )}
      </div>
      <div className={classes.load_all_uploads_btn}>
        <FormButton
          variant="outlined"
          rounded={true}
          color="gray"
          onClick={toggleShowAll}
        >
          {showAll ? "View less" : "View all uploads"}
        </FormButton>
      </div>
      <div className={classes.last_sync_wrapper}>
        <MdTaskAlt /> Last synced: 3 mins ago
      </div>
    </div>
  );
};

export default RecentUploads;
