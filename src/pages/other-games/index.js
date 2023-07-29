import { PubgHeader } from "components/headers/PubgHeader";
import { FillBalance } from "components/FillBalance";
import { OurContactsPubg } from "components/OurContactsPubg";
import { Footer } from "components/footer";
import { useScrollTo } from "hooks/scrollTo";

export const OtherGames = () => {
  const { elementRef, scrollToRefElement } = useScrollTo();

  return (
    <>
      <PubgHeader scrollToHandler={scrollToRefElement} />
      <FillBalance />
      <OurContactsPubg anchorRef={elementRef} />
      <Footer />
    </>
  );
};
