// Import to React
import React, { useState } from 'react'
// END Import to React

// Import to CSS for CntSemuaRasaE
import './CntSemuaRasaE.css'
import CntSemuaRasaE2 from './CntSemuaRasaE2'
// END Import to CSS for CntSemuaRasaE

// Create Component for CntSemuaRasaE
// Lakukan dengan return()
const CntSemuaRasaE = function (get) {

    // Dummy data
    const [dmCntSr, setDmCntSr] = React.useState()
    // END Dummy data

    // Buat API untuk mendapatkan data dari JSON
    // Lakukan dengan function FETCH
    React.useEffect(function () {
        fetch('http://localhost:3003/CntSemuaRasaE', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(datCntSrE => datCntSrE.json())
            .then(data => {
                setDmCntSr(data)
            })
    }, [])
    // END Buat API untuk mendapatkan data dari JSON

    return (
        <>

            <div className="w-carousel" id={get.id}>

                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1" class=""></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2" class=""></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3" class=""></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4" class=""></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="5" class=""></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="6" class=""></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="7" class=""></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="8" class=""></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="9" class=""></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="10" class=""></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="11" class=""></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="12" class=""></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="13" class=""></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="14" class=""></li>
                    </ol>
                    <div class="carousel-inner">
                        {/* Ambil data dari JSON yg telah di buat API */}
                        {/* Lakukan ternary operation */}
                        {/* Dengan Condition ? yaitu if true : if false */}
                        {/* Lakukan Return di dalam function map */}
                        {
                            dmCntSr ? dmCntSr.map(function (i) {
                                return (
                                    <CntSemuaRasaE2 id={i.id} carouselItem={i.carouselItem} img={i.img} txtPercent={i.txtPercent} nameProduk={i.nameProduk} harga={i.harga} hargaNormal={i.hargaNormal} potongan={i.potongan} grade={i.grade} txtTerjual={i.txtTerjual} txtStock={i.txtStock} jmStock={i.jmStock} toView={i.toView} btnView={i.btnView} toBuy={i.toBuy} btnBuy={i.btnBuy} numberI={i.numberI} />

                                )
                                // When Condition loading 
                            }) : (
                                    <div className="load-cnt-box">
                                        <svg>
                                            <circle cx="20" cy="20" r="16">

                                            </circle>
                                        </svg>
                                    </div>
                                )
                            // END When Condition loading
                        }

                        {/* END Ambil data dari JSON yg telah di buat API */}
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

            </div>
        </>
    )
}
// END Create Component for CntSemuaRasaE

// Export default for CntSemuaRasaE
export default CntSemuaRasaE
// END Export default for CntSemuaRasaE