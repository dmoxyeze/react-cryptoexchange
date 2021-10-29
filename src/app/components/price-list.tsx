import React, { ReactNode } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CurrencyType } from '../model/currency-type';

type Props = {
  className?: string;
  currencies: CurrencyType[];
  children?: ReactNode;
  style?: {};
};


const PriceList = ({
  className = '',
  currencies,
  children,
  style,
  ...rest
}: Props) => {
  return (
    <TableContainer component={Paper} className={className}>
      <Table aria-label="simple table">
        <caption>Exchange Rates</caption>
        <TableHead>
          <TableRow>
            <TableCell>Currency</TableCell>
            <TableCell align="right">Buy</TableCell>
            <TableCell align="right">Sell</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currencies.map((currency) => (
            <TableRow
              key={currency.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {currency.name}
              </TableCell>
              <TableCell align="right">{currency.buy}</TableCell>
              <TableCell align="right">{currency.sell}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default PriceList;
