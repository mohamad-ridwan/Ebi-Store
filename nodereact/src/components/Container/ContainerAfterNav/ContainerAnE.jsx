// Import to React
import React, { useState, useEffect } from 'react'
// END Import to React

// Import to React Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// END Import to React Router

// Import to FILE Directory
import DescriptionWeb from '../DescriptionWeb/DescriptionWeb'
import JdlPromoBesar from '../JdlPromoBesar/JdlPromoBesar'
import CntPromoBesar from '../CntPromoBesar/CntPromoBesar'
import JdlSemuaRasa from '../JdlSemuaRasa/JdlSemuaRasa'
import CntSemuaRasa from '../CntSemuaRasa/CntSemuaRasa'
import JdlSerba10rb from '../JdlSerba10rb/JdlSerba10rb'
import CntSerba10rb from '../CntSerba10rb/CntSerba10rb'
import JdlSerba15rb from '../JdlSerba15rb/JdlSerba15rb'
import CntSerba15rb from '../CntSerba15rb/CntSerba15rb'
import JdlPromoAkhirPekan from '../JdlPromoAkhirPekan/JdlPromoAkhirPekan'
import CntPromoAkhirPekan from '../CntPromoAkhirPekan/CntPromoAkhirPekan'
import JdlChallange from '../JdlChallange/JdlChallange'
import CntChallangeE from '../CntChallange/CntChallangeE'
import Footer from '../Footer/Footer'
import BtnNotifPromoE from '../BtnNotifPromo/BtnNotifPromoE'
// END Import to FILE Directory

// Import to CSS for ContainerAnE
import '../ContainerAfterNav/ContainerAnE.css'
// END Import to CSS for ContainerAnE

// Create Component for ContainerAnE
// Lakukan dengan return()
const ContainerAnE = function (get) {
    return (
        <>
            <div className={get.container}>
                {/* Desciption Web */}
                <DescriptionWeb />
                {/* END Description Web */}

                {/* Judul Promo Besar */}
                <JdlPromoBesar />
                {/* END Judul Promo Besar */}

                {/* Content Promo Besar */}
                <CntPromoBesar />
                {/* END Content Promo Besar */}

                {/* Judul Dengan Semua Rasa */}
                <JdlSemuaRasa />
                {/* END Judul Dengan Semua Rasa */}

                {/* Content Dengan Semua Rasa */}
                <CntSemuaRasa />
                {/* END Content Dengan Semua Rasa */}

                {/* Judul Serba 10rb */}
                <JdlSerba10rb />
                {/* END Judul Serba 10rb */}

                {/* Content Serba 10rb */}
                <CntSerba10rb />
                {/* END Content Serba 10rb */}

                {/* Judul Serba 15rb */}
                <JdlSerba15rb />
                {/* END Judul Serba 15rb */}

                {/* Content Serba 15rb */}
                <CntSerba15rb />
                {/* END Content Serba 15rb */}

                {/* Judul Promo Akhir pekan */}
                <JdlPromoAkhirPekan />
                {/* END Judul Promo Akhir pekan */}

                {/* Content Promo Akhir Pekan */}
                <CntPromoAkhirPekan />
                {/* END Content Promo Akhir Pekan */}

                {/* Judul Challange */}
                <JdlChallange />
                {/* END Judul Challange */}

                {/* Content Challange */}
                <CntChallangeE />
                {/* END Content Challange */}

                {/* Footer */}
                <Footer />
                {/* END Footer */}

                {/* Button Notif Promo */}
                <BtnNotifPromoE />
                {/* END Button Notif Promo */}
            </div>
        </>
    )
}
// END Create Component for ContainerAnE

// Export default for ContainerAnE
export default ContainerAnE
// END Export default for ContainerAnE