import React, { useState } from "react";
import ReactDOM from "react-dom";
import Avatar from "react-avatar-edit";
import { Button } from "@mui/joy";
const TestPage = () => {
  const [imageFile, setImageFile] = useState(null);
  return (
    <div>
      <Avatar
        // width={300}
        // height={300}
        onCrop={(preview) => {
          console.log(preview);
          setImageFile(preview);
        }}
        // onClose={this.onClose}
        // onBeforeFileLoad={this.onBeforeFileLoad}
        // src={imageFile}
        onFileLoad={() => {
          console.log("onFileLoad");
        }}
      />
      <Button
        onClick={() => {
          console.log(imageFile);
        }}
      >
        Schimba imaginea
      </Button>
    </div>
  );
};

export default TestPage;
