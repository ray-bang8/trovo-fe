import TrovoHeader from "components/headers/TrovoHeader";
import ElixirGrid from "components/ElixirGrid";
import { ManagersSection } from "components/ManagersSection";
import HowTrovoWorks from "components/HowTrovoWorks";
import { Footer } from "components/footer";

export const TrovoShop = () => {
  return (
    <>
      <TrovoHeader />
      <ElixirGrid />
      <HowTrovoWorks />
      <ManagersSection />
      <Footer />
    </>
  );
};
