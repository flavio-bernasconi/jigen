import * as React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

export const DragButton = (props) => {
  const constraintsRef = useRef(null);
  console.log(props);

  return (
    <div className="example-container">
      <motion.div className="drag-area" ref={constraintsRef} />
      <motion.div
        className="ciga-yellow"
        drag
        dragConstraints={constraintsRef}
        onDrag={(event, info) => {
          if (info.point.y < -180) {
            setTimeout(() => {
              props.setCurrentStep("stepThree", "stepTwo");
            }, 200);
          }
        }}
      >
        <div className="ciga"></div>
      </motion.div>
    </div>
  );
};
