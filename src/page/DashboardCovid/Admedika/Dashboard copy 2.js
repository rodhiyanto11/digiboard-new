import React from 'react'
import "../../../../src/page/DashboardCovid/Admedika/Dashboard.scss"
import HeaderContent from "../../../component/Content/HeaderContent"
import CardContent from "../../../component/Content/CardContent"
import Map from '../../../component/Leaflet/Map'
import '../../../../src/component/Leaflet/Map.scss'
import indoData from "../../../component/Leaflet/data/indonesia_new.json"
import world from "../../../component/Leaflet/data/countries.json"
import indonesia_point from "../../../component/Leaflet/data/indonesia_maker.json"
import LineBasic from "../../../component/Apex/LineBasic/LineBasic"
import BrushChart from "../../../component/Apex/BrushChart/BrushChart"
import CardComponent from '../../../component/Content/CardComponent'
import Example from '../../../component/Apex/example'
const Dashboard = () => {
    const [state, setState] = React.useState({
        cardValue: []
    })
    const data = {
        headerContent: {
            pageTitleIcon: "code",
            pageTitle: "Covid 19",
            pageTitleSubheading: "Dashboard Covid 19 pada negara indonesia"
        },
        cardcontent1: {
            cardType: "card",
            cardTitle: "Total Provider",
            cardSubHead: "",
            cardSource: "",
            cardWidthLarge: "4",
            cardWidthMedium: "4",
            cardWidthSmall: "4",
            cardTheme: "bg-green-gojek",
            dashboard : "covid" ,
            type : "get_total_provider",
            cardSort : "up",
            updown : true

        },
        cardcontent2: {
            cardType: "card",
            cardTitle: "Total Patient",
            cardSubHead: "",
            cardSource: "409",
            cardWidthLarge: "4",
            cardWidthMedium: "4",
            cardWidthSmall: "4",
            cardTheme: "bg-blue-lighten-1",
            dashboard : "covid" ,
            type : "get_total_patient",
            cardSort : "down",
            updown : true
        },
        cardcontent3: {
            cardType: "card",
            cardTitle: "Total Payor",
            cardSubHead: "",
            cardSource: "",
            cardWidthLarge: "4",
            cardWidthMedium: "4",
            cardWidthSmall: "4",
            cardTheme: "bg-pink-darken-1",
            dashboard :"covid" ,
            type:"get_total_payor",
            cardSort : "up",
            updown : true
        },
        cardcontent4: {
            cardType: "card",
            cardTitle: "Open Case",
            cardSubHead: "",
            cardSource: "5",
            cardWidthLarge: "6",
            cardWidthMedium: "6",
            cardWidthSmall: "6",
            cardTheme: "bg-purple-darken-3",
            dashboard : "covid" ,
            type :"get_total_case",
            cardSort : "down",
            updown : true
        },
        cardcontent5: {
            cardType: "card",
            cardTitle: "Discharged",
            cardSubHead: "",
            cardSource: "1.111",
            cardWidthLarge: "6",
            cardWidthMedium: "6",
            cardWidthSmall: "6",
            cardTheme: "bg-red-darken-2",
            dashboard : "covid" ,
            type :"get_total_discharged",
            cardSort : "up",
            updown : true
        },
        map: {
            sourceData: indoData,
            sourceWorld: world,
            sourceMaker: indonesia_point,
            height: "30vh",
            zoomMap: "4",
            cardWidthLarge: "12",
            cardWidthMedium: "12",
            scaleZoom: { zoomCenter: [0, 120] },
            widthMedium: 12,
            widthLarge: 10,

        },
        top10provider : {
            cardTitle : "Top 10 cases on providers",
            cardWidthLarge: "4",
            cardWidthMedium: "4",
            height : "",
            width : "",
            dashboard : "covid",
            type:"get_provider" 
        },
        top10payor : {
            cardTitle : "Top 10 cases  on payors",
            cardWidthLarge: "4",
            cardWidthMedium: "4",
            height : "",
            width : "",
            dashboard : "covid",
            type:"get_payor" 
        },
        milestone : {
            cardTitle : "Data Pergerakan Kasus",
            cardWidthLarge: "4",
            cardWidthMedium: "4",
            height : "",
            width : "",
            dashboard : "covid",
            type:"get_milestone" 
        }


    }


    return (
        <React.Fragment>
            <div className="row">
                {/* <div className="col-md-12">
                    <div class="row">
                        <HeaderContent data={data.headerContent} />
                    </div>
                </div> */}
                <div className="col-md-6">
                    {/* <div className="row"> */}
                        <HeaderContent data={data.headerContent} />
                    {/* </div> */}
                    <div className="row">
                        <CardComponent data={data.cardcontent5}/>
                        <CardComponent data={data.cardcontent4} />
                    </div>
                    
                    <div className="row">
                        <CardComponent data={data.cardcontent3} />
                        <CardComponent data={data.cardcontent2} />
                        <CardComponent data={data.cardcontent1} />
                    </div>
                </div>
                <div className="col-md-6">
                    <div class="row">
                    <Map data={data.map} type="get_map_covid" dashboard="covid" text="Peta Sebaran Covid"/>
                        
                    </div>
                </div>
                
                <div className="col-md-12">
                    <div className="row">
                    <LineBasic data={data.top10payor} />
                    <LineBasic data={data.top10provider} />
                    <BrushChart data={data.milestone}/> 
                    </div>
                </div>
                {/* <div className="col-md-6">
                    <div className="row">
                    
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="row">
                        <BrushChart data={data.milestone}/> 
                    </div>
                </div> */}
            </div>
           
        </React.Fragment>
        // <div className="row">
            
        //     <HeaderContent data={data.headerContent} />
        //     <div className="form-inline">
        //     <div class="row">
        //         <div class="col-md-12">
                
        //         <CardComponent data={data.cardcontent5} />
        //         <CardComponent data={data.cardcontent4} />
        //         <CardComponent data={data.cardcontent1} />
        //         <CardComponent data={data.cardcontent2} />
        //         <CardComponent data={data.cardcontent3} />
        //         </div>
        //     </div>
        //     <div class="row">
        //         <div class="col-md-12">
                
        //         <CardComponent data={data.cardcontent5} />
        //         <CardComponent data={data.cardcontent4} />
        //         <CardComponent data={data.cardcontent1} />
        //         <CardComponent data={data.cardcontent2} />
        //         <CardComponent data={data.cardcontent3} />
        //         </div>
        //     </div>
        //     </div>
        //     <div class="row">
        //     <CardComponent data={data.cardcontent5} />
        //         {/* <Map data={data.map} dashboard="covid" type="get_map_covid" text="Peta Sebaran Covid" />
        //         <LineBasic data={data.top10provider} />
                
                
                
                
        //         <BrushChart data={data.milestone}/>
        //         <LineBasic data={data.top10payor} /> */}
        //         {/* <CardComponent widthLarge="6" data={data.cardcontent1}/> */}

        //         {/* <CardContent data={data.cardcontent1} dashboard = "covid" type="get_total_provider"/>
        //         <CardContent data={data.cardcontent2} dashboard = "covid" type="get_total_patient"/>
        //          <CardContent data={data.cardcontent3} dashboard = "covid" type="get_total_payor"/>
        //         <CardContent data={data.cardcontent4} dashboard = "covid" type="get_total_case"/>
        //         <CardContent data={data.cardcontent5} dashboard = "covid" type="get_total_discharged"/> */}

        //         {/* <LineBasic dashboard = "covid" type="get_provider" text="List Provider" />
               
        //         <LineBasic dashboard = "covid" type="get_payor" text="List Payor"/>
        //         <BrushChart/> */}
        //         {/* <LineBarColor dashboard = "covid" type="get_provider" words={(text) => getWord(text)}/> */}
        //     </div>

        //     <div className="row">
                

        //         {/* <LineBasic dashboard = "covid" type="get_provider" text="List Provider"/>
        //     <LineBasic dashboard = "covid" type="get_provider" text="List Provider"/> */}
        //     </div>
        // </div>


    );
}

export default Dashboard