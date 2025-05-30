import LayoutAnimation from "@/components/LayoutAnimation";
import ScrollTriggered from "@/components/ScrollTriggered";
import ScrollLinked from "@/components/ScrolledLinked";
import SharedLayoutAnimation from "@/components/SharedLayoutAnimation";
import * as motion from "motion/react-client";

export default function Home() {
  return <motion.div style={box} drag />;
}

const box = {
  width: 100,
  height: 100,
  backgroundColor: "#f5f5f5",
  borderRadius: 5,
  margin: "auto",
};
