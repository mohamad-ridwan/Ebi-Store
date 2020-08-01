import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'

import '../FormAlamat/FormAlamat.css'

const FormAlamat = function () {

    // Create Dummy Data For Data Alamat
    let [inputData, setInputData] = useState({
        jalan: '',
        RtRw: '',
        desaDanKecamatan: '',
        kota: '',
        kodePos: ''
    })

    // END Create Dummy Data For Data Alamat

    // Create API for get data from JSON For Data Alamat
    const submitData = function () {
        fetch('http://localhost:3003/AlamatUser', {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inputData)
        })
            .then(res => {
                if (res.json()) {
                    alert('Data Alamat Sudah Tersimpan Pada Profil Kamu')
                } else {
                    alert('Data Alamat Gagal Tersimpan, Perhatikan Form Sudah Terisi Dengan Lengkap Atau Belum!')
                }
            })
    }
    // END Create API for get data from JSON For Data Alamat

    return (
        <>
            <div className="cont-form-alamat">
                {/* Column1 */}
                {/* Bar */}
                <div className="col1-form-alamat">
                    <div className="btn-back">
                        <NavLink to='/profilakun' className="btn">
                            <i className="fas fa-arrow-left"></i>
                        </NavLink>
                    </div>
                    <div className="bar-title">
                        <p className="text-title">
                            Form Alamat
                        </p>
                    </div>
                </div>
                {/* END Bar */}
                {/* END Column1 */}

                {/* Column2 */}
                <div className="col2-form-alamat">
                    <p className="jdl-form-alamat">
                        Isi Data Alamat Kamu
                    </p>
                </div>
                {/* END Column2 */}

                {/* Column3 */}
                <div className="col3-form-alamat">
                    {/* Form */}
                    <form>
                        {/* Input */}
                        {/* Input1 */}
                        <div className="input1">
                            <label htmlFor="" className="label-judul1">
                                Jalan
                            </label>
                            <input type="text" className="column-input1" onChange={function (e) {
                                setInputData({
                                    ...inputData,
                                    jalan: e.target.value
                                })
                                console.log(inputData)
                            }} required />
                        </div>
                        {/* END Input1 */}
                        {/* Input2 */}
                        <div className="input2">
                            <label htmlFor="" className="label-judul2">
                                RT / RW
                            </label>
                            <input type="text" className="column-input2" onChange={function (e) {
                                setInputData({
                                    ...inputData,
                                    RtRw: e.target.value
                                })
                                console.log(inputData)
                            }} required />
                        </div>
                        {/* END Input2 */}
                        {/* Input3 */}
                        <div className="input3">
                            <label htmlFor="" className="label-judul3">
                                Desa Dan Kecamatan
                            </label>
                            <input type="text" className="column-input3" onChange={function (e) {
                                setInputData({
                                    ...inputData,
                                    desaDanKecamatan: e.target.value
                                })
                                console.log(inputData)
                            }} required />
                        </div>
                        {/* END Input3 */}
                        {/* Input4 */}
                        <div className="input4">
                            <label htmlFor="" className="label-judul4">
                                Kota
                            </label>
                            <input type="text" className="column-input4" onChange={function (e) {
                                setInputData({
                                    ...inputData,
                                    kota: e.target.value
                                })
                                console.log(inputData)
                            }} required />
                        </div>
                        {/* END Input4 */}
                        {/* Input5 */}
                        <div className="input5">
                            <label htmlFor="" className="label-judul5">
                                Kode Pos
                            </label>
                            <input type="text" className="column-input5" onChange={function (e) {
                                setInputData({
                                    ...inputData,
                                    kodePos: e.target.value
                                })
                                console.log(inputData)
                            }} required />
                        </div>
                        {/* END Input5 */}
                        {/* END Input */}

                        {/* Button */}
                        <div className="col-button">
                            <button className="btn-form-alamat" onClick={function () {
                                submitData()
                            }}>
                                Simpan Data Alamat Kamu
                            </button>
                        </div>
                        {/* END Button */}
                    </form>
                    {/* END Form */}
                </div>
                {/* END Column3 */}
            </div>
        </>
    )
}

export default FormAlamat