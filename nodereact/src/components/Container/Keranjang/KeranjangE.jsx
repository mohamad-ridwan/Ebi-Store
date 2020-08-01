// Import to React
import React from 'react'
// END Import to React

// Import NavLink to React Router
import { NavLink } from 'react-router-dom'
// END Import NavLink to React Router

// Import to CSS for KeranjangE
import '../Keranjang/KeranjangE.css'
// END Import to CSS for KeranjangE

// Create Component for KeranjangE
// Lakukan dengan return()
const KeranjangE = function () {
    return (
        <>
            <div className="cont-keranjang">
                <div className="col1-k">
                    <div className="btn-back">
                        <NavLink to='/' className="i-btn-back">
                            <i className="fas fa-arrow-left"></i>
                        </NavLink>
                    </div>
                    <div className="title-bar">
                        <p className="txt-title">
                            Keranjang
                        </p>
                    </div>
                </div>
                <div className="col2-k">
                    <div className="sect-1">
                        <i className="fas fa-exclamation"></i>
                    </div>
                    <div className="sect-2">
                        <i className="fas fa-circle"></i>
                    </div>
                    <div className="sect-3">
                        <i className="fas fa-circle"></i>
                    </div>
                    <div className="sect-4">
                        <i className="fas fa-circle"></i>
                    </div>
                    <div className="sect-5">
                        <div className="circle-pop">
                            <p className="txt-pop">
                                Tidak ada makaroni yang kamu masukkan ke dalam keranjang
                            </p>
                            <i className="fas fa-smile-beam"></i>
                        </div>
                    </div>
                </div>
                <div className="col3-k">
                    <NavLink to='/' className="btn-go-home">
                        <p>Cari Makaroni Kesukaanmu</p>
                        <i className="fas fa-search"></i>
                    </NavLink>
                </div>
            </div>
        </>
    )
}
// END Create Component for KeranjangE

// Export default for KeranjangE
export default KeranjangE
// END Export default for KeranjangE