import React from "react";
import ReactDOM from "react-dom";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { categoryTree } from "./sampleData";
import { uuid } from "uuidv4";

const getTreeItemsFromData = (treeItems : any) => {
  return treeItems.map((treeItemData : any) => {
    let children;
    if (treeItemData.children && treeItemData.children.length > 0) {
      children = getTreeItemsFromData(treeItemData.children);
    }
    if (treeItemData.route) {
      return (
          <TreeItem
            key={treeItemData.id}
            nodeId={treeItemData.id}
            label={treeItemData.name}
            children={children}
          />
      );
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

const DataTreeView = () => {
  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {getTreeItemsFromData(categoryTree)}
    </TreeView>
  );
};

export default DataTreeView;