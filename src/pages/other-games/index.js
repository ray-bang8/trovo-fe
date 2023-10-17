import { FillBalance } from "components/FillBalance";
import { OurContactsPubg } from "components/OurContactsPubg";
import { Footer } from "components/footer";
import { useScrollTo } from "hooks/scrollTo";
import { TrovoHeader } from "components/headers/TrovoHeader";

export const OtherGames = () => {
  const { elementRef, scrollToRefElement } = useScrollTo();

  return (
    <>
      <TrovoHeader scrollToHandler={scrollToRefElement} />
      <FillBalance />
      <OurContactsPubg anchorRef={elementRef} />
      <Footer />
    </>
  );
};
