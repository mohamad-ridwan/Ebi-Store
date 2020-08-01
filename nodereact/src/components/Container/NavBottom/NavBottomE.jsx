// Import to React
import React from 'react'
// END Import to React

// Import Navlink to Router DOM
import { NavLink } from 'react-router-dom'
// END Import Navlink to Router DOM

// Import to CSS for NavBottomE
import '../NavBottom/NavBottomE.css'
// END Import to CSS for NavBottomE

// Create Component for NavBottomE
// Lakukan dengan return()
const NavBottomE = function () {
    return (
        <>
            <div className="c-n-b-e">
                <div className="container-home">
                    <NavLink class="btn-navbottom" to="/">
                        <i class="fas fa-store"></i>
                        <p class="beranda">
                            Beranda
                        </p>
                    </NavLink>
                </div>

                <div class="container-shop">
                    <NavLink class="btn-navbottom" id="tombolKeranjang" to="/keranjang">
                        <i class="fas fa-cart-arrow-down"></i>
                        <p class="keranjang">
                            Keranjang
                        </p>
                    </NavLink>
                </div>

                <div class="container-favorite">
                    <NavLink class="btn-navbottom" id="tombolFavorite" to="/favorit">
                        <i class="far fa-heart"></i>
                        <p class="favorite">
                            Favorit
                        </p>
                    </NavLink>
                </div>

                <div class="container-notif">
                    <NavLink class="btn-navbottom" id="tombolNotif" to="/notifikasi">
                        <i className="fas fa-bell"></i>
                        <p className="notif">
                            Notifikasi
                        </p>
                    </NavLink>
                </div>

                <div class="container-chatting">
                    <NavLink class="btn-navbottom" id="tombolChatting" to='/profilakun'>
                        <i class="fas fa-comment-dots"></i>
                        <p class="chatting">
                            Pesan
                        </p>
                    </NavLink>
                </div>
            </div>
        </>
    )
}
// END Create Component for NavBottomE

// Export default for NavBottomE
export default NavBottomE
// END Export default for NavBottomE