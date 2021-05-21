import React from 'react'
import { MapContainer, GeoJSON } from "react-leaflet"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactApexChart from "react-apexcharts";
import k_6301 from "../../../asset/json/KalimantanSelatan/6301.json"
import k_6302 from "../../../asset/json/KalimantanSelatan/6302.json"
import k_6303 from "../../../asset/json/KalimantanSelatan/6303.json"
import k_6304 from "../../../asset/json/KalimantanSelatan/6304.json"
import k_6305 from "../../../asset/json/KalimantanSelatan/6305.json"
import k_6306 from "../../../asset/json/KalimantanSelatan/6306.json"
import k_6307 from "../../../asset/json/KalimantanSelatan/6307.json"
import k_6308 from "../../../asset/json/KalimantanSelatan/6308.json"
import k_6309 from "../../../asset/json/KalimantanSelatan/6308.json"
import k_6310 from "../../../asset/json/KalimantanSelatan/6309.json"
import k_6311 from "../../../asset/json/KalimantanSelatan/6311.json"
import k_6371 from "../../../asset/json/KalimantanSelatan/6371.json"
import k_6372 from "../../../asset/json/KalimantanSelatan/6372.json"
import k_63 from "../../../asset/json/KalimantanSelatan/63.json"
import Man from '../../../asset/images/human-man.png'
import Woman from '../../../asset/images/human-girl.png'
import '../../../component/FontAwesome/FontAwesome'
import "leaflet/dist/leaflet.css"
import $ from 'jquery'
const Dashboard = () => {
    const donut = {

        series: [44, 55, 13, 43, 22],
        options: {
            chart: {
                width: 380,
                type: 'pie',
            },
            labels: ['0-9 Tahun', '10-24 Tahun', '25-39 Tahun', '40-54 Tahun', '>75 Tahun'],
            title: {
                text: 'Sebaran Pasien Menurut Kelompok Usia',
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },
    };
    const updateDimensions = () => {
        if (document.getElementById('behind-map')) {
            setTimeout(() => {
                const height = document.getElementById('behind-map').offsetHeight;
                $(".leaflet-container").height(height);
                $(".map").height(height);
            }, 400);
        }

        return null
    }
    React.useEffect(() => {
        updateDimensions()
    }, [])
    return (
        <React.Fragment>
            <div className="row">
                {/* <div className="card-content-header ml-1 mt-1">
                    <FontAwesomeIcon icon={["fas", "play"]} className="mr-2" />OverView Prov Kalimantan Selatan Periode Januari s/d Maret 2021
                </div> */}
                <h5 className="text-white col-md-12"></h5>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-2">
                            <div class="mb-2 card bg-white ">
                                <div className="card-body ">
                                    <div className="card-content-header mb-4">
                                        <FontAwesomeIcon icon={["fas", "play"]} className="mr-2" />Jumlah Penduduk
                                    </div>
                                    <div className="card-value">
                                        4,076,722
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div class="mb-2 card bg-white ">
                                <div className="card-body ">
                                    <div className="card-content-header mb-4">
                                        <FontAwesomeIcon icon={["fas", "play"]} className="mr-2" />Jumlah Pasien
                                    </div>
                                    <div className="card-value">
                                        566,257(13.89%)
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div class="mb-2 card bg-white ">
                                <div className="card-body ">
                                    <div className="card-content-header mb-4">
                                        <FontAwesomeIcon icon={["fas", "play"]} className="mr-2" /> Total Biaya Faskes
                                    </div>
                                    <div className="card-value">
                                        Rp. 29.488
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div class="mb-2 card bg-white ">
                                <div className="card-body ">
                                    <div className="card-content-header mb-4">
                                        <FontAwesomeIcon icon={["fas", "play"]} className="mr-2" /> Jumlah Dokter
                                    </div>
                                    <div className="card-value">
                                        155
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div class="mb-2 card bg-white ">
                                <div className="card-body ">
                                    <div className="card-content-header mb-4">
                                        <FontAwesomeIcon icon={["fas", "play"]} className="mr-2" /> Dokter vs Penduduk
                                    </div>
                                    <div className="card-value">
                                        1 : 46,080
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div class="mb-2 card bg-white ">
                                <div className="card-body ">
                                    <div className="card-content-header mb-4">
                                        <FontAwesomeIcon icon={["fas", "play"]} className="mr-2" /> Faskes vs Penduduk
                                    </div>
                                    <div className="card-value">
                                        1 : 42,028
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3">
                    <div className="row">
                        <div className="col-md-12">
                            <div class="mb-2 card bg-white " style={{ height: 230 }}>
                                <div className="card-body ">
                                    <div className="card-content-header mb-4 mb-2">
                                        <FontAwesomeIcon icon={["fas", "play"]} className="mr-2" />Filter By
                                        </div>
                                    <div className="row">
                                        <div className="col-md-12" >
                                            <div className="row">
                                                <div class="form-group col-md-6">
                                                    <select class="form-control" id="exampleFormControlSelect1" style={{ fontSize: "14px" }}>
                                                        <option selected>Tahun</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <select class="form-control" id="exampleFormControlSelect1" style={{ fontSize: "14px" }}>
                                                        <option selected>Bulan</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <select class="form-control" id="exampleFormControlSelect1" style={{ fontSize: "14px" }}>
                                                        <option selected>Penyakit</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                </div>
                                                <div class="form-group col-md-6 mb-2">
                                                    <select class="form-control" id="exampleFormControlSelect1" style={{ fontSize: "14px"}}>
                                                        <option selected>Tipe Provider</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <select class="form-control" id="exampleFormControlSelect1" style={{ fontSize: "14px" }}>
                                                        <option selected>Tipe Covid</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <select class="form-control" id="exampleFormControlSelect1" style={{ fontSize: "14px" }}>
                                                        <option selected>Nama Kota</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div class="mb-2 card bg-white ">
                                <div className="card-body ">
                                    <div className="card-content-header mb-4">
                                        <FontAwesomeIcon icon={["fas", "play"]} className="mr-2" /> Sebaran Pasien
                                    </div>
                                    <div className="map">
                                        <MapContainer
                                            // className="widget-content-wrapper"
                                            style={{ height: 295, background: "transparent" }} scrollWheelZoom="false" zoom={7} center={[-2.9, 115.5]}>
                                            <GeoJSON
                                                data={k_63.features}
                                            />
                                            <GeoJSON
                                                data={k_6301.features}
                                            />
                                            <GeoJSON
                                                data={k_6302.features}
                                            />
                                            <GeoJSON
                                                data={k_6303.features}
                                            />
                                            <GeoJSON
                                                data={k_6304.features}
                                            />
                                            <GeoJSON
                                                data={k_6305.features}
                                            />
                                            <GeoJSON
                                                data={k_6306.features}
                                            />
                                            <GeoJSON
                                                data={k_6307.features}
                                            />
                                            <GeoJSON
                                                data={k_6308.features}
                                            />
                                            <GeoJSON
                                                data={k_6309.features}
                                            />
                                            <GeoJSON
                                                data={k_6310.features}
                                            />
                                            <GeoJSON
                                                data={k_6311.features}
                                            />
                                            <GeoJSON
                                                data={k_6371.features}
                                            />
                                            <GeoJSON
                                                data={k_6372.features}
                                            />
                                        </MapContainer>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-md-12">
                            <div class="mb-2 card bg-white ">
                                <div className="card-body  ">
                                    <div className="card-content-header mb-4 mb-2">
                                        <FontAwesomeIcon icon={["fas", "play"]} className="mr-2" />Demografi Pasien
                                    </div>
                                    <div id="behind-map" className="card-element">
                                        <div className="col-md-4">
                                            <div className="row mr-0">
                                                <div className="col-md-4">
                                                    <div className="card-paragraph-w-img">
                                                        <img src={Woman} style style={{ height: "120px" }} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="card-paragraph-w-img">
                                                            <p className="mb-0"><strong>3.046</strong> Pasien Perempuan</p>
                                                            <p>Angka Morbiditas 0.15%</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="card-paragraph-w-img">
                                                            <p className="mb-0"><FontAwesomeIcon icon={["fas", "sort-down"]} className="mr-2" />-47.97%</p>
                                                            <p>Dibandingkan tahun 2020</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mr-0">
                                                <div className="col-md-4">
                                                    <div className="card-paragraph-w-img">
                                                        <img src={Man} style style={{ height: "120px" }} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="card-paragraph-w-img">
                                                            <p className="mb-0"><strong>3.046</strong> Pasien Laki-Laki</p>
                                                            <p>Angka Morbiditas 0.15%</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="card-paragraph-w-img">
                                                            <p className="mb-0"><FontAwesomeIcon icon={["fas", "sort-down"]} className="mr-2" />-47.97%</p>
                                                            <p>Dibandingkan tahun 2020</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <ReactApexChart options={donut.options} series={donut.series} type="pie" width={350} />
                                        </div>
                                        <div className="col-md-3 ml-3 pt-0">
                                            <table class="table table-striped table-bordered" >
                                                <thead class="thead-dark">
                                                    <tr>
                                                        <th>% Angka Morbiditas</th>
                                                    </tr>
                                                </thead>
                                                <tbody style={{ cursor: "pointer" }}>
                                                    <tr>
                                                        <td
                                                            data-toggle="tooltip"
                                                            data-placement="top"
                                                            title="Kelompok Umur : 0-9 Tahun &#013; Total Pasien : 1,134 &#013; Angka Morbiditas : 0.23%"
                                                        >
                                                            Post Gen Z(0.23%)
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            data-toggle="tooltip"
                                                            data-placement="top"
                                                            title="Kelompok Umur : 10-24 Tahun &#013; Total Pasien : 1,134 &#013; Angka Morbiditas : 0.23%"
                                                        >
                                                            Gen Z(0.12%)
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            data-toggle="tooltip"
                                                            data-placement="top"
                                                            title="Kelompok Umur : 25-39 Tahun &#013; Total Pasien : 1,134 &#013; Angka Morbiditas : 0.23%"
                                                        >
                                                            Gen X(0.14%)
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            data-toggle="tooltip"
                                                            data-placement="top"
                                                            title="Kelompok Umur : 40-54 Tahun &#013; Total Pasien : 1,134 &#013; Angka Morbiditas : 0.23%"
                                                        >
                                                            Baby Boomer(0.25%)
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            data-toggle="tooltip"
                                                            data-placement="top"
                                                            title="Kelompok Umur : >75 Tahun &#013; Total Pasien : 1,134 &#013; Angka Morbiditas : 0.23%"
                                                        >
                                                            Pree Boomer(0.45%)
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <div class="mb-2 card bg-white " style={{ height: 230 }}>
                                <div className="card-body ">
                                    <div className="card-content-header" >
                                        <FontAwesomeIcon icon={["fas", "play"]} className="mr-2" />Sebaran Pasien Berdasarkan Penjamin
                                    </div>
                                    <div className="card-element form-inline">
                                        <div className="col-md-5 mt-4" style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                                            <p>Pasien Penjamin</p>
                                            <p className="h5"><strong>6,417</strong></p>
                                        </div>
                                        <div className="col-md-7 mt-4 " style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                                            <p>Pasien Penjamin Lainnya</p>
                                            <p className="h5"><strong>6,417</strong></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="mb-2 card bg-white " style={{ height: 230 }}>
                                <div className="card-body ">
                                    <div className="card-content-header" >
                                        <FontAwesomeIcon icon={["fas", "play"]} className="mr-2" />Dimensi Standart Hidup Layak
                                    </div>
                                    <div className="card-element form-inline" style={{textAlign :"center"}}>
                                        <div className="col-md-5 mt-4" style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                                            <p>Pengeluaran Perkapita</p>
                                            <p className="mb-0"><FontAwesomeIcon icon={["fas", "sort-down"]} className="mr-2" />
                                                <strong>-47.97%</strong>
                                            </p>
                                        </div>
                                        <div className="col-md-7 mt-4" style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                                            <p>Belanja Kesehatan Pertransaksi</p>
                                            <p className="mb-0"><FontAwesomeIcon icon={["fas", "sort-down"]} className="mr-2" />
                                                <strong>-47.97%</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div class="mb-2 card bg-white " style={{ height: 230 }}>
                                <div className="card-body ">
                                    <div className="card-content-header" >
                                        <FontAwesomeIcon icon={["fas", "play"]} className="mr-2" />Umur Harapan Hidup 2021
                                    </div>
                                    <div className="card-element form-inline" style={{textAlign :"center"}}>
                                        <div className="col-md-12 mt-4" style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                                            <p>Umur harapan hidup Baby Boomer 68,66 Tahun</p>
                                            <p>Angka Mordibitas 2021 Baby Boomer 0.25%</p>
                                        </div>
                                    </div>
                                    {/* <div className="mt-2" style={{ display: "flex", justifyContent: "center" }}>
                                        <strong>66.86 Tahun</strong>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <strong>Baby Boomer</strong>
                                    </div>
                                    <div className="mt-1" style={{ display: "flex", justifyContent: "center" }}>
                                        Angka Mordibitas 2021
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        Baby Boomer
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        0.25%
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </React.Fragment>


    );
}

export default Dashboard


// element
{/* <div className="row">
                
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-12">
                            <div class="mb-2 card bg-white " style={{ height: 100 }}>
                                asds
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div class="mb-2 card bg-white " style={{ height: 100 }}>
                                asds
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="mb-2 card bg-white " style={{ height: 100 }}>
                                asds
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="mb-2 card bg-white " style={{ height: 100 }}>
                                asds
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}