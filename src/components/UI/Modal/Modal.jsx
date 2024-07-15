import styles from "./Modal.module.css";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import Cart from "../../Cart/Cart";
const Modal = () => {
  return createPortal(
    <div className={styles.modal}>
      <Cart />
    </div>,
    document.body.overlays
  );
};

Modal.propTypes = {
  children: PropTypes.object,
};
export default Modal;
