import React, { Component } from 'react'
import "../../../index.scss"
import "../../../../src/page/DashboardCovid/Admedika/Dashboard.scss"
import '../../../../src/component/Leaflet/Map.scss'
import axios from 'axios'

import {
    LineBasic,
    Map,
    BrushChart,
    Card,
    HeaderContent
} from "../../../components/index"

const DashboardPayor = (props) => {
    const [state,setState] = React.useState({
        dataHeader :[],
        dataConfig : [],
        dataSource : []

    })
    const getService = async () => {
        await axios.get("control/covid_admedika")
              .then((res) => {
                    res.data.data.map((item,index) => {
                        setState((prevState) => ({...prevState,dataHeader : item}))
                    })

                    let dataConfig = []
                    res.data.data.map((item,index) => {
                        dataConfig.push(item)    
                    })
                    setState((prevState) => ({...prevState,dataConfig : dataConfig}))
              })
              .catch((err) => console.log(err))
    }
    const LineWidget = (props) => {
        return(
                <div>
                    <LineBasic data={props.data}/>
                </div>
            )
    }
    React.useEffect(() => {
        getService()
    },[])
    return (
        <div className="col-lg-12 col-md-12 content-dashboard">
            <HeaderContent data={state.dataHeader} />
            {/* {console.log(2)} */}
            <div class="row">
                {(() => {
                    let componentWidget = []
                    state.dataConfig.map((item,index) => {
                        console.log(item.widget_type_name)
                    if (item.widget_type_name == 'line'){
                        componentWidget.push(<LineWidget data={item}/>)
                    }else{
                        console.log(3)
                    }
                    })
                    return componentWidget
                })()}
            </div>
        </div>
    )

}
export default DashboardPayor