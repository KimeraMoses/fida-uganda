import React, { useCallback } from 'react';
import classes from '../../PayRoll/NewNotes/NewNotes.module.css';
import { useDropzone } from 'react-dropzone';
import {
  Alert,
  AlertIcon,
  Button,
  ButtonGroup,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  useToast,
} from '@chakra-ui/react';
import { MdDeleteOutline } from 'react-icons/md';
import FormButton from '../../../common/UI/FormButton/FormButton';
import { useAddContracts } from '../../../../hooks/useContract';
import { toastError, toastSuccess } from '../../../../lib/toastDetails';

const fileSizeConverter = (SIZE_IN_BYTES) => {
  const SIZE_IN_MBS = 0.000001 * SIZE_IN_BYTES;
  return SIZE_IN_MBS?.toFixed(1);
};

const FilePreview = ({ file, handleDelete }) => {
  const initRef = React.useRef();
  const type = file.file.type.split('/');
  const fileType = type[type?.length - 1];
  return (
    <div className={classes.file_wrapper}>
      <div className={classes.file_wrapper_doc}>
        {fileType === 'pdf' ? (
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
            style={{ fill: '#000000' }}
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
        <li>{file.file.path}</li>
      </div>
      <div className={classes.file_wrapper_doc}>
        <div className={classes.file_size_wrapper}>
          {fileSizeConverter(file.file.size)} MB
        </div>
        <Popover initialFocusRef={initRef}>
          {({ onClose }) => (
            <>
              <PopoverTrigger>
                <div className={classes.delete_icons}>
                  <MdDeleteOutline />
                </div>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader color="purple.500" fontSize="3xl">
                  Confirm Delete
                </PopoverHeader>
                <PopoverBody>
                  Are you sure you wish to delete{' '}
                  <strong>{file?.file?.name}</strong>? This action is permanent
                  and can not be undone
                </PopoverBody>
                <PopoverFooter
                  border="0"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  pb={4}
                >
                  <ButtonGroup size="sm">
                    <Button colorScheme="green" onClick={onClose} ref={initRef}>
                      Cancel
                    </Button>
                    <Button
                      colorScheme="red"
                      onClick={() => {
                        handleDelete(file?.id);
                        onClose();
                      }}
                    >
                      Delete
                    </Button>
                  </ButtonGroup>
                </PopoverFooter>
              </PopoverContent>
            </>
          )}
        </Popover>
      </div>
    </div>
  );
};

const NewUpload = ({ files, setFiles }) => {
  const { mutate, isLoading, isSuccess, isError } = useAddContracts();
  const toast = useToast();
  const onDrop = useCallback(
    (acceptedFiles) => {
      acceptedFiles.map((file) => {
        setFiles((prevState) => [...prevState, { id: Math.random(), file }]);
        return file;
      });
    },
    [setFiles]
  );

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      accept: {
        'application/pdf': ['.pdf'],
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
          ['.doc', '.docx'],
      },
    });

  const handleDelete = (id) => {
    const newFiles = files;
    const filteredFiles = newFiles.filter((file) => file.id !== id);
    setFiles(filteredFiles);
  };

  const handleSubmit = async () => {
    console.log(files);
    mutate(files);
  };

  React.useEffect(() => {
    if (isSuccess) {
      toast(toastSuccess('Report added successfully'));
      setFiles([])
    }
    if (isError) {
      toast(toastError('Failed to add contract'));
    }
  }, [isSuccess, isError, toast, setFiles]);

  return (
    <div className={classes.new_note_upload_wrapper}>
      {fileRejections?.length > 0 && (
        <Alert status="error">
          <AlertIcon />
          File type not allowed, pdf and word documents accepted only
        </Alert>
      )}
      <div
        className={`${classes.upload_section_wrapper} ${
          files.length > 0 ? classes.hasFiles : ''
        }`}
      >
        <div
          {...getRootProps({
            className: `dropzone ${classes.upload_area} ${
              isDragActive ? classes.active : ''
            } ${files.length > 0 ? classes.hasFiles : ''}`,
          })}
        >
          <label id="label-file-upload" htmlFor="input-file-upload">
            {files.length > 0 ? (
              <h6>
                Click to browse more or <br /> drag and drop more files here
              </h6>
            ) : (
              <h6>
                Click to browse or <br /> drag and drop your files here
              </h6>
            )}
          </label>
        </div>
        <input
          type="file"
          id="input-file-upload"
          multiple={true}
          hidden
          className="input-zone"
          {...getInputProps()}
        />

        <div className={classes.file_upload_preview_wrapper}>
          <ul className={classes.gpa__related_doc_recent_list_wrapper}>
            {files.map((file) => (
              <FilePreview file={file} handleDelete={handleDelete} />
            ))}
            {files?.length > 0 && (
              <div className={classes.form_action_wrapper}>
                <FormButton
                  type="button"
                  variant="colored"
                  rounded={true}
                  onClick={handleSubmit}
                  disabled={isLoading ? true : false}
                >
                  Upload
                </FormButton>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewUpload;
