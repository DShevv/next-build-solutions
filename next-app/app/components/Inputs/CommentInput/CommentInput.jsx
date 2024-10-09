import { Field } from "formik";
import styles from "./CommentInput.module.css";

const CommentInput = ({ isError, ...other }) => {
  return (
    <Field
      className={`${styles.field} ${isError ? styles.error : ""}`}
      component="textarea"
      {...other}
    ></Field>
  );
};

export default CommentInput;
