import {
  styled,
  Box,
  TableCell,
  tableCellClasses,
  TableRow,
} from '@mui/material';

export const ContainerBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  background: white;
  border-radius: 16px;
  padding: 16px;

  @media (max-width: 500px) {
    .responsive-column {
      display: none;
    }
  }
`;

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#F9FAFB',
    color: '#6B7280',
    fontWeight: 600,
    fontSize: 12,
    height: 50,
    fontFamily: 'Inter',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontFamily: 'Inter',
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: '#F9FAFB',
  },
  '&:nth-of-type(odd)': {
    backgroundColor: '#FFF',
  },

  'td, th': {
    border: 0,
  },
}));
