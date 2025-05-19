// import style from "./Loader.module.css";

// export default function Loader = ()=> {
//   return (
//     <div className={style.backdrop}>{/* spinner */}</div>;
//   )
// }
import { ClipLoader } from "react-spinners";
import style from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={style.backdrop}>
      <ClipLoader color="#ffffff" size={60} />
    </div>
  );
};

export default Loader;
