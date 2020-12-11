import { toast } from "react-toastify";

const notificationMiddleware = () => (next) => (action) => {
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
  } else if (/(.*)(add)/.test(action.type)) {
    toast.success("Added new task!", {
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

export default notificationMiddleware;
