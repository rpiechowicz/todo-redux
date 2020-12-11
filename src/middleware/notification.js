import { toast } from "react-toastify";

const notificationMiddlewate = () => (next) => (action) => {
  if (/(.*)(error)/.test(action.type) && action.payload.error) {
    toast.error("Something went wrong!", {
      position: "top-center",
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  next(action);
};

export default notificationMiddlewate;
