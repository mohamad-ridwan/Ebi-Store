// Import to React
import React, { component } from 'react'
// END Import to React

// Import to CSS CntPromoBesarE
import '../CntPromoBesar/CntPromoBesarE.css'
// END Import to CSS CntPromoBesarE

// Create Component for CntPromoBesarE
// Lakukan dengan return()
const CntPromoBesarE = function (props) {
    return (
        <>
            <div className="c-p-b-c">
                <a id={props.id} href={props.href} className="c-col">
                    <img src={props.img} alt="Tidak dapat memuat gambar!" className="c-img" />
                </a>
            </div>
        </>
    )
}
// END Create Component for CntPromoBesarE

// Export default for CntPromoBesarE
export default CntPromoBesarE
// END Export default for CntPromoBesarE