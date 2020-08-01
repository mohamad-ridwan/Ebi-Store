import React from 'react'

import '../CntPromoMinggu/CntPromoMinggu.css'
import CntPromoMingguE from './CntPromoMingguE'

const CntPromoMinggu = function () {

    const [CntPmM, setCntPmM] = React.useState()

    React.useEffect(function () {
        fetch('http://localhost:3003/CntPromoMinggu', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(pmM => pmM.json())
            .then(dataPm => {
                setCntPmM(dataPm)
            })
    }, [])

    return (
        <>
            {
                CntPmM ? CntPmM.map(function (i) {
                    return (
                        <CntPromoMingguE container={i.container} />
                    )
                    // When condition loading WORK
                }) : (
                        <div className="load-pm-m">
                            <p>MEMUAT</p>
                        </div>
                    )
            }
        </>
    )
}

export default CntPromoMinggu