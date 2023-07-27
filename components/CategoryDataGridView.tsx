import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import {
  TreeDataState,
  CustomTreeData,
  SearchState,
  Column,
  EditingState, 
  ChangeSet,
} from "@devexpress/dx-react-grid";
import {
  Grid,
  SearchPanel,
  Table,
  TableEditRow,
  TableHeaderRow,
  TableTreeColumn,
  Toolbar,
  VirtualTable,
  TableEditColumn,
  TableInlineCellEditing
} from "@devexpress/dx-react-grid-material-ui";
import { CategoryTree } from "@/types";
import { updateCategoryTreeItem } from "@/lib/utils";

const CategoryDataGridView = ({data} : {data : any}) => {

  const [categoryTreeData, setCategoryTreeData] = useState(data);
  const columns : Column[] = [
    { name: "name", title: "Name" },
    { name: "ebay_category", title: "eBay Category" },
    { name: "amazon_category", title: "Amazon Category" },
  ];

  const getChildRows = (row: any, rootRows: any) => {

    return row ? row.items : rootRows;
  };
  

  // const headerCell : TableHeaderRow.CellProps = {
  //   column: columns[0],
  //   resizingEnabled: false,
  //   onWidthChange: number => console.log(number),
  //   onWidthDraft: number => console.log(number),
  //   onWidthDraftCancel: () => console.log(1),
  //   draggingEnabled: false,
  //   getCellWidth: number => console.log(number),
  //   tableRow: 1,
  //   tableColumn: 1,
  //   children: <p>test</p>
  // }

  const [searchValue, setSearchValue] = useState<string>("");
  const [expandedRowIds, setExpandedRowIds] = useState<any[]>([]);

  const allRowIds = [...Array(2000)].map((x,i)=>i);

  const toggle = () => {
    if (expandedRowIds.length > 0) setExpandedRowIds([]);
    else {
      setExpandedRowIds(allRowIds);
    }
  };
  const getRowId = (row : any) => {return row.id;};

  const commitChanges = (changes : ChangeSet) => {
    const changedItem = changes.changed;
    console.log('changedItem',changedItem)

    if(changedItem) 
    {
      const changedItemId = Number(Object.keys(changedItem)[0]);
      const newItemName = changedItem[changedItemId];
      console.log(changedItemId,newItemName);
              const newCategoryTreeData = updateCategoryTreeItem(categoryTreeData,changedItemId,newItemName);
        //console.log('newCategoryTreeData')
    // const newCategoryTreeData = categoryTreeData.map((item : any) => {
    //   if(changedItem[item.id]) {
    //     console.log(item.id,changedItem[item.id]);
    //     const newCategoryTreeData = findItem(categoryTreeData,item.id,changedItem[item.id]);
    //     console.log('newCategoryTreeData')
    //     return { ...categoryTreeData, ...changedItem[item.id] }
    //   }
    //   else {
    //     return item;
    //   }
    // });
    //console.log('newCategoryTreeData',newCategoryTreeData)
    setCategoryTreeData(newCategoryTreeData);
    }
  };

  const editingStateColumnExtensions = [
    { columnName: 'ebay_category', editingEnabled: false },
    { columnName: 'amazon_category', editingEnabled: false },
  ];

  return (
      <div id="category-data-grid-view">
      <button type="button" onClick={toggle} className="text-xs text-white bg-blue-600 p-2 rounded-md">
        {expandedRowIds.length > 0 ? "Collapse All" : "Expand All"}
      </button>
      <Paper className="mt-4">
        <Grid rows={categoryTreeData} columns={columns} getRowId={getRowId}>
          <TreeDataState
            expandedRowIds={expandedRowIds}
            onExpandedRowIdsChange={(expandedRowIds: any) => {
              setExpandedRowIds(expandedRowIds);
            }}
          />
          <CustomTreeData getChildRows={getChildRows} />
          <EditingState columnExtensions={editingStateColumnExtensions} onCommitChanges={commitChanges} />

          <Table />
          <TableHeaderRow />

          <TableTreeColumn for="name" />
          
          <TableInlineCellEditing
            startEditAction={"doubleClick"}
            selectTextOnEditStart={true}
          />
        </Grid>
      </Paper>
      </div>
  );
};

export default CategoryDataGridView;
