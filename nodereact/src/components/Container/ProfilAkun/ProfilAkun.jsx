import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'

import '../ProfilAkun/ProfilAkun.css'
import FormAlamat from './FormAlamat/FormAlamat'

const ProfilAkun = function () {

    // Dummy Data for Form Alamat
    let [alamat, setAlamat] = useState([])
    // END Dummy Data for Form Alamat

    // Create API for get data From JSON for Form Alamat
    React.useEffect(function () {
        fetch('http://localhost:3003/AlamatUser', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                setAlamat(data)
            })
    }, [])
    // END Create API for get data From JSON for Form Alamat

    return (
        <>
            <div className="cont-profil-akun">
                {/* Column1 */}
                {/* Bar */}
                <div className="col1-profil-akun">
                    <div className="btn-back">
                        <NavLink to='/' className="btn">
                            <i className="fas fa-arrow-left"></i>
                        </NavLink>
                    </div>
                    <div className="bar-title">
                        <p className="text-title">
                            Profil Akun
                        </p>
                    </div>
                </div>
                {/* END Bar */}
                {/* END Column1 */}

                {/* Column2 */}
                <div className="col2-profil-akun">
                    {/* Section1 */}
                    <div className="sec1-col2-p-a">
                        <a href="#" className="btn-setting">
                            <i className="fas fa-cog"></i>
                            <p className="txt-setting">
                                Setting
                            </p>
                        </a>
                    </div>
                    {/* END Section1 */}
                    {/* Section2 */}
                    <div className="sec2-col2-p-a">
                        {/* Row1 */}
                        <div className="row1">
                            <div className="circle-img-profil-akun">
                                <img src="avatarnew.jpg" alt="" className="img-p-a" />
                            </div>
                        </div>
                        {/* END Row1 */}
                        {/* Row2 */}
                        <div className="row2">
                            {/* Bagian1 */}
                            <div className="bagian1-row2">
                                <a href="#" className="btn-edit-profil">
                                    <i className="fas fa-user-edit"></i>
                                    <p className="txt-edit-profil">
                                        Edit Profil
                                    </p>
                                </a>
                            </div>
                            {/* END Bagian1 */}
                            {/* Bagian2 */}
                            <div className="bagian2-row2">
                                <div className="jdl-nama-profil">
                                    <p className="txt-jdl-nama-profil">
                                        Nama Profill
                                    </p>
                                </div>
                                <div className="ket-ferivikasi-nonferivikasi">
                                    {/* Terferivikasi */}
                                    <div className="terferivikasi">
                                        <i className="fas fa-check-circle"></i>
                                        <p className="txt-terferivikasi">
                                            Ter-ferivikasi
                                        </p>
                                    </div>
                                    {/* END Terferivikasi */}
                                    {/* Non Terferivikasi */}
                                    <div className="non-terferivikasi">
                                        <i className="fas fa-times-circle"></i>
                                        <p className="txt-non-terferivikasi">
                                            Belum Ter-ferivikasi
                                        </p>
                                    </div>
                                    {/* END Non Terferivikasi */}
                                </div>
                            </div>
                            {/* END Bagian2 */}
                            {/* Bagian3 */}
                            <div className="bagian3-row2">
                                {/* Column1 Bagian3 */}
                                <div className="col1-bagian3">
                                    <div className="nama-profil">
                                        <p className="txt-nama-profil">
                                            Mohamad Ridwan Apriyadi
                                        </p>
                                    </div>
                                </div>
                                {/* END Column1 Bagian3 */}
                                {/* Column2 Bagian3 */}
                                <div className="col2-bagian3">
                                    {/* Info Email */}
                                    <div className="info-akun-email">
                                        <div className="jdl-akun-email">
                                            <i className="fas fa-user"></i>
                                            <p className="txt-jdl-akun-email">
                                                Akun yang terhubung
                                            </p>
                                        </div>
                                        <div className="akun-email">
                                            <p className="txt-akun-email">
                                                Mr643062@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                    {/* Info Email */}
                                    {/* Info Phone */}
                                    <div className="info-akun-phone">
                                        <div className="jdl-akun-phone">
                                            <i className="fas fa-mobile-alt"></i>
                                            <p className="txt-jdl-akun-phone">
                                                Telephone yang terhubung
                                            </p>
                                        </div>
                                        <div className="akun-phone">
                                            <p className="txt-akun-phone">
                                                (+62)81383959452
                                            </p>
                                        </div>
                                    </div>
                                    {/* END Info Phone */}
                                </div>
                                {/* END Column2 Bagian3 */}
                            </div>
                            {/* END Bagian3 */}
                        </div>
                        {/* END Row2 */}
                    </div>
                    {/* END Section2 */}
                </div>
                {/* END Column2 */}

                {/* Column3 */}
                <div className="col3-profil-akun">
                    {/* Section1 */}
                    <div className="section1">
                        <i className="fas fa-map-marker-alt"></i>
                        <p className="txt-jdl-alamat">
                            Alamat Kamu :
                        </p>
                    </div>
                    {/* END Section1 */}
                    {/* Section2 */}
                    <div className="section2">
                        <i className="fas fa-exclamation-circle"></i>
                        <p className="txt-jdl-warning">
                            Kamu Belum Mengisi Data Alamat Kamu
                        </p>
                    </div>
                    {/* END Section2 */}
                    {/* Section3 */}
                    <div className="section3">
                        <i className="fab fa-wpforms"></i>
                        <p className="txt-warning-form">
                            Silahkan Isi Data Alamat Kamu Untuk Mempermudah Proses Pembayaran Kamu
                        </p>
                    </div>
                    {/* END Section3 */}
                    {/* Section4 */}
                    <div className="section4">
                        <NavLink to='/formalamat' className="btn-isi-form">
                            Isi Alamat Kamu Disini
                        </NavLink>
                    </div>
                    {/* END Section4 */}
                </div>
                {/* END Column3 */}

                {/* Column4 */}
                <div className="col4-profil-akun">
                    {/* Get data from JSON yg telah di buat API */}
                    {/* Lakukan ternary operation */}
                    {/* Dengan Condition ? yaitu if true : if false */}
                    {
                        alamat ? alamat.map(function (e) {
                            return (
                                <FormAlamat jalan={e.jalan} RtRw={e.RtRw} desaDanKecamatan={e.desaDanKecamatan} kota={e.kota} kodePos={e.kodePos} />
                            )
                            // When Condition ternary bernilai false
                            // Lakukan Aksinya
                        }) : (
                                <div className="load-form-alamat">
                                    <p>MEMUAT</p>
                                </div>
                            )
                    }
                    {/* END Get data from JSON yg telah di buat API */}
                </div>
                {/* END Column4 */}
            </div>
        </>
    )
}

export default ProfilAkun