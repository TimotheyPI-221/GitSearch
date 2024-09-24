import React from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination} from '@mui/material'

const columns = [
  { id: 'full_name', label: 'Название', minWidth: 220 },
  { id: 'language', label: 'Язык', minWidth: 120 },
  {
    id: 'forks_count',
    label: 'Число форков',
    minWidth: 150,
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'stargazers_count',
    label: 'Число звезд',
    minWidth: 150,
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'updated_at',
    label: 'Дата обновления',
    minWidth: 200,
    // align: 'left',
    format: (value) => value.toFixed(2),
  },
];

export default function RepoTable( {data, selectRepo} ) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  function handleRepoClick(repo) {
    selectRepo(repo)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div className="col-12 col-md-8">
      <div className="p-3">
        <h2 style={{ fontSize: "48px" }}>Результаты поиска</h2>
        <Paper sx={{ width: "100%" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover 
                        onClick= {() => handleRepoClick(row)}
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div>
  );
}
