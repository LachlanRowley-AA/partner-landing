import { useEffect, useMemo, useState, useRef } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@mantine/core";
import { ContactSection } from "@/components/contact/contact";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const previousTitle = useRef<number>(0);
  const titles = useMemo(
    () => ["industry leaders", "visionaries", "trailblazers", "innovators"],
    []
  );
  const longestString: string = titles.reduce((a, b) => (a.length > b.length ? a : b), "");
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      previousTitle.current = titleNumber;
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2500);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);
  return (
    <div className="w-full flex flex-col lg:flex-row px-20 py-4">
      <div className="flex-1 lg:w-2/3">
        <div className="flex gap-8 py-20 lg:pt-20 md:px-20 lg:px-20 items-center justify-center flex-col px-20">
          <img src="/AA_Light_Logo.svg" alt="AA Light Logo" className="h-16 w-auto" />
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-4xl tracking-tighter text-center font-regular">
            <span className="text-spektr-cyan-50">Partnering with tomorrow's&nbsp;</span>
            <span className="relative inline-block">
                {/* Invisible static placeholder that takes up the correct space */}
                <span className="invisible font-semibold">
                {longestString}
                </span>
                {/* Animated title absolutely positioned over the placeholder */}
                {titles.map((title, index) => (
                <motion.span
                    key={index}
                    className="absolute left-0 top-0 font-semibold text-[#01E194]"
                    initial={{ opacity: 0, y: "100%" }}
                    animate={
                    titleNumber === index
                        ? { y: "0%", opacity: 1 } // current entering
                        : index === previousTitle.current
                        ? { y: "100%", opacity: 0 } // outgoing (slide up)
                        : { y: "-100%", opacity: 0 } // default (below)
                    }
                    transition={{ type: "spring", stiffness: 50 }}
                >
                    {title}
                </motion.span>
                ))}
            </span>
            {/* <span className="text-spektr-cyan-50">&nbsp;leaders<s/pan> */}
            </h1>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-4xl text-center">
              Unlock growth for you and your clients with our innovative finance partnership model.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button size="lg" bg="#01E194" className="gap-4">
              Get Started <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3">
        <ContactSection />
      </div>
    </div>
  );
}
export { Hero };