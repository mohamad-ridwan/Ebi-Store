// Import to React
import React from 'react'
// END Import to React

// Import to FILE Directory
import Container from './Container'
// END Import to FILE Directory

// Import to CSS for ContainerW
import '../Container/ContainerW.css'
// END Import to CSS for ContainerW

// Create Component for ContainerW
const ContainerW = function () {

    // Dummy data
    const [dummyCont, setDummyCont] = React.useState()
    // END Dummy data

    // Buat API untuk mengambil data dari JSON
    // Lakukan dengan function FETCH
    React.useEffect(function () {
        fetch('http://localhost:3006/container', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(dataCont => dataCont.json())
            .then(data => {
                setDummyCont(data)
            })
    }, [])

    // END Buat API untuk mengambil data dari JSON

    return (
        <>
            <div className="wadah-container">
                {/* Ambil data dari JSON yang sudah dibuat API */}
                {/* Lakukan ternary operation */}
                {/* Dengan condition ? yaitu > if true : if fals */}

                {
                    dummyCont ? dummyCont.map(function (e) {
                        return (
                            <>
                                <Container cont={e.cont} />
                            </>
                        )
                        // When condition operation ternary worth FALSE
                        // Appear The Action
                    }) : (
                            <div className="w-loading">
                                <img src="macaroni.svg" alt="" className="icon-logo-web" />
                                <div className="name-logo">
                                    <p className="name1-logo">
                                        EBI
                                    </p>
                                    <p className="name2-logo">
                                        store
                                    </p>
                                </div>

                                <svg>
                                    <circle cx="20" cy="20" r="15"></circle>
                                </svg>

                                <div className="c-txt-load">
                                    <p className="txt-load1">
                                        Lo
                                    </p>
                                    <p className="txt-load2">
                                        ad
                                    </p>
                                    <p className="txt-load3">
                                        ing
                                    </p>

                                    <p className="txt-load4">
                                        Ebi
                                    </p>
                                    <p className="txt-load5">
                                        St
                                    </p>
                                    <p className="txt-load6">
                                        or
                                    </p>
                                    <p className="txt-load7">
                                        e
                                    </p>
                                </div>

                                <div className="store-logo">
                                    <img src="iconshop.svg" alt="" className="icon-shop" />
                                    <div className="w-txt">
                                        <p className="txt">
                                            App.Macaroni.Store
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                }

                {/* END Ambil data dari JSON yang sudah dibuat API */}
            </div>
        </>
    )
}
// END Create Component for ContainerW

// Export default for ContainerW
export default ContainerW
// END Export default for ContainerW