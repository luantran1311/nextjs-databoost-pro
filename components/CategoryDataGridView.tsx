import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import {
  TreeDataState,
  CustomTreeData,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableTreeColumn,
} from '@devexpress/dx-react-grid-material-ui';

// import {
//   generateRows,
//   defaultColumnValues,
// } from '../../../demo-data/generator';

const getChildRows = (row : any, rootRows : any) => (row ? row.items : rootRows);

export default () => {
  const [columns] = useState([
    { name: 'name', title: 'Name' },
    // { name: 'gender', title: 'Gender' },
    // { name: 'city', title: 'City' },
    // { name: 'car', title: 'Car' },
  ]);
//   const [data] = useState(generateRows({
//     columnValues: {
//       ...defaultColumnValues,
//       items: ({ random }) => (random() > 0.5
//         ? generateRows({
//           columnValues: {
//             ...defaultColumnValues,
//             items: () => (random() > 0.5
//               ? generateRows({
//                 columnValues: {
//                   ...defaultColumnValues,
//                 },
//                 length: Math.trunc(random() * 5) + 1,
//                 random,
//               })
//               : null),
//           },
//           length: Math.trunc(random() * 3) + 1,
//           random,
//         })
//         : null),
//     },
//     length: 3,
//   }));

const data : any = [
    {
        id: 1,
        name: 'cat1',
        items: [
            {        id: 2,
                name: 'cat 1 - 2',
                items: null
            },
            {        id: 3,
                name: 'cat 1 - 3',
                items: null
            }
        ]
    }
];

//   const [tableColumnExtensions] = useState([
//     { columnName: 'name', width: 300 },
//   ]);

  return (
    <Paper>
      <Grid
        rows={data}
        columns={columns}
      >
        <TreeDataState />
        <CustomTreeData
          getChildRows={getChildRows}
        />
        <Table
        />
        <TableHeaderRow />
        <TableTreeColumn
          for="name"
        />
      </Grid>
    </Paper>
  );
};
