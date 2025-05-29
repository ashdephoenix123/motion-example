import LayoutAnimation from "@/components/LayoutAnimation";
import ScrollTriggered from "@/components/ScrollTriggered";
import ScrollLinked from "@/components/ScrolledLinked";
import SharedLayoutAnimation from "@/components/SharedLayoutAnimation";
import * as motion from "motion/react-client";

export default function Home() {
  return (
    <div className="flex gap-6 item-center justify-center w-full py-12 max-w-96 flex-wrap">
      {Array.from({ length: 10 }, (_, i) => i + 1).map((a) => (
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          style={box}
          key={a}
        />
      ))}
    </div>
  );
}

const box = {
  width: 300,
  height: 300,
  backgroundColor: "#f5f5f5",
  borderRadius: 5,
  margin: "auto",
};
