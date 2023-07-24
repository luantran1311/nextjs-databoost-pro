import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import {
  TreeDataState,
  CustomTreeData,
  SearchState,
} from "@devexpress/dx-react-grid";
import {
  Grid,
  SearchPanel,
  Table,
  TableHeaderRow,
  TableTreeColumn,
  Toolbar,
  VirtualTable,
} from "@devexpress/dx-react-grid-material-ui";
import { CategoryTree } from "@/types";

const getChildRows = (row: any, rootRows: any) => {

  return row ? row.items : rootRows;
};

const CategoryDataGridView = ({ data }: { data: CategoryTree[] }) => {
  const columns = [
    { name: "name", title: "Name" },
    { name: "ebay_category", title: "eBay Category" },
    { name: "amazon_category", title: "Amazon Category" },
  ];

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

  return (
    <>
      <button type="button" onClick={toggle}>
        {expandedRowIds.length > 0 ? "Collapse All" : "Expand All"}
      </button>
      <div id="category-data-grid-view">
      <Paper>
        <Grid rows={data} columns={columns} getRowId={getRowId}>
          <TreeDataState
            expandedRowIds={expandedRowIds}
            onExpandedRowIdsChange={(expandedRowIds: any) => {
              setExpandedRowIds(expandedRowIds);
            }}
          />

          <CustomTreeData getChildRows={getChildRows} />
          <VirtualTable />
          <TableHeaderRow />
          <TableTreeColumn for="name" />
        </Grid>
      </Paper>
      </div>
    </>
  );
};

export default CategoryDataGridView;
