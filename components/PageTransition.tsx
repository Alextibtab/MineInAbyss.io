import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const PageTransition = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "-100%",
  },
};

const PageTransitionContainer = ({ children }: Props) => {
  return (
    <motion.div
      initial='out'
      animate='in'
      exit='out'
      variants={PageTransition}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransitionContainer;
