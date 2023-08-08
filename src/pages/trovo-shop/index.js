import { TrovoHeader } from "components/headers/TrovoHeader";
import { ElixirGrid } from "components/ElixirGrid";
import { ManagersSection } from "components/ManagersSection";
import { HowTrovoWorks } from "components/HowTrovoWorks";
import { Footer } from "components/footer";
import { useScrollTo } from "hooks/scrollTo";
import { OtherGamesSection } from "components/OtherGamesSection";
import s from "./index.module.scss";

export const TrovoShop = () => {
  const { elementRef, scrollToRefElement } = useScrollTo();
  return (
    <div className={s["trovo-shop"]}>
      <TrovoHeader scrollToHandler={scrollToRefElement} />
      <hr className={s["solid-divider"]} />
      <ElixirGrid />
      <hr className={s["solid-divider"]} />
      <OtherGamesSection />
      <hr className={s["solid-divider"]} />
      <HowTrovoWorks />
      <hr className={s["solid-divider"]} />
      <ManagersSection anchorRef={elementRef} />
      <Footer />
    </div>
  );
};
