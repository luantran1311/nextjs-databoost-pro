import { CategoryTree } from "@/types";

//convert flat array to nested object array
export const buildObjectFromArray = (arr: any): CategoryTree[] => {
  const map = new Map();

  // Create a map of parent IDs to their respective objects
  for (const [parentId, id, name] of arr) {
    map.set(id, { id: parseInt(id), name, items: null });
    if (parentId !== "") {
      const parent = map.get(parentId);
      if (parent.items === null) parent.items = [];
      parent.items.push(map.get(id));
    }
  }

  // Find the top-level objects (ParentID === "")
  const result: CategoryTree[] = [];
  for (const [parentId, id, name] of arr) {
    if (parentId === "") {
      result.push(map.get(id));
    }
  }

  return result;
};

//find and update nested object array item
const data = [
  {
    id: 1,
    name: "Mobile Phones",
    items: [
      {
        id: 2,
        name: "Apple",
        items: null,
      },
      {
        id: 3,
        name: "Samsung",
        items: null,
      },
    ],
  },
  {
    id: 4,
    name: "Tablets",
    items: [
      {
        id: 5,
        name: "Apple",
        items: null,
      },
      {
        id: 6,
        name: "Samsung",
        items: null,
      },
      {
        id: 7,
        name: "Huawei",
        items: null,
      },
      {
        id: 8,
        name: "Oppo",
        items: null,
      },
    ],
  },
  {
    id: 9,
    name: "Drones",
    items: [
      {
        id: 10,
        name: "DJI",
        items: null,
      },
      {
        id: 11,
        name: "GoPro",
        items: null,
      },
    ],
  },
  {
    id: 125,
    name: "Accessories",
    items: [
      {
        id: 74,
        name: "Mobile Phones",
        items: [
          {
            id: 986,
            name: "Apple",
            items: null,
          },
          {
            id: 723,
            name: "Samsung",
            items: null,
          },
        ],
      },
      {
        id: 86,
        name: "Tablets",
        items: [
          {
            id: 110,
            name: "Apple",
            items: null,
          },
          {
            id: 563,
            name: "Samsung",
            items: null,
          },
          {
            id: 453,
            name: "Motorola",
            items: null,
          },
        ],
      },
      {
        id: 236,
        name: "Cameras",
        items: [
          {
            id: 998,
            name: "Cannon",
            items: null,
          },
          {
            id: 654,
            name: "Nikon",
            items: null,
          },
        ],
      },
    ],
  },
];

export const updateCategoryTreeItem = (
  arr: any,
  idToFind: number,
  objToMerge: any,
  inAncestor = false
) => {
  return arr.map((obj: any) => {
    //find the item
    const mergeThis = inAncestor || obj.id === idToFind;
    //handle changes
    const merged = (mergeThis === false) ? obj : { ...obj, ...objToMerge };

    //if item not found, find its children items
    if (merged.items) {
      merged.items = updateCategoryTreeItem(merged.items, idToFind, objToMerge, false);
    }
    return merged;
  });
};
