import s from "./index.module.scss";

const ElixirSet = () => {
  return (
    <div className={s["elixir-set"]}>
      <div className={s["elixir-set__title"]}>
        <p className={s["elixir-set__text"]}>
          Trovo Shop - приобретайте с выгодой!
        </p>
        <p className={s["elixir-set__text"]}>
          Выберите сет Эликсиров, который вы хотели бы получить!
        </p>
      </div>
    </div>
  );
};

export default ElixirSet;
