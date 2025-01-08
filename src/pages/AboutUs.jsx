import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  History,
  Star,
  Users,
  Globe,
  Zap,
  Award,
  Sparkles,
} from "lucide-react";

const AnimatedCard = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

export default function OurStory() {
  return (
    <>
      <section className="py-4 md:py-12 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard delay={0.8}>
            <div className="text-center bg-primary/10 p-8 rounded-xl shadow-lg">
              <h3 className="text-3xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground text-xl mb-8 max-w-3xl mx-auto">
                Let's embark on a journey of creativity together, where passion
                and purpose intertwine to elevate your life experience. At Go
                for Green Revolution (GGR) Pvt Limited, we're not just cooling
                spaces; we're crafting comfort that inspires.
              </p>
              <div className="flex justify-center items-center gap-8">
                <div className="flex flex-col items-center">
                  <Users className="w-12 h-12 text-primary mb-2" />
                  <span className="text-sm font-medium">Customer Focus</span>
                </div>
                <div className="flex flex-col items-center">
                  <Globe className="w-12 h-12 text-primary mb-2" />
                  <span className="text-sm font-medium">Global Reach</span>
                </div>
                <div className="flex flex-col items-center">
                  <Zap className="w-12 h-12 text-primary mb-2" />
                  <span className="text-sm font-medium">Innovation</span>
                </div>
                <div className="flex flex-col items-center">
                  <Award className="w-12 h-12 text-primary mb-2" />
                  <span className="text-sm font-medium">Excellence</span>
                </div>
                <div className="flex flex-col items-center">
                  <Sparkles className="w-12 h-12 text-primary mb-2" />
                  <span className="text-sm font-medium">Inspiration</span>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>
    </>
  );
}
