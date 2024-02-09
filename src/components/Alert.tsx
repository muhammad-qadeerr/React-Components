// Demostrating Child Component creation and passing.

import { ReactNode } from "react";

// -> Shortcut (rafce - for react arrow funtion components) can be used other than writing a function and importing it, using ES7+ extention in VSCODE.

interface Props {
  // item: string;
  //   children: string;   only used for passing text data;

  children: ReactNode; // use for passing an html component.
  onClose: () => void;
}
const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
