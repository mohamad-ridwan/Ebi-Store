// Import to React
import React from 'react'
// END Import to React

// Import to FILE Directory
import FooterE from './FooterE'
// END Import to FILE Directory

// Import to CSS for Footer
import '../Footer/Footer.css'
// END Import to CSS for Footer

// Create Component for Footer
// Lakukan dengan return()
const Footer = function () {

    // Dummy data for FooterE
    const [fotE, setFotE] = React.useState()
    // END Dummy data for FooterE

    // Create API for get data from JSON for FooterE
    // Lakukan dengan function FETCH
    React.useEffect(function () {
        fetch('http://localhost:3003/FooterE', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(datFE => datFE.json())
            .then(dataE => {
                setFotE(dataE)
            })
    }, [])
    // END Create API for get data from JSON for FooterE

    return (
        <>
            {/* Get data from JSON yg telah di buat API */}
            {/* Lakukan ternary operation */}
            {/* Dengan condition ? yaitu if true : if false */}
            {/* Lakukan return di dalam function map */}
            {
                fotE ? fotE.map(function (i) {
                    return (
                        <FooterE jdlFollow={i.jdlFollow} iconFacebook={i.iconFacebook} iconTwitter={i.iconTwitter} iconInstagram={i.iconInstagram} iconGoogle={i.iconGoogle} jdlDesc={i.jdlDesc} txt1Desc={i.txt1Desc} txt2Desc={i.txt2Desc} txt3Desc={i.txt3Desc} txt4Desc={i.txt4Desc} txt5Desc={i.txt5Desc} txt6Desc={i.txt6Desc} txt7Desc={i.txt7Desc} txt8Desc={i.txt8Desc} txtInfo1={i.txtInfo1} txtInfo2={i.txtInfo2} iconWhatsApp={i.iconWhatsApp} txtNoWa={i.txtNoWa} txtWarning={i.txtWarning} titleRekening={i.titleRekening} linkRekening={i.linkRekening} titleLangkah={i.titleLangkah} titleAlamat={i.titleAlamat} address1={i.address1} address2={i.address2} address3={i.address3} address4={i.address4} />
                    )
                    // When Condition loading WORK
                }) : (
                        <div className="load-footer">
                            <p>LOADING FOOTER</p>
                        </div>
                    )
            }
            {/* END Get data from JSON yg telah di buat API */}
        </>
    )
}
// END Create Component for Footer

// Export default for Footer
export default Footer
// END Export default for Footer