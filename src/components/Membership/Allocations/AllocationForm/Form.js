import { IconButton, Input, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import SelectInput from "./SelectInput";

import { MdClose } from "react-icons/md";

import classes from "./Form.module.css";
import Button from "../../UI/Button/Button";

const Form = (props) => {
  const { onClose, title } = props;
  const [values, setValues] = useState({
    recipients: [],
    subject: "",
    body: "",
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  console.log(onClose);
  return (
    <div
      className={classes.fida__email_form_wrapper}
      style={{ position: "fixed", bottom: 16, right: 16, zIndex: 32 }}
    >
      <div className={classes.fida__form_header} onClick={onClose}>
        New {title}
        <IconButton
          aria-label="Close Modal"
          icon={<MdClose />}
          size="sm"
          variant="outline"
        />
      </div>
      <div className={classes.fida__form_wrapper}>
        <form>
          <div className={classes.fida__email_user_subject_wrapper}>
            <div className={classes.fida__email_users}>
              {/* To: */}
              <SelectInput />
            </div>
            <div className={classes.fida__email_subject}>
              <Input placeholder="Subject" />
            </div>
          </div>
          <div className={classes.fida__body_wrapper}>
            <Textarea
              className={classes.email_body_field}
              value={values.body}
              placeholder="Type a message here"
              name="body"
              onChange={onChangeHandler}
              variant="unstyled"
            />
          </div>

          <div className={classes.fida__email_footer}>
            <div className={classes.fida_email_send_actions}>
              <Button >Send</Button>
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.39661 15.8749L7.68715 14.1655L10.6773 11.1753C10.8456 11.007 10.9791 10.8072 11.0702 10.5873C11.1613 10.3674 11.2082 10.1317 11.2082 9.89369C11.2082 9.65567 11.1613 9.41998 11.0702 9.20008C10.9791 8.98018 10.8456 8.78037 10.6773 8.61206C10.509 8.44375 10.3092 8.31025 10.0893 8.21916C9.86939 8.12807 9.6337 8.08119 9.39568 8.08119C9.15766 8.08119 8.92197 8.12807 8.70207 8.21916C8.48217 8.31025 8.28236 8.44376 8.11405 8.61206L3.84226 12.8839C3.04909 13.677 2.6035 14.7528 2.6035 15.8745C2.6035 16.9962 3.04909 18.0719 3.84226 18.8651C4.63542 19.6583 5.71118 20.1039 6.83289 20.1039C7.95459 20.1039 9.03035 19.6583 9.82351 18.8651L18.3671 10.3215C18.76 9.92889 19.0716 9.46271 19.2843 8.94961C19.497 8.4365 19.6065 7.88652 19.6066 7.33109C19.6067 6.77565 19.4973 6.22564 19.2848 5.71247C19.0723 5.1993 18.7608 4.73302 18.368 4.34027L17.9402 3.91244C17.2604 3.23262 16.3383 2.8507 15.3769 2.8507C14.4155 2.8507 13.4935 3.23262 12.8137 3.91244L11.1051 2.20391C12.2381 1.07096 13.7747 0.434472 15.3769 0.434471C16.9792 0.434471 18.5158 1.07096 19.6487 2.20391L20.0756 2.6308C21.322 3.87722 22.0223 5.56773 22.0223 7.33043C22.0223 9.09313 21.322 10.7836 20.0756 12.0301L11.5311 20.5746C10.9171 21.206 10.1838 21.709 9.37375 22.0545C8.56369 22.4 7.69303 22.5811 6.81237 22.5872C5.93171 22.5933 5.05862 22.4244 4.24384 22.0901C3.42905 21.7559 2.68881 21.2631 2.06614 20.6403C1.44347 20.0175 0.950782 19.2772 0.616709 18.4623C0.282635 17.6474 0.113839 16.7743 0.120127 15.8937C0.126417 15.013 0.307665 14.1424 0.653341 13.3324C0.999017 12.5224 1.50222 11.7892 2.13373 11.1753L6.40552 6.90353C6.79825 6.5108 7.2645 6.19926 7.77763 5.98672C8.29076 5.77417 8.84074 5.66477 9.39615 5.66477C9.95156 5.66477 10.5015 5.77417 11.0147 5.98671C11.5278 6.19926 11.994 6.5108 12.3868 6.90353C12.7795 7.29626 13.091 7.76251 13.3036 8.27564C13.5161 8.78877 13.6255 9.33875 13.6255 9.89416C13.6255 10.4496 13.5161 10.9995 13.3036 11.5127C13.091 12.0258 12.7795 12.4921 12.3868 12.8848L9.39661 15.8749Z"
                />
              </svg>
            </div>
            <div className={classes.fida__email_delete_icon}>
              <svg
                width="21"
                height="24"
                viewBox="0 0 21 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.125 23.25H4.875C3.63236 23.25 2.625 22.2426 2.625 21V6.375H0.375V4.125H4.875V3C4.875 1.75736 5.88236 0.75 7.125 0.75H13.875C15.1176 0.75 16.125 1.75736 16.125 3V4.125H20.625V6.375H18.375V21C18.375 22.2426 17.3676 23.25 16.125 23.25ZM4.875 6.375V21H16.125V6.375H4.875ZM7.125 3V4.125H13.875V3H7.125ZM13.875 18.75H11.625V8.625H13.875V18.75ZM9.375 18.75H7.125V8.625H9.375V18.75Z"
                  
                />
              </svg>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
