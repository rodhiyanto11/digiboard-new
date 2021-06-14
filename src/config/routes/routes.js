import React from 'react'
// const AppScreen  =  React.lazy(() => import('../../Main'));
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
    
    // {
    //     path: "/app",
    //     component: AppScreen,
    //     routes: [
    //         {
    //             path: "/app/dashboard_covid_admedika",
    //             component: DashboardCovidAdmedika
    //         },
    //         {
    //             path: "/app/dashboard-test",
    //             component: Test
    //         },
    //     ]
    // },
   
];
export default routes;