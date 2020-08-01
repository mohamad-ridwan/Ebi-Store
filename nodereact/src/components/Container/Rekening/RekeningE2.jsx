import React from 'react'

import './RekeningE2.css'

const RekeningE2 = function (get) {
    return (
        <>
            <div className="section1-rekening" id={get.id}>
                <div className="w-img-rek">
                    <img src={get.img} alt="" className="img-rek" />
                </div>
                <div className="w-no-rek">
                    <p className="txt-jdl-no-rek">
                        {get.txtNoRekening}
                    </p>
                    <p className="txt-no-rek">
                        {get.noRekening}
                    </p>
                </div>
            </div>
        </>
    )
}

export default RekeningE2