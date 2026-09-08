"use client";

import { useEffect, useState } from "react";
import { Button } from "@heroui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Calculator, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { openEligibility, scrollToId } from "@/lib/events";

/**
 * Mobile-only fixed bottom bar. Appears once the user scrolls past ~70% of the
 * hero, keeps Call / WhatsApp / Check Eligibility one tap away everywhere.
 */
export function StickyMobileBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const hero = document.getElementById("hero");
        const threshold = hero
          ? hero.offsetTop + hero.offsetHeight * 0.7
          : 480;
        setVisible(window.scrollY > threshold);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const whatsappHref = siteConfig.whatsapp(siteConfig.whatsappDefaultMessage);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          aria-label="Quick contact actions"
          initial={{ y: 88 }}
          animate={{ y: 0 }}
          exit={{ y: 88 }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] bg-background/95 backdrop-blur md:hidden"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <div className="mx-auto grid max-w-md grid-cols-3">
            <Button
              as="a"
              href={siteConfig.phonePrimaryHref}
              variant="light"
              radius="none"
              aria-label={`Call ${siteConfig.phonePrimary}`}
              className="h-14 flex-col gap-0.5 rounded-none text-xs font-medium text-primary"
            >
              <Phone size={20} aria-hidden />
              Call
            </Button>
            <Button
              as="a"
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              variant="flat"
              color="secondary"
              radius="none"
              aria-label="Chat on WhatsApp"
              className="h-14 flex-col gap-0.5 rounded-none text-xs font-medium"
            >
              <MessageCircle size={20} aria-hidden />
              WhatsApp
            </Button>
            <Button
              variant="solid"
              color="secondary"
              radius="none"
              aria-label="Check loan eligibility"
              className="btn-3d h-14 flex-col gap-0.5 rounded-none text-xs font-medium"
              onPress={() => {
                openEligibility();
                scrollToId("eligibility");
              }}
            >
              <Calculator size={20} aria-hidden />
              Eligibility
            </Button>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
