import { useEffect, useState } from 'react';
import { EarningChart } from '../../components/EarningChart';
import { Transactions } from '../../components/Transactions';
import { Footer } from '../../components/Footer';
import { api } from '../../services/api';

import { ContainerBox } from './styles';

interface ISales {
  id: string;
  price: string;
  productName: string;
  createdAt: Date;
}

export function Dashboard(): JSX.Element {
  const [sales, setSales] = useState<ISales[]>([] as ISales[]);

  useEffect(() => {
    api.get('/sales').then(response => {
      setSales(response.data);
    });
  }, []);

  return (
    <ContainerBox>
      <EarningChart sales={sales} />
      <Transactions />
      <Footer />
    </ContainerBox>
  );
}
