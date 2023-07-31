import { HowPubgWorks } from "components/HowPubgWorks";
import { PubgGrid } from "components/PubgGrid";
import { PubgHeader } from "components/headers/PubgHeader";
import { OurContactsPubg } from "components/OurContactsPubg";
import { Footer } from "components/footer";
import { useScrollTo } from "hooks/scrollTo";

export const PubgMobile = () => {
  const { elementRef, scrollToRefElement } = useScrollTo();
  return (
    <>
      <PubgHeader scrollToHandler={scrollToRefElement} />
      <PubgGrid />
      <HowPubgWorks />
      <OurContactsPubg anchorRef={elementRef} />
      <Footer />
    </>
  );
};
