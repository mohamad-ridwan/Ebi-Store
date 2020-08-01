import React from 'react'

import '../CntPromoSabtu/CntPromoSabtu.css'
import CntPromoSabtuE from './CntPromoSabtuE'

const CntPromoSabtu = function () {

    const [dumPrmSabtu, setDumPrmSabtu] = React.useState()

    React.useEffect(function () {
        fetch('http://localhost:3003/CntPromoSabtu', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(prmSabtu => prmSabtu.json())
            .then(data => {
                setDumPrmSabtu(data)
            })
    }, [])

    return (
        <>
            {
                dumPrmSabtu ? dumPrmSabtu.map(function (i) {
                    return (
                        <CntPromoSabtuE container={i.container} />
                    )
                    // When Condition loadin WORK
                }) : (
                        <div className="load-P-sabtu">
                            <p>Memuat trosss</p>
                        </div>
                    )
            }
        </>
    )
}

export default CntPromoSabtu