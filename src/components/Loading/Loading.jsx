import style from "./Loading.module.css";

const Loading = () => {
  return (
    <div className="bg-white w-full fixed top-0 left-0 flex items-center justify-center h-screen">
      <div className={style.div}>
        <span className={style.span}></span>
        <span className={style.span}></span>
        <span className={style.span}></span>
        <span className={style.span}></span>
      </div>
    </div>
  );
};

export default Loading;
