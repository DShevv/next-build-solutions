import Link from "next/link";
import styles from "./MoreLink.module.css";

const MoreLink = ({ href, children, ...other }) => {
  return (
    <Link href={href} {...other} className={styles.link}>
      {children}
      <svg
        className={styles.arrow}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 17L17 7"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7 7H17V17"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Link>
  );
};

export default MoreLink;
