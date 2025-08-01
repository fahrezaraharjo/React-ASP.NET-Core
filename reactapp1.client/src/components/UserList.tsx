import React, { useEffect, useRef } from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { useApiQuery } from '../hooks/useApiQuery';
import { showErrorToast, showSuccessToast } from '../utils/toast';

type User = {
  id: number;
  name: string;
  email: string;
};

const UserList: React.FC = () => {
  const { data, isLoading, error, isSuccess } = useApiQuery<User[]>(
    'https://jsonplaceholder.typicode.com/users'
  );

  const hasShownSuccessToast = useRef(false);

  useEffect(() => {
    if (error) {
      showErrorToast(error);
    }
  }, [error]);

  useEffect(() => {
    if (isSuccess && data && !hasShownSuccessToast.current) {
      showSuccessToast('Data user berhasil dimuat!');
      hasShownSuccessToast.current = true;
    }
  }, [isSuccess, data]);

  if (isLoading) return <p>Memuat data user...</p>;
  if (error) return <p>Gagal memuat data user.</p>;

  return (
    <div>
      <h2 style={{ marginBottom: '1rem' }}>📋 Daftar User</h2>
      <Grid
        style={{ height: '400px' }}
        data={data}
      >
        <Column field="id" title="ID" width="80px" />
        <Column field="name" title="Nama" />
        <Column field="email" title="Email" />
      </Grid>
    </div>
  );
};

export default UserList;
