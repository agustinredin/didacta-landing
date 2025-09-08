"use client";

import React, { isValidElement, cloneElement, ReactNode } from "react";

const RX = /\[\[\[(.+?)\]\]\]/g;

export type Dict = Record<string, string>;

function translateString(s: string, dict: Dict): string {
  return s.replace(RX, (_, key: string) => dict[key] ?? key);
}

export function translateTree(node: any, dict: Dict): ReactNode {
  if (typeof node === "string") return translateString(node, dict);
  if (typeof node === "number" || node == null || node === false) return node;

  if (Array.isArray(node))
    return node.map((child, index) => {
      const translated = translateTree(child, dict);
      return React.isValidElement(translated)
        ? React.cloneElement(translated, { key: index })
        : translated;
    });

  if (isValidElement(node)) {
    const props: Record<string, any> = {};
    for (const [key, value] of Object.entries(
      node.props as Record<string, any>
    )) {
      props[key] = translateTree(value, dict);
    }

    // Built‑in elements can be cloned directly with translated props.
    if (typeof node.type === "string") {
      return cloneElement(node, props);
    }

    // For custom components, wrap them so their rendered output is translated.
    const Component = node.type as React.ComponentType<any>;

    return React.createElement(Component, { ...props, key: node.key });
  }

  return node;
}
