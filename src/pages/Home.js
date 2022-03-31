import Popular from "../components/Popular";
import Veggie from "../components/Veggie";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Veggie />
      <Popular />
    </motion.div>
  );
}
