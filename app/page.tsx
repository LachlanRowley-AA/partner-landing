// import Image from "next/image";
// import { Hero } from "@/components/hero/hero";

// export default function Home() {
//   return (
//     <div>
//       <Hero />
//       <ContactForm />
//     </div>

//   );
// }

'use client';

import { Hero } from "@/components/hero3/hero";
import PartnershipBenefits from "@/components/partner-gain/partner-gain";
import CustomerBenefits from "@/components/customer-gain/customer-gain";
import { ReferralProcessSection } from "@/components/referral/referral";
import ReferralJourneySection  from "@/components/referral/journey";
import { FounderStorySection } from "@/components/founder/founder";
import { ContactSection } from "@/components/contact/contact";
import ContactForm from "@/components/form/DynamicForm";
import { Comparison1 } from "@/components/comparison/Comparison";
import { Logos03 } from "@/components/AnimatedLogos/AnimatedLogos"


export default function HomePage() {
  return (
    <main>
      <Hero />
      {/* <Logos03 /> */}
      <PartnershipBenefits />
      <CustomerBenefits />
      <Comparison1 />
      <ReferralProcessSection />
      <ReferralJourneySection />
      <FounderStorySection />
      <ContactSection />
    </main>
  );
}
