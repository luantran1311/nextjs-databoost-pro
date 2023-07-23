import { CategoryTree } from "@/types";

export const buildObjectFromArray = (arr: any) : CategoryTree[] => {
  const map = new Map();

  // Create a map of parent IDs to their respective objects
  for (const [parentId, id, name] of arr) {
    map.set(id, { id: parseInt(id), name, items: null });
    if (parentId !== "") {
      const parent = map.get(parentId);
      if(parent.items === null) parent.items = [];
      parent.items.push(map.get(id));
    }
  }

  // Find the top-level objects (ParentID === "")
  const result : CategoryTree[] = [];
  for (const [parentId, id, name] of arr) {
    if (parentId === "") {
      result.push(map.get(id));
    }
  }

  return result;
};
