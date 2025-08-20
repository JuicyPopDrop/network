"use client";
import { motion } from "framer-motion";
import React from "react";
import type { NodeType } from "../types/Node";

interface BubbleProps {
  node: NodeType;
  onScrollIn: () => void;
  onScrollOut: () => void;
}

export const Bubble: React.FC<BubbleProps> = ({
  node,
  onScrollIn,
  onScrollOut,
}) => {
  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY < 0) {
      onScrollIn();
    } else {
      onScrollOut();
    }
  };

  return (
    <motion.div
      onWheel={handleWheel}
      whileHover={{ scale: 1.1 }}
      style={{
        width: 150,
        height: 150,
        borderRadius: "50%",
        background: "#444",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        margin: "1rem",
      }}>
      {node.name}
    </motion.div>
  );
};
