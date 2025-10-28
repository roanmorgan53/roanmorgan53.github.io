import React from "react";
import "../styles/PhotoBox.css";

interface PhotoBoxProps {
  img: string;
}

export default function PhotoBox({ img }: PhotoBoxProps) {
  return (
    <>
      <div className="wrapper">
        <img className="profilePic" src={img} alt="Pixel Art by Ella Satorre" />
        <p className="profileSubheader">Art by Ella Satorre</p>
      </div>
    </>
  );
}
