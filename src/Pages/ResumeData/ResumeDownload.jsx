import React from "react";
import "./ResumeDownload.css";
function ResumeDownload() {
  return (
    <>
      <div className="resumeDownload">
        <a className="aresumeDownload" href="resume/sam-re.pdf" download>
          Download Resume
        </a>
      </div>
    </>
  );
}

export default ResumeDownload;
