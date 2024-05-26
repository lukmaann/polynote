import Image from "next/image";
import style from "./loading.module.css";

const Loader=()=>{
    return (
        <div className="flex  text-white justify-center items-center">
            <span className={style.loader}></span>
        </div>

    );
}

export default Loader;