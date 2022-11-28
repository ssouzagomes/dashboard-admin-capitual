import { Avatar } from '@mui/material';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { TextH2 } from '../TextH2';
import {
  ContainerBox,
  CustomerItem,
  CustomersBox,
  NameEmailBox,
  TypographyBody1,
  TypographyBody2,
  UserDataBox,
} from './styles';

interface ICustomers {
  id: string;
  name: string;
  email: string;
  avatar: string;
  lastPurchaseValue: string;
  lastPurchaseDate: Date;
  createdAt: string;
}

export function Customers(): JSX.Element {
  const [customers, setCustomers] = useState<ICustomers[]>([] as ICustomers[]);

  useEffect(() => {
    api.get<ICustomers[]>('/users').then(response => {
      const sortedCustomers = response.data.sort((a, b) => {
        return (
          new Date(b.lastPurchaseDate).getTime() -
          new Date(a.lastPurchaseDate).getTime()
        );
      });

      const slicedArray = sortedCustomers.slice(0, 6);

      setCustomers(slicedArray);
    });
  }, []);

  return (
    <ContainerBox>
      <TextH2 text="Latest Customers" />

      <CustomersBox>
        {customers.map(customer => (
          <CustomerItem>
            <UserDataBox>
              <Avatar
                alt="Avatar User"
                src={customer.avatar}
                sx={{ width: '32px', height: '32px' }}
              />

              <NameEmailBox>
                <TypographyBody1 variant="body1">
                  {customer.name}
                </TypographyBody1>

                <TypographyBody2 variant="body2">
                  {customer.email}
                </TypographyBody2>
              </NameEmailBox>
            </UserDataBox>

            <TypographyBody1 variant="body1">
              ${customer.lastPurchaseValue}
            </TypographyBody1>
          </CustomerItem>
        ))}
      </CustomersBox>
    </ContainerBox>
  );
}
