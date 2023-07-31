import { TrovoHeader } from "components/headers/TrovoHeader";
import { ElixirGrid } from "components/ElixirGrid";
import { ManagersSection } from "components/ManagersSection";
import { HowTrovoWorks } from "components/HowTrovoWorks";
import { Footer } from "components/footer";
import { useScrollTo } from "hooks/scrollTo";

export const TrovoShop = () => {
  const { elementRef, scrollToRefElement } = useScrollTo();
  return (
    <>
      <TrovoHeader scrollToHandler={scrollToRefElement} />
      <ElixirGrid />
      <HowTrovoWorks />
      <ManagersSection anchorRef={elementRef} />
      <Footer />
    </>
  );
};
