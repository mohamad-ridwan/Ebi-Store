import React from 'react'

import './ViewBoxIndicator1.css'
import ViewBoxIndicator1E from './ViewBoxIndicator1E'

const ViewBoxIndicator1 = function () {

    // Dummy data for ViewBoxIndicator1E
    const [vBox1E, setvBox1E] = React.useState()
    // END Dummy data for ViewBoxIndicator1E

    // Create API for get data from JSON for ViewBoxIndicator1E
    React.useEffect(function () {
        fetch('http://localhost:3003/ViewBoxIndicatorOneE', {
            method: 'GET',
            mode: 'cors',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(datvBox1E => datvBox1E.json())
            .then(data1E => {
                setvBox1E(data1E)
            })
    }, [])
    // END Create API for get data from JSON for ViewBoxIndicator1E

    return (
        <>
            {/* Get data from JSON yg telah dibuat API */}
            {/* Lakukan ternary operation */}
            {/* Dengan Condition ? yaitu if true : if false */}
            {
                vBox1E ? vBox1E.map(function (e) {
                    return (
                        <ViewBoxIndicator1E txtJdlNamaMakanan={e.txtJdlNamaMakanan} namaProduk={e.namaProduk} priceProduk={e.priceProduk} txtJdlHargaNormal={e.txtJdlHargaNormal} priceDiscount={e.priceDiscount} txtJdlTerjualP={e.txtJdlTerjualP} txtJmP={e.txtJmP} txtTerjual={e.txtTerjual} txtJdlJmTersediaP={e.txtJdlJmTersediaP} txtStock={e.txtStock} txtJmLike={e.txtJmLike} btnLike={e.btnLike} txtLike={e.txtLike} btnFavorit={e.btnFavorit} txtFavorit={e.txtFavorit} btnKeranjang={e.btnKeranjang} txtKeranjang={e.txtKeranjang} txtJdlDeskP={e.txtJdlDeskP} txtDeskP={e.txtDeskP} toBtnLinkAllDesk={e.toBtnLinkAllDesk} txtBtnLinkAllDesk={e.txtBtnLinkAllDesk} txtKomentar={e.txtKomentar} iconKomentar={e.iconKomentar} txtTulisKomentar={e.txtTulisKomentar} />
                    )
                    // When Condition loading WORK
                }) : (
                        <div className="load-v-box-1">
                            <p>MEMUAT DATA VIEW</p>
                        </div>
                    )
            }
            {/* END Get data from JSON yg telah dibuat API */}
        </>
    )
}

export default ViewBoxIndicator1