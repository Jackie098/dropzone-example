import React from "react";
import Dropzone, {
  IDropzoneProps,
  ILayoutProps,
} from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";

import { Container, Header, Content, AreaDropzone } from "./styles";

const Home = () => {
  const getUploadParams: IDropzoneProps["getUploadParams"] = ({ meta }) => {
    return {
      url: "http://google.com",
    };
  };

  const handleChangeStatus: IDropzoneProps["onChangeStatus"] = (
    { meta, file },
    status
  ) => {
    console.log(status, meta, file);
  };

  const handleSubmit: IDropzoneProps["onSubmit"] = (files, allFiles) => {
    console.log(files.map((f) => f.meta));

    allFiles.forEach((f) => f.remove());
  };

  return (
    <Container>
      <Header>Anonimization</Header>

      <Content>
        <AreaDropzone>
          <Dropzone
            getUploadParams={getUploadParams}
            onChangeStatus={handleChangeStatus}
            onSubmit={handleSubmit}
            accept="text/csv"
          ></Dropzone>
        </AreaDropzone>
      </Content>
    </Container>
  );
};

export default Home;
