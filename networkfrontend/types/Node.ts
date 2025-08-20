export interface NodeType {
  id: string;
  name: string;
  type: string;
  children?: NodeType[];
}
