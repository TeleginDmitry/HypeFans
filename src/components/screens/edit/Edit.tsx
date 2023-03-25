import React, { useState } from "react";
import styles from "./Edit.module.scss";
import { ReactComponent as Clear } from "@assets/images/newPost/arrow-left.svg";
import { ReactComponent as Points } from "@assets/images/profile/points.svg";
import { ReactComponent as Camera } from "@assets/images/edit/camera.svg";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../configs/api.config";
import EditForm from "./editForm/EditForm";
import UploadFile from "../../ui/UploadFile/UploadFile";
import viewMedia, { IViewMedia } from "../../../utils/viewMedia/ViewMedia";
import { useTypedSelector } from "hooks/useTypedSelector";

const Edit = () => {
  const navigate = useNavigate();

  const { isAuth, user } = useTypedSelector((state) => state.auth);

  const [inputFileBackground, setInputFileBackground] = useState<IViewMedia[]>(
    []
  );

  const [inputFileAvatar, setInputFileAvatar] = useState<IViewMedia[]>([]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.user__medias}>
          <div className={styles.background__container}>
            {(inputFileBackground?.[0]?.linkView || user?.background) && (
              <img
                className={styles.background}
                src={
                  inputFileBackground?.[0]?.linkView ||
                  API_URL + user?.background
                }
                alt="HypeFans"
              />
            )}

            <Clear
              onClick={() => {
                navigate(-1);
              }}
              className={styles.background__back}
            ></Clear>
            <Points className={styles.background__points}></Points>
            <UploadFile
              onChange={({ target }) =>
                viewMedia([...target.files], setInputFileBackground)
              }
              wrapperClass={styles.wrapper__camera}
            >
              <Camera className={styles.camera}></Camera>
            </UploadFile>
          </div>
          <div className={styles.avatar__content}>
            <div className={styles.avatar__container}>
              <img
                className={styles.avatar}
                src={inputFileAvatar?.[0]?.linkView || API_URL + user?.avatar}
                alt="HypeFans"
              />
              <UploadFile
                onChange={({ target }) =>
                  viewMedia([...target.files], setInputFileAvatar)
                }
                wrapperClass={styles.wrapper__camera}
              >
                <Camera className={styles.camera}></Camera>
              </UploadFile>
            </div>
          </div>
        </div>
        <div className={styles.form__container}>
          {isAuth && (
            <EditForm
              background={inputFileBackground?.[0]?.uploadFile}
              avatar={inputFileAvatar?.[0]?.uploadFile}
            ></EditForm>
          )}
        </div>
      </div>
    </div>
  );
};

export default Edit;
