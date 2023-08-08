import { TrovoHeader } from "components/headers/TrovoHeader";
import { useScrollTo } from "hooks/scrollTo";
import { UndawnGrid } from "components/UndawnGrid";
import { OtherGamesSection } from "components/OtherGamesSection";
import { HowPubgWorks } from "components/HowPubgWorks";
import { ManagersSection } from "components/ManagersSection";
import { Footer } from "components/footer";
import s from "./index.module.scss";

export const UndawnShop = () => {
  const { elementRef, scrollToRefElement } = useScrollTo();
  return (
    <div className={s["undawn-shop"]}>
      <TrovoHeader scrollToHandler={scrollToRefElement} />
      <hr className={s["solid-divider"]} />
      <UndawnGrid />
      <hr className={s["solid-divider"]} />
      <OtherGamesSection />
      <hr className={s["solid-divider"]} />
      <HowPubgWorks />
      <hr className={s["solid-divider"]} />
      <ManagersSection anchorRef={elementRef} />
      <hr className={s["solid-divider"]} />
      <Footer />
    </div>
  );
};
