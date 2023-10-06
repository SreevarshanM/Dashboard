// project import
import OrdersTable from './QueriesTable';
import MainCard from 'components/MainCard';
import { Grid } from '@mui/material';

const Queries = () => {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}

      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

      {/* row 2 */}

      {/* row 3 */}
      <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <OrdersTable />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={5} lg={4}></Grid>

      {/* row 4 */}
    </Grid>
  );
};

// material-ui

// ==============================|| DASHBOARD - DEFAULT ||============================== //

export default Queries;
