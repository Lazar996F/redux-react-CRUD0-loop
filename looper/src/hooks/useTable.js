import { useMemo } from "react";

export default function useTable(items) {
  const bodyItems = useMemo(() => items, [items.length]);
  const headerItems = [
    "Section",
    "Page Name",
    "Spot Type",
    "Row (old position)",
    "Column(old position)",
    "App/Title",
    "User Path",
    "Screenshot",
  ];

  return {
    headerItems,
    bodyItems,
  };
}
