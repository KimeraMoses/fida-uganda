import { useEffect } from "react";
import { useState } from "react";
import "./CustomFileInput.styles.scss";

export const FileInput = (props) => {
  const [image, setImage] = useState("");
  const [hasBg, setHasBg] = useState(`${props?.background}`);
  const [hasImage, setHasImage] = useState(props?.background ? true : false);

  useEffect(() => {
    if (props?.background && !hasImage) {
      setHasBg(props?.background);
      setHasImage(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  const handleChange = async (e) => {
    const [file] = e.target.files;
    const assetImage = await convertbase64Logo(file);
    setHasImage(true);
    if (props.setFieldValue) {
      props.setFieldValue(props?.name, file);
    }
    setHasBg(assetImage);
    setImage(URL.createObjectURL(file));
  };

  const convertbase64Logo = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleCancel = () => {
    setImage("");
    setHasBg("");
    if (props.change) {
      props.change(props?.name, "");
    }
    setHasImage(false);
  };

  return (
    <div className="file-input">
      <div className="file-input__header">
        <div className="file-input__header-label">{props.label}</div>
      </div>
      <div style={{ display: "flex" }}>
        <label
          className="file-input__label"
          htmlFor="upload-photo"
          style={{
            background: `url(${
              hasBg && hasImage ? hasBg : image ? image : "/img/camera.png"
            }) no-repeat center`,
            backgroundSize: image ? "contain" : "auto",
          }}
        ></label>
        {hasImage && (
          <div className="file-input__close" onClick={handleCancel}>
            <img src="/img/close.png" alt="" />
          </div>
        )}
      </div>
      <input
        id="upload-photo"
        className="file-input__handle"
        type="file"
        onChange={handleChange}
        accept={props.accept}
      />
    </div>
  );
};
