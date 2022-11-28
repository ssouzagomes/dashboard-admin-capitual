import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import { ContainerBox, StyledTableCell, StyledTableRow } from './styles';
import { api } from '../../services/api';

interface ITransactions {
  id: string;
  firstName: string;
  lastName: string;
  amount: string;
  completed: boolean;
  createdAt: Date;
}

export function Transactions(): JSX.Element {
  const [transactions, setTransactions] = useState<ITransactions[]>(
    [] as ITransactions[],
  );

  useEffect(() => {
    api.get<ITransactions[]>('/transactions').then(response => {
      const sortedTransactions = response.data.sort((a, b) => {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      });

      const slicedArray = sortedTransactions.slice(0, 6);

      setTransactions(slicedArray);
    });
  }, []);

  return (
    <ContainerBox>
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          fontFamily: 'Inter',
          fontWeight: 600,
          fontSize: 20,
          color: '#111827',
        }}
      >
        Transactions
      </Typography>

      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontFamily: 'Inter',
          fontWeight: 400,
          fontSize: 14,
          color: '#71717A',
          mb: 4,
        }}
      >
        This is a list of latest transactions.
      </Typography>

      <TableContainer
        component={Paper}
        sx={{ boxShadow: 'none', borderRadius: 3 }}
      >
        <Table
          sx={{
            width: '100%',
            border: 'none',
          }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>TRANSACTION</StyledTableCell>
              <StyledTableCell align="left">DATE & TIME</StyledTableCell>
              <StyledTableCell align="left" className="responsive-column">
                AMOUNT
              </StyledTableCell>
              <StyledTableCell align="left" className="responsive-column">
                STATUS
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map(transaction => (
              <StyledTableRow key={transaction.id}>
                <StyledTableCell component="th" scope="row">
                  Payment {!transaction.completed && 'failed'}{' '}
                  {Number(transaction.amount) < 0 ? 'refund to' : 'from'}{' '}
                  <strong>{`${transaction.firstName} ${transaction.lastName}`}</strong>
                </StyledTableCell>
                <StyledTableCell
                  align="left"
                  sx={{ fontWeight: 400, color: '#6B7280' }}
                >
                  {format(new Date(transaction.createdAt), 'MMM dd, yyyy')}
                </StyledTableCell>
                <StyledTableCell
                  align="left"
                  sx={{ fontWeight: 600, color: '#111827' }}
                  className="responsive-column"
                >
                  ${Math.round(Number(transaction.amount))}
                </StyledTableCell>
                <StyledTableCell align="left" className="responsive-column">
                  <Typography
                    sx={{
                      width: 'fit-content',
                      padding: '2px 10px',
                      borderRadius: '10px',
                      fontWeight: 400,
                      fontSize: 12,
                      ...(transaction.completed && {
                        color: '#03543F',
                        backgroundColor: '#DEF7EC',
                      }),
                      ...(!transaction.completed && {
                        color: '#9B1C1C',
                        backgroundColor: '#FBD5D5',
                      }),
                    }}
                  >
                    {transaction.completed ? 'Completed' : 'Cancelled'}
                  </Typography>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ContainerBox>
  );
}
