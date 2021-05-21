import React from 'react'

const DashboardCovidAdmedika  = React.lazy(()=> import ('../../page/DashboardCovid/Admedika/Dashboard'));
const Test  = React.lazy(()=> import ('../../page/DashboardCovid/test/Dashboard'));

const routes = [
       
    {
        path: "/dashboard_covid_admedika",
        exact: true,
        component: DashboardCovidAdmedika,
    },
    {
        path : "/dashboard-test",
        component : Test
        
    },
   
];
export default routes;