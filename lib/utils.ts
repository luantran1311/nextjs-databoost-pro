export const buildObjectFromArray = (arr: any) => {
  const map = new Map();

  // Create a map of parent IDs to their respective objects
  for (const [parentId, id, name] of arr) {
    map.set(id, { id: parseInt(id), name, children: [] });
    if (parentId !== "") {
      const parent = map.get(parentId);
      parent.children.push(map.get(id));
    }
  }

  // Find the top-level objects (ParentID === "")
  const result = [];
  for (const [parentId, id, name] of arr) {
    if (parentId === "") {
      result.push(map.get(id));
    }
  }

  return result;
};
