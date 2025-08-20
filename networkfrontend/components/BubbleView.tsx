import { Bubble } from "./Bubble";

export const BubbleView = ({ nodes, onZoom, onBack }) => {
  return (
    <div class="grid grid-cols-3">
      {nodes.map((node) => (
        <Bubble
          key={node.id}
          node={node}
          onScrollIn={() => onZoom(node)}
          onScrollOut={onBack}
        />
      ))}
    </div>
  );
};
