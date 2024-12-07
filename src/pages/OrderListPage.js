
//OrderListPage.jsx
import {
    Container,
    Typography,
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
    Breadcrumbs,
    Link
  } from '@mui/material';
  import { NavigateNext as NavigateNextIcon } from '@mui/icons-material';
  import { useState } from 'react';
  
  const OrderList = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
  
    
    const orders = [
    //   {
    //     product: "Laptop",
    //     orderId: "#ORD001",
    //     date: "2024-11-28",
    //     customerName: "John David",
    //     sellerName: "Tech Store",
    //     amount: "$999.99"
    //   },
    
    ];
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    return (
      <Container maxWidth="xl">
        {/* Breadcrumb */}
        <Box sx={{ my: 2 }}>
          <Breadcrumbs 
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Link color="inherit" href="/">Home</Link>
            <Typography color="text.primary">OrderList</Typography>
          </Breadcrumbs>
        </Box>
  
        <Typography variant="h5" sx={{ mb: 3 }}>Recent Purchases</Typography>
  
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell>Order ID</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Customer Name</TableCell>
                  <TableCell>Seller Name</TableCell>
                  <TableCell align="right">Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} align="center">
                      0-0 of 0
                    </TableCell>
                  </TableRow>
                ) : (
                  orders
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((order, index) => (
                      <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                        <TableCell>{order.product}</TableCell>
                        <TableCell>{order.orderId}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>{order.customerName}</TableCell>
                        <TableCell>{order.sellerName}</TableCell>
                        <TableCell align="right">{order.amount}</TableCell>
                      </TableRow>
                    ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={orders.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Container>
    );
  };
  
  export default OrderList;