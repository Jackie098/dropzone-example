import React from "react";
import Dropzone, { IDropzoneProps } from "react-dropzone-uploader";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";
import "react-dropzone-uploader/dist/styles.css";

import { Container, Header, Content, AreaDropzone } from "./styles";

const Home = () => {
  const getUploadParams: IDropzoneProps["getUploadParams"] = ({ meta }) => {
    return {
      url: "https://httpbin.org/post",
    };
  };

  // const handleChangeStatus: IDropzoneProps["onChangeStatus"] = (
  //   { meta, file },
  //   status
  // ) => {
  //   console.log(status, meta, file);
  // };

  const handleChangeStatus: IDropzoneProps["onChangeStatus"] = (
    { meta, file },
    status
  ) => {
    if (status === "headers_received") {
      toast.success(`Enviado ${file.name} com sucesso!`);
    } else if (status === "aborted") {
      toast.error(`${meta.name}, upload failed...`);
    }
  };

  const handleSubmit: IDropzoneProps["onSubmit"] = (files, allFiles) => {
    console.log(files.map((f) => f.meta));

    allFiles.forEach((f) => f.remove());
  };

  return (
    <Container>
      <Header>Anonimization</Header>

      <Content>
        <ToastContainer />
        <AreaDropzone>
          <Dropzone
            getUploadParams={getUploadParams}
            onChangeStatus={handleChangeStatus}
            onSubmit={handleSubmit}
            inputContent={(files, { reject }) =>
              reject ? "Apenas arquivos .csv" : "Arraste aqui"
            }
            maxFiles={3}
            multiple={false}
            styles={{
              dropzoneActive: { borderColor: "green" },
              dropzoneReject: { borderColor: "red" },
            }}
            accept="text/csv"
          ></Dropzone>
        </AreaDropzone>
      </Content>
    </Container>
  );
};

export default Home;
