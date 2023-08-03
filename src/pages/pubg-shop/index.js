import { HowPubgWorks } from "components/HowPubgWorks";
import { PubgGrid } from "components/PubgGrid";
import { PubgHeader } from "components/headers/PubgHeader";
import { OurContactsPubg } from "components/OurContactsPubg";
import { OtherGamesSection } from "components/OtherGamesSection";
import { Footer } from "components/footer";
import { useScrollTo } from "hooks/scrollTo";
import s from "./index.module.scss";

export const PubgMobile = () => {
  const { elementRef, scrollToRefElement } = useScrollTo();
  return (
    <div className={s["pubg-shop"]}>
      <PubgHeader scrollToHandler={scrollToRefElement} />
      <hr className={s["solid-divider"]} />
      <PubgGrid />
      <hr className={s["solid-divider"]} />
      <OtherGamesSection />
      <hr className={s["solid-divider"]} />
      <HowPubgWorks />
      <hr className={s["solid-divider"]} />
      <OurContactsPubg anchorRef={elementRef} />
      <Footer />
    </div>
  );
};
