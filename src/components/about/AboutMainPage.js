import { InnerPageBannet } from './InnerPageBanner';
import { AboutUs } from './AboutUs';
import { OurMission } from './OurMission';
import { OurVission } from './OurVission';
import { OurStory } from './OurStory';
import { Milestones } from './milestones/Milestones';
import { OurOffering } from './offers/OurOffers';
export const AboutMainPage = () => {
  return (
    <>
      <InnerPageBannet />
      <AboutUs />
      <OurMission />
      <OurVission />
      <OurStory />
      {/* <Milestones />
      <OurOffering /> */}
    </>
  );
};
