// Import to React
import React, { useEffect, useState } from 'react'
// END Import to React

// Import to React Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// END Import to React Router

// Import to FILE Directory
import Navbar from './Navbar/Navbar'
import Navmenu from './Navmenu/Navmenu'
import ContainerAn from './ContainerAfterNav/ContainerAn'
import NavBottomE from './NavBottom/NavBottomE'
// END Import to FILE Directory

// Import to CSS Container
import '../Container/Container.css'
import KeranjangE from './Keranjang/KeranjangE'
import FavoritE from './Favorit/FavoritE'
import AllBoxSerba10rb from './AllBoxSerba10rb/AllBoxSerba10rb'
import AllBoxSerba15rb from './AllBoxSerba15rb/AllBoxSerba15rb'
import CntPromoSabtu from './CntPromoSabtu/CntPromoSabtu'
import CntPromoMinggu from './CntPromoMinggu/CntPromoMinggu'
import AkunE from './Akun/AkunE'
import DaftarE from './Daftar/DaftarE'
import ChattingE from './Chatting/ChattingE'
import ViewBoxIndicator1E from './CntSemuaRasa/ViewBoxIndicator1/ViewBoxIndicator1E'
import RekeningE from './Rekening/RekeningE'
import ViewBoxIndicator1 from './CntSemuaRasa/ViewBoxIndicator1/ViewBoxIndicator1'
import VideoLangkahPembayaranE from './Footer/VideoLangkahPembayaran/VideoLangkahPembayaranE'
import NotifikasiE from './Notifikasi/NotifikasiE'
import CntSerba10rb from './CntSerba10rb/CntSerba10rb'
import AllCommentBox1E from './CntSemuaRasa/ViewBoxIndicator1/AllComment/AllCommentBox1E'
import AllDescriptionProduckE from './CntSemuaRasa/ViewBoxIndicator1/AllDescriptionProduck/AllDescriptionProduckE'
import PageBeranda from '../Page/PageBeranda/PageBeranda'
import PageNotifikasi from '../Page/PageNotifikasi/PageNotifikasi'
import PageKeranjang from '../Page/PageKeranjang/PageKeranjang'
import PageFavorit from '../Page/PageFavorit/PageFavorit'
import PageAkun from '../Page/PageAkun/PageAkun'
import PageDaftar from '../Page/PageDaftar/PageDaftar'
import PageViewBox1SemuaHarga from '../Page/PageViewBox1SemuaHarga/PageViewBox1SemuaHarga'
import PageAllDescriptionFoodBox1SH from '../Page/PageViewBox1SemuaHarga/PageAllDescriptionFoodBox1SH/PageAllDescriptionFoodBox1SH'
import PageAllCommentFoodBox1SH from '../Page/PageViewBox1SemuaHarga/PageAllCommentFoodBox1SH/PageAllCommentFoodBox1SH'
import PageSerba10rb from '../Page/PageSerba10rb/PageSerba10rb'
import PageSerba15rb from '../Page/PageSerba15rb/PageSerba15rb'
import PagePromoSabtu from '../Page/PagePromoAkhirPekan/PagePromoSabtu/PagePromoSabtu'
import PagePromoMinggu from '../Page/PagePromoAkhirPekan/PagePromoMinggu/PagePromoMinggu'
import PageRekening from '../Page/PageRekening/PageRekening'
import PageLangkahPembayaran from '../Page/PageLangkahPembayaran/PageLangkahPembayaran'
import ProfilAkun from './ProfilAkun/ProfilAkun'
import FormAlamat from './ProfilAkun/FormAlamat/FormAlamat'
import BuyBoxIndicator1E from './CntSemuaRasa/BuyBoxIndicator1/BuyBoxIndicator1E'
// Import to CSS Container

// Create Component for Container
// Lakukan dengan Return()
const Container = function (props) {

    // Create Variable Alias
    let [hide, setHide] = useState(false)
    // END Create Variable Alias

    // Play Function useEffect
    useEffect(() => {
        let prevScroll = window.pageYOffset
        window.onscroll = () => {
            let currentScroll = window.pageYOffset

            prevScroll > currentScroll ? setHide(false) : setHide(true)

            prevScroll = currentScroll
        }
    }, [])
    // END Play Function useEffect

    return (
        <>
            {/* Router */}
            <Router>

                <div className={props.cont}>

                    {/* Switch */}
                    <Switch>

                        {/* Route */}

                        {/* All Description Produck Box1 Semua Harga */}
                        <Route path='/allDescriptionProduckBox1SemuaHarga'>
                            {/* Body Halaman Semua Deskripsi Makanan Box1 Semua Harga*/}
                            <AllDescriptionProduckE />
                            {/* END Body Halaman Semua Deskripsi Makanan Box1 Semua Harga */}
                            {/* Page Semua Deskripsi Makanan Box1 Semua Harga */}
                            <PageAllDescriptionFoodBox1SH />
                            {/* END Page Semua Deskripsi Makanan Box1 Semua Harga */}
                        </Route>
                        {/* END All Description Produck Box1 Semua Harga */}

                        {/* All Comment Box1 Semua Harga */}
                        <Route path="/allCommentBox1SemuaHarga">
                            {/* Body Halaman Semua Komentar Box1 Semua Harga */}
                            <AllCommentBox1E />
                            {/* END Body Halaman Semua Komentar Box1 Semua Harga */}
                            {/* Page Semua Komentar Box1 Semua Harga */}
                            <PageAllCommentFoodBox1SH />
                            {/* Page Semua Komentar Box1 Semua Harga*/}
                        </Route>
                        {/* END All Comment Box1 Semua Harga */}

                        {/* Video Langkah Pembayaran */}
                        <Route path='/videoLangkahPembayaran'>
                            {/* Body Halaman Langkah Pembayaran */}
                            <VideoLangkahPembayaranE />
                            {/* END Body Halaman Langkah Pembayaran */}
                            {/* Page Langkah Pembayaran */}
                            <PageLangkahPembayaran />
                            {/* END Page Langkah Pembayaran */}
                        </Route>
                        {/* END Video Langkah Pembayaran */}

                        {/* Rekening */}
                        <Route path='/rekening'>
                            {/* Body Halaman Rekening */}
                            <RekeningE />
                            {/* END Body Halaman Rekening */}
                            {/* Page Rekening */}
                            <PageRekening />
                            {/* END Page Rekening */}
                        </Route>
                        {/* END Rekening */}

                        {/* Buy Box1 Semua Harga */}
                        <Route path='/bbox1semuaharga'>
                            <BuyBoxIndicator1E />
                        </Route>
                        {/* END Buy Box1 Semua Harga */}

                        {/* View Box1 Semua Harga*/}
                        <Route path='/vbox1semuaharga'>
                            {/* Body Halaman ViewBox1SemuaHarga */}
                            <ViewBoxIndicator1 />
                            {/* END Body Halaman ViewBox1SemuaHarga */}
                            {/* Page ViewBox1SemuaHarga */}
                            <PageViewBox1SemuaHarga />
                            {/* END Page ViewBox1SemuaHarga */}
                        </Route>
                        {/* END View Box1 Semua Harga */}

                        {/* Daftar Akun */}
                        <Route path='/daftar'>
                            {/* Body Halaman Daftar */}
                            <DaftarE />
                            {/* END Body Halaman Daftar */}
                            {/* Page Daftar */}
                            <PageDaftar />
                            {/* END Page Daftar */}
                        </Route>
                        {/* END Daftar Akun */}

                        {/* All Promo Minggu */}
                        <Route path='/promominggu'>
                            {/* Body Halaman Promo Minggu */}
                            <CntPromoMinggu />
                            {/* END Body Halaman Promo Minggu */}
                            {/* Page Promo Minggu */}
                            <PagePromoMinggu />
                            {/* END Page Promo Minggu */}
                        </Route>
                        {/* END All Promo Minggu */}

                        {/* All Promo Sabtu */}
                        <Route path='/promosabtu'>
                            {/* Body Halaman Promo Sabtu */}
                            <CntPromoSabtu />
                            {/* END Body Halaman Promo Sabtu */}
                            {/* Page Promo Sabtu */}
                            <PagePromoSabtu />
                            {/* END Page Promo Sabtu */}
                        </Route>
                        {/* END All Promo Sabtu */}

                        {/* All Serba 15rb */}
                        <Route path='/serba15rb'>
                            {/* Body Halaman All Box Serba15rb */}
                            <AllBoxSerba15rb />
                            {/* END Body Halaman All Box Serba15rb */}
                            {/* Page All Box Serba 15rb */}
                            <PageSerba15rb />
                            {/* END Page All Box Serba 15rb */}
                        </Route>
                        {/* END All Serba 15rb */}

                        {/* All Serba 10rb */}
                        <Route path='/serba10rb'>
                            {/* Body Halaman All Box Serba 10rb */}
                            <AllBoxSerba10rb />
                            {/* END Body Halaman All Box Serba 10rb */}
                            {/* Page All Box Serba 10rb */}
                            <PageSerba10rb />
                            {/* END Page All Box Serba 10rb */}
                        </Route>
                        {/* END All Serba 10rb */}

                        {/* Form Alamat */}
                        <Route path='/formalamat'>
                            <FormAlamat />
                        </Route>
                        {/* END Form Alamat */}

                        {/* Pesan */}
                        <Route path='/profilakun'>
                            <ProfilAkun />
                        </Route>
                        {/* END Pesan */}

                        {/* Akun */}
                        <Route path='/akun'>
                            {/* Body Halaman Akun */}
                            <AkunE />
                            {/* END Body Halaman Akun */}
                            {/* Page Akun */}
                            <PageAkun />
                            {/* END Page Akun */}
                        </Route>
                        {/* END Akun */}

                        {/* Notifikasi */}
                        <Route path='/notifikasi'>
                            {/* Body Halmaan Notifikasi */}
                            <NotifikasiE />
                            {/* END Body Halaman Notifikasi */}
                            {/* Page Notifikasi */}
                            <PageNotifikasi />
                            {/* END Page Notifikasi */}
                        </Route>
                        {/* END Notifikasi */}

                        {/* Favorit */}
                        <Route path='/favorit'>
                            {/* Body Halaman Favorit */}
                            <FavoritE />
                            {/* END Body Halaman Favorit */}
                            {/* Page Favorit */}
                            <PageFavorit />
                            {/* END Page Favorit */}
                        </Route>
                        {/* END Favorit */}

                        {/* Keranjang */}
                        <Route path='/keranjang'>
                            {/* Body Halaman Keranjang */}
                            <KeranjangE />
                            {/* END Body Halaman Keranjang */}
                            {/* Page Keranjang */}
                            <PageKeranjang />
                            {/* END Page Keranjang */}
                        </Route>
                        {/* END Keranjang */}

                        {/* Beranda */}
                        <Route path='/'>
                            {/* Body Halaman Beranda */}
                            {/* Navbar */}
                            <Navbar />
                            {/* END Navbar */}

                            {/* Navmenu */}
                            <Navmenu ngumpet={hide} />
                            {/* END Navmenu */}

                            {/* Container After Navbar */}
                            <ContainerAn />
                            {/* END Container After Navbar */}
                            {/* END Body Halaman Beranda */}
                            {/* Page Beranda */}
                            <PageBeranda />
                            {/* END Page Beranda */}
                        </Route>
                        {/* END Beranda */}

                        {/* END Route */}

                    </Switch>
                    {/* END Switch */}

                    {/* NavBottom */}
                    <NavBottomE />
                    {/* END NavBottom */}
                </div>

            </Router>
            {/* END Router */}
        </>
    )
}
// END Create Component for Container

// Export default for Container
export default Container
// END Export default for Container

