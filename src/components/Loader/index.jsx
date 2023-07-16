import s from "./index.module.scss";

export const Loader = () => {
  return (
    <div className={s["loader"]}>
      <div className={s["loader_inner"]}></div>
    </div>
  );
};
