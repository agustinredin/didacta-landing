import React, { isValidElement, cloneElement, ReactNode } from "react";

const RX = /\[\[\[(.+?)\]\]\]/gs;

export type Dict = Record<string, string>;

function translateString(s: string, dict: Dict): string {
  return s.replace(RX, (_, key: string) => dict[key] ?? key);
}

export function translateTree(node: ReactNode, dict: Dict): ReactNode {
  if (typeof node === "string") return translateString(node, dict);
  if (typeof node === "number" || node == null || node === false) return node;

  if (Array.isArray(node)) return node.map((child) => translateTree(child, dict));

  if (isValidElement(node)) {
    const props: Record<string, any> = { ...node.props };
    // Recurse into children only; leave non-children props untouched.
    if ("children" in props) props.children = translateTree(props.children, dict);
    return cloneElement(node, props);
  }

  return node;
}
