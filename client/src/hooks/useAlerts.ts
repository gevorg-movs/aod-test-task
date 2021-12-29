import Swal, { SweetAlertResult } from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

export default () => {
  const showMessage = (message: string): Promise<SweetAlertResult> => {
    return Swal.fire({
      title: "Message!",
      text: message,
      icon: "success",
      confirmButtonText: "Ok",
    });
  };

  const showError = (message: string): Promise<SweetAlertResult> => {
    return Swal.fire({
      title: "Error!",
      text: message,
      icon: "error",
      confirmButtonText: "Ok",
    });
  };

  return {
    showError,
    showMessage,
  };
};