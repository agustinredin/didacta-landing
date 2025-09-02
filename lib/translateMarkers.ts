"use client"

import React, { isValidElement, cloneElement, ReactNode } from "react";

const RX = /\[\[\[(.+?)\]\]\]/g;

export type Dict = Record<string, string>;

function translateString(s: string, dict: Dict): string {
    //en: VALUES
    //es: KEYS
    console.log(s)
  return s.replace(RX, (_, key: string) => dict[key] ?? key);
}

export function translateTree(node: any, dict: Dict): ReactNode {
  if (typeof node === "string") return translateString(node, dict);
  if (typeof node === "number" || node == null || node === false) return node;

  if (Array.isArray(node)) return node.map((child, index) => {
    const translated = translateTree(child, dict);
    return React.isValidElement(translated) 
      ? React.cloneElement(translated, { key: index })
      : translated;
  });

  if (isValidElement(node)) {
    const props: Record<string, any> = { ...node.props as Record<string, any> };
    // Recurse into children only; leave non-children props untouched.
    if (props['children']) {
        props.children = translateTree(props.children, dict);
    }
    return cloneElement(node, props);
  }

  return node;
}
