import type { ReactNode } from "react";
import "../styles/BiographyBox.css";

interface BiographyBoxProps {
  children: ReactNode;
}

function BiographyBox({ children }: BiographyBoxProps) {
  return (
    <div className="bioFlex">
      <div className="bioWrapper">
        <h1 className="name">Roan Morgan</h1>
        <p className="location">San Luis Obispo, California, United States</p>
        {children}
      </div>
    </div>
  );
}

export default BiographyBox;
