import { useState } from "react";
import ImageUploading from "react-images-uploading";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useIntl } from "react-intl";

import imgSources from "../../utils/imgSources";
import styles from "./DropZone.module.css";

const DropZone = () => {
  const [image, setImage] = useState([{}]);
  const [isModal, setIsModal] = useState(false);
  const [isErrorMessage, setIsErrorMessage] = useState(false);
  const intl = useIntl();

  const onChange = (imageList) => {
    setIsErrorMessage(false);
    setImage(imageList);
  };

  const handleErrors = () => {
    setIsErrorMessage(true);
  };

  const removeHandlder = () => {
    setImage([{}]);
  };

  const backgroundCss = {
    background: `url(${imgSources.DOWNLOAD}) no-repeat center center`,
    backgroundSize: "",
  };

  return (
    <>
      <ImageUploading
        value={image}
        onChange={onChange}
        dataURLKey="data_url"
        onError={handleErrors}
        maxFileSize="10485760"
      >
        {({ onImageUpload, dragProps }) => (
          // write your building UI
          <div>
            <div
              className={styles["drop-container"]}
              onClick={onImageUpload}
              {...dragProps}
            >
              {image[0].data_url ? (
                <img src={image[0].data_url} alt="collection" width="50" />
              ) : (
                <div className={styles["drop-message"]}>
                  <div
                    className={styles["upload-icon"]}
                    style={backgroundCss}
                  ></div>
                  {intl.formatMessage({ id: "drop-zone.box-message" })}
                </div>
              )}
            </div>
            <div>
              {isErrorMessage && (
                <p>{intl.formatMessage({ id: "drop-zone.error-message" })}</p>
              )}
            </div>
            {image[0].data_url && (
              <div className="d-flex justify-content-between">
                <div
                  className="link-primary text-decoration-underline"
                  onClick={() => {
                    setIsModal(true);
                  }}
                  role="button"
                >
                  {intl.formatMessage({ id: "drop-zone.check-image" })}
                </div>
                <div
                  className="delete"
                  title={intl.formatMessage({
                    id: "collection-tool.delete",
                  })}
                  data-toggle="tooltip"
                  role="button"
                  onClick={removeHandlder}
                >
                  <i className="material-icons text-danger">&#xE872;</i>
                </div>
              </div>
            )}
            {isModal && (
              <Lightbox
                mainSrc={image[0].data_url}
                onCloseRequest={() => setIsModal(false)}
              />
            )}
          </div>
        )}
      </ImageUploading>
    </>
  );
};

export default DropZone;
