import { Typography } from '@mui/material';
import { format } from 'date-fns';
import { useCallback, useEffect, useState } from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { api } from '../../services/api';
import { ContainerBox } from './styles';

interface ISales {
  id: string;
  price: number;
  productName: string;
  createdAt: string;
}

export function EarningChart(): JSX.Element {
  const [sales, setSales] = useState<ISales[]>([] as ISales[]);

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    api.get<ISales[]>('/sales').then(response => {
      const sortedSales = response.data.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      );

      const formattedSales = sortedSales
        .map(sale => {
          return {
            ...sale,
            price: Number(sale.price),
          };
        })
        .slice(-7);

      setSales(formattedSales);
    });
  }, []);

  const formatXAxis = useCallback((tickItem: string) => {
    return format(new Date(tickItem), 'dd MMM');
  }, []);

  const formatLabelTooltip = useCallback((tickItem: string) => {
    return format(new Date(tickItem), 'dd MMM, yyyy');
  }, []);

  return (
    <ContainerBox>
      <Typography
        variant="h1"
        sx={{
          fontFamily: 'Inter',
          fontWeight: 700,
          fontSize: 20,
          color: '#111827',
          paddingLeft: 1,
          display: 'flex',
          alignItems: 'center',
          gap: '13px',
        }}
      >
        Sales <HiOutlineExclamationCircle size={18} color="#9CA3AF" />
      </Typography>

      {sales.length > 0 && (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={300}
            height={100}
            data={sales}
            margin={{ bottom: 28, left: 36, right: 36 }}
          >
            <Line
              type="monotone"
              dataKey="price"
              name="Sales"
              stroke="#0E9F6E"
              strokeWidth={3}
            />

            <CartesianGrid vertical={false} strokeWidth={1} stroke="#F3F4F6" />

            <Tooltip
              separator=": $"
              offset={-75}
              labelFormatter={formatLabelTooltip}
              cursor={{ stroke: '#E5E7EB', strokeDasharray: '5 5' }}
              itemStyle={{ color: '#111827', fontWeight: 600 }}
              labelStyle={{
                fontFamily: 'Inter',
                fontSize: windowSize < 700 ? 9 : 12,
                fontWeight: 500,
                color: '#4B5563',
                marginBottom: '3px',
              }}
              contentStyle={{
                background: '#FFFFFF',
                alignItems: 'flex-start',
                width: windowSize < 700 ? '120px' : '150px',
                height: windowSize < 700 ? '76px' : '94px',
                border: 0,
                padding: '10px 12px',
                boxShadow:
                  '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)',
                borderRadius: 16,
                fontSize: windowSize < 700 ? 13 : 16,
                fontWeight: 400,
              }}
            />

            <XAxis
              dataKey="createdAt"
              tickFormatter={formatXAxis}
              fontFamily="Inter"
              fontWeight={600}
              fontSize={14}
              axisLine={false}
              tickLine={false}
              tickCount={7}
              tickMargin={28}
              angle={windowSize < 700 ? 320 : 0}
            />

            <YAxis
              unit="K"
              fontFamily="Inter"
              fontWeight={600}
              fontSize={14}
              axisLine={false}
              tickLine={false}
              tickMargin={36}
              hide={windowSize < 700}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </ContainerBox>
  );
}
