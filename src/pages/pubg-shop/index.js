import { HowPubgWorks } from "components/HowPubgWorks";
import { PubgGrid } from "components/PubgGrid";
import { PubgHeader } from "components/headers/PubgHeader";
import { OurContactsPubg } from "components/OurContactsPubg";
import { Footer } from "components/footer";

export const PubgMobile = () => {
  return (
    <>
      <PubgHeader />
      <PubgGrid />
      <HowPubgWorks />
      <OurContactsPubg />
      <Footer />
    </>
  );
};
