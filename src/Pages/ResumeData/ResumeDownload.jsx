import React from "react";
import "./ResumeDownload.css";

function ResumeDownload() {
  return (
    <>
      <div className="resumeDownload">
        <a
          className="aresumeDownload"
          href="https://drive.google.com/file/d/1X_yFbZStIKTo1oeeiJuuXQC-kEIcDnaI/view?usp=share_link"
          download
        >
          Download Resume
        </a>
      </div>
    </>
  );
}

export default ResumeDownload;
