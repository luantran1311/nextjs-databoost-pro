"use client";

import React, { useState } from "react";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const getTreeItemsFromData = (treeItems: any) => {
  return treeItems.map((treeItemData: any) => {
    let children;
    if (treeItemData.children && treeItemData.children.length > 0) {
      children = getTreeItemsFromData(treeItemData.children);
    }
    return (
      <TreeItem
        key={treeItemData.id}
        nodeId={treeItemData.id}
        label={treeItemData.name}
        children={children}
      />
    );
  });
};

const CategoryTreeView = ({ categoryTree }: { categoryTree: any[] }) => {
  //category id from 0 to 1000
  const arr = [...Array(1000)].map((x, i) => i);

  const [expanded, setExpanded] = useState<any[]>([]);

  const handleExpandClick = () => {
    setExpanded((oldExpanded) => (oldExpanded.length === 0 ? arr : []));
  };

  return (
    <>
      {" "}
      <button type="button" onClick={handleExpandClick}>
        {expanded.length === 0 ? "Expand all" : "Collapse all"}
      </button>
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        expanded={expanded}
      >
        {getTreeItemsFromData(categoryTree)}
      </TreeView>
    </>
  );
};

export default CategoryTreeView;