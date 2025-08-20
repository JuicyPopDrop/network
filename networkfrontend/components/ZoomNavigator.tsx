"use client";
import { useState } from "react";
import type { NodeType } from "../types/Node";
import { treeData } from "../data/tree";
import { BubbleView } from "./BubbleView";

export const ZoomNavigator = () => {
  const [currentNodes, setCurrentNodes] = useState<NodeType[]>(treeData);
  const [history, setHistory] = useState<NodeType[][]>([]);
  const zoomLevel = history.length;
  const test = currentNodes[0];

  const handleZoomIn = (node: NodeType) => {
    if (!node.children) return;
    setHistory([...history, currentNodes]);
    setCurrentNodes(node.children);
  };

  const handleZoomOut = () => {
    if (history.length === 0) return;
    const prev = [...history];
    const last = prev.pop() as NodeType[];
    setHistory(prev);
    setCurrentNodes(last);
  };

  return (
    <>
      <div>Zoom-Level: {zoomLevel + " " + test.type} </div>
      <BubbleView
        nodes={currentNodes}
        onZoom={handleZoomIn}
        onBack={handleZoomOut}
      />
    </>
  );
};
