import React, { useState } from 'react';
import NewUpload from './NewUpload';
import RecentUploads from './RecentUploads';
import classes from './NewContract.module.css';
import FormButton from '../../../common/UI/FormButton/FormButton';

const NewContract = () => {
  const [isUpload, setIsUpload] = useState(false);
  const [files, setFiles] = useState([]);

  return (
    <div className={classes.new_contracts_actions_wrapper}>
      <div className={classes.toggle_btn_wrapper}>
        <div className={classes.btn_container}>
          <FormButton
            variant={isUpload ? 'transparent' : 'colored'}
            rounded={true}
            onClick={() => setIsUpload(false)}
          >
            Recent Upload
          </FormButton>
          <FormButton
            variant={isUpload ? 'Colored' : 'transparent'}
            rounded={true}
            onClick={() => setIsUpload(true)}
          >
            New Upload
          </FormButton>
        </div>
      </div>
      {isUpload ? (
        <NewUpload files={files} setFiles={setFiles} />
      ) : (
        <RecentUploads />
      )}
    </div>
  );
};

export default NewContract;
