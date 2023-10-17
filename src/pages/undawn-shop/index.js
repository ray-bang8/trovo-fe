import { TrovoHeader } from "components/headers/TrovoHeader";
import { useScrollTo } from "hooks/scrollTo";
import { OtherGamesSection } from "components/OtherGamesSection";
import { HowGameWorks } from "components/HowGameWorks";
import { ManagersSection } from "components/ManagersSection";
import { Footer } from "components/footer";
import s from "./index.module.scss";

import { UNDAWN } from "utils/constants";
import { RedeemCodeGrid } from "components/RedeemCodeGrid";

export const UndawnShop = () => {
  const { elementRef, scrollToRefElement } = useScrollTo();
  return (
    <div className={s["undawn-shop"]}>
      <TrovoHeader scrollToHandler={scrollToRefElement} />
      <hr className={s["solid-divider"]} />
      <RedeemCodeGrid gridInfo={UNDAWN.gridInfo}  />
      <hr className={s["solid-divider"]} />
      <OtherGamesSection />
      <hr className={s["solid-divider"]} />
      <HowGameWorks textContent={UNDAWN.howGameWorks}/>
      <hr className={s["solid-divider"]} />
      <ManagersSection anchorRef={elementRef} />
      <hr className={s["solid-divider"]} />
      <Footer />
    </div>
  );
};
