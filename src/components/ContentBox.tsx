import React, { type ReactNode } from "react";
import "../styles/ContentBox.css";

interface ContentBoxProps {
  title: string;
  children: ReactNode;
}

function ContentBox({ title, children }: ContentBoxProps) {
  return (
    <div className="contentBoxWrapper">
      <div className="contentBoxHeader">
        <h1 className="contentBoxTitle">{title}</h1>
      </div>
      <div className="contentBoxContent">{children}</div>
    </div>
  );
}

export default ContentBox;
