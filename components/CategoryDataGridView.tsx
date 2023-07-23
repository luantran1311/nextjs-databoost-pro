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
  console.log('row',row);
  console.log('rootRows',rootRows)
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

  const toggle = () => {
    if (expandedRowIds.length > 0) setExpandedRowIds([]);
    else setExpandedRowIds([0, 1, 11]);
  };

  return (
    <>
      <button type="button" onClick={toggle}>
        {expandedRowIds.length > 0 ? "Collapse All" : "Expand All"}
      </button>
      <Paper>
        <Grid rows={data} columns={columns}>
          <TreeDataState
            expandedRowIds={expandedRowIds}
            onExpandedRowIdsChange={(expandedRowIds: any) => {
              console.log("expandedRowIds", expandedRowIds);
              setExpandedRowIds(expandedRowIds);
            }}
          />

          <CustomTreeData getChildRows={getChildRows} />
          <VirtualTable />
          <TableHeaderRow />
          <TableTreeColumn for="name" />
        </Grid>
      </Paper>
    </>
  );
};

export default CategoryDataGridView;
