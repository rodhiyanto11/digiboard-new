import React from 'react'
const AppScreen  = React.lazy(()=> import ('../App'));
const OauthScreen  = React.lazy(()=> import ('../Oauth'));
const AuthScreen  = React.lazy(()=> import ('../Auth'));
const DashboardCovidAdmedika  = React.lazy(()=> import ('../page/DashboardCovid/Admedika/Dashboard'));
const Test  = React.lazy(()=> import ('../page/DashboardCovid/test/Dashboard'));
const router = [
       
    // {
    //     path: "/app",
    //     exact: true,
    //     component: AppScreen,
    // },
    
    {
        path : "/auth",
        exact: true,
        component : AuthScreen
        
    },  
    {
        path : "/oauth/:token",
        exact: true,
        component : OauthScreen
        
    },  
    {
        path: "/",
        // exact: true,
        component: AppScreen,
        redirect: {
            from: '/',
            to: '/dashboard_covid_admedika',
          },
        routes: [
            {
                path: "/dashboard_covid_admedika",
                // exact: true,
                component: DashboardCovidAdmedika
            },
            {
                path: "/dashboard-test",
                // exact: true,
                component: Test
            },
        ]
    },
   
];
export default router;