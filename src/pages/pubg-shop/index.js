import { HowGameWorks } from "components/HowGameWorks";
import { PubgHeader } from "components/headers/PubgHeader";
import { OtherGamesSection } from "components/OtherGamesSection";
import { ManagersSection } from "components/ManagersSection";
import { Footer } from "components/footer";
import { useScrollTo } from "hooks/scrollTo";
import s from "./index.module.scss";

import { PUBG } from "utils/constants";
import { RedeemCodeGrid } from "components/RedeemCodeGrid";

export const PubgMobile = () => {
  const { elementRef, scrollToRefElement } = useScrollTo();
  return (
    <div className={s["pubg-shop"]}>
      <PubgHeader scrollToHandler={scrollToRefElement} />
      <hr className={s["solid-divider"]} />
      <RedeemCodeGrid gridInfo={PUBG.gridInfo} />
      <hr className={s["solid-divider"]} />
      <OtherGamesSection />
      <hr className={s["solid-divider"]} />
      <HowGameWorks textContent={PUBG.howGameWorks} />
      <hr className={s["solid-divider"]} />
      <ManagersSection anchorRef={elementRef} />
      <Footer />
    </div>
  );
};
