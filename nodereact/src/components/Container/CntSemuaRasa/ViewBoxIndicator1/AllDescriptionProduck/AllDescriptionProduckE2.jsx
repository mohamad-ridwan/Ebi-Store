import React from 'react'

import './AllDescriptionProduckE2.css'

const AllDescriptionProduckE2 = function (get) {
    return (
        <>
            {/* Kolom Description Product */}
            <div className="col-jdl-desk-all-desk-produck">
                <p className="jdl-dsk">
                    {get.jdlDsk}
                </p>
                <div className="col-txt-dsk">
                    <p className="txt-dsk-produck">
                        {get.txtDskProduct}
                    </p>
                </div>
            </div>
            {/* END Kolom Description Product */}
            {/* Kolom Komposisi Product */}
            <div className="col-jdl-komp-all-desk-produck">
                <p className="jdl-komp">
                    {get.jdlKomp}
                </p>
                <div className="col-txt-komp">
                    <p className="txt-komp-produck">
                        {get.txtKompProduct}
                    </p>
                </div>
            </div>
            {/* END Kolom Komposisi Product */}
        </>
    )
}

export default AllDescriptionProduckE2