import React from 'react';

function Pricing() {
  return (
      <section id="pricing" className="py-5 py-lg-6">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <h6 className="seta-section-subtitle">Գնային առաջարկներ</h6>
              <h2 className="seta-section-title">Ճկուն և արդյունավետ համագործակցության մոդելներ</h2>
              <p className="text-muted mt-3">
                Ընտրեք փաթեթ, որը լավագույնս համապատասխանում է ձեր բիզնեսի կարիքներին։
              </p>
            </div>
          </div>

          <div className="row g-4">

            {/* BASIC Package */}
            <div className="col-md-6 col-lg-4">
              <div className="seta-pricing-card h-100">
                <h6 className="text-uppercase text-muted small mb-2">BASIC</h6>
                <h3 className="mb-0">$X,XXX<span className="seta-pricing-period">/ամիս</span></h3>

                <p className="text-muted small mt-2">Հիմնական SMM կառավարում ստաբիլ աճի համար։</p>

                <ul className="seta-list small mt-3">
                  <li><i className="ri-check-line" /> 12–16 հրապարակում (ստատիկ + կարուսել)</li>
                  <li><i className="ri-check-line" /> 4 Reels / Short videos</li>
                  <li><i className="ri-check-line" /> Ամսական կոնտենտ պլան</li>
                  <li><i className="ri-check-line" /> Բրենդային ստանդարտիզացիա (գույներ/տոն/ոճ)</li>
                  <li><i className="ri-check-line" /> Story templates (7–10 հատ)</li>
                  <li><i className="ri-check-line" /> Հեշթեգների և նկարագրությունների օպտիմիզացիա</li>
                  <li><i className="ri-check-line" /> Ամսական ամփոփ հաշվետվություն</li>
                </ul>

                <a href="#contact" className="btn btn-outline-primary w-100 mt-3">Կապ հաստատել</a>
              </div>
            </div>

            {/* STANDARD Package — FEATURED */}
            <div className="col-md-6 col-lg-4">
              <div className="seta-pricing-card seta-pricing-card-featured h-100">
                <div className="seta-pricing-badge">Ամենապահանջվածը</div>
                <h6 className="text-uppercase text-muted small mb-2">STANDARD</h6>

                <h3 className="mb-0">$Y,YYY<span className="seta-pricing-period">/ամիս</span></h3>

                <p className="text-muted small mt-2">
                  Լավագույն համադրությունը բովանդակության, ռազմավարության և գովազդի համար։
                </p>

                <ul className="seta-list small mt-3">
                  <li><i className="ri-check-line" /> 20–24 հրապարակում ամսական</li>
                  <li><i className="ri-check-line" /> 8 Reels / Short videos</li>
                  <li><i className="ri-check-line" /> Ռազմավարական կոնտենտ պլան՝ SMART KPI-ներով</li>
                  <li><i className="ri-check-line" /> Արտահայտիչ և բրենդային գրաֆիկա</li>
                  <li><i className="ri-check-line" /> Daily Stories (20–25 հատ)</li>
                  <li><i className="ri-check-line" /> Հիմնական գովազդային արշավի կառավարում (boost/ads)</li>
                  <li><i className="ri-check-line" /> Լսարանի վերլուծություն + մրցակիցների մոնիթորինգ</li>
                  <li><i className="ri-check-line" /> Լիարժեք ամսական հաշվետվություն + առաջարկություններ</li>
                </ul>

                <a href="#contact" className="btn btn-primary w-100 mt-3">Ստանալ առաջարկ</a>
              </div>
            </div>

            {/* PRO Package */}
            <div className="col-md-6 col-lg-4">
              <div className="seta-pricing-card h-100">
                <h6 className="text-uppercase text-muted small mb-2">PRO</h6>
                <h3 className="mb-0">Custom</h3>

                <p className="text-muted small mt-2">
                  Լայնածավալ բովանդակություն, խորքային ռազմավարություն և առաջադեմ գովազդային կառավարում։
                </p>

                <ul className="seta-list small mt-3">
                  <li><i className="ri-check-line" /> 30+ հրապարակում ամսական</li>
                  <li><i className="ri-check-line" /> 12+ Reels / Short videos</li>
                  <li><i className="ri-check-line" /> Ինֆլուենսերների հետ աշխատանք + copywriting</li>
                  <li><i className="ri-check-line" /> Տարվա մարքեթինգային ռազմավարության մշակում</li>
                  <li><i className="ri-check-line" /> Պրոֆեսիոնալ վիդեոարտադրություն</li>
                  <li><i className="ri-check-line" /> Meta Ads — թիրախավորում, օպտիմիզացիա, բյուջեի կառավարում</li>
                  <li><i className="ri-check-line" /> Կրեատիվ արշավների մշակում (campaigns, sales events)</li>
                  <li><i className="ri-check-line" /> Բրենդի դիրքավորման խորհրդատվություն</li>
                  <li><i className="ri-check-line" /> Շաբաթական հաշվետվություն + աճի meeting</li>
                </ul>

                <a href="#contact" className="btn btn-outline-primary w-100 mt-3">Ամրագրել հանդիպում</a>
              </div>
            </div>

          </div>
        </div>
      </section>
  );
}

export default Pricing;
