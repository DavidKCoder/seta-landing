import React from 'react';

function Features() {
  return (
      <section id="features" className="py-5 py-lg-6">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <h6 className="seta-section-subtitle">Ինչպես է աշխատում Seta-ն</h6>
              <h2 className="seta-section-title">Պարզ, կրկնելի աճի մեթոդաբանություն</h2>
              <p className="text-muted mt-3">
                Մենք կիրառում ենք 4 քայլից բաղկացած համակարգ, որը ապահովում է կայուն և կանխատեսելի բիզնես աճ։
              </p>
            </div>
          </div>
          <div className="row g-4">

            {/* Step 1 */}
            <div className="col-md-6 col-lg-3">
              <div className="seta-feature-card text-center">
                <div className="seta-feature-icon mb-3">
                  <i className="ri-search-eye-line" />
                </div>
                <h5>Քայլ 1․ Վերլուծություն</h5>
                <p className="text-muted small mb-0">
                  Ուսումնասիրում ենք շուկան, մրցակիցներին և ձեր բիզնեսի ներկայիս ցուցանիշները՝ գտնելով իրական աճի հնարավորությունները։
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="col-md-6 col-lg-3">
              <div className="seta-feature-card text-center">
                <div className="seta-feature-icon mb-3">
                  <i className="ri-layout-masonry-line" />
                </div>
                <h5>Քայլ 2․ Մարքեթինգային ռազմավարություն</h5>
                <p className="text-muted small mb-0">
                  Ստեղծում ենք ճշգրիտ թիրախավորում, մեդիա պլանավորում և արդյունավետ առաջարկներ ձեր բրենդի համար։
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="col-md-6 col-lg-3">
              <div className="seta-feature-card text-center">
                <div className="seta-feature-icon mb-3">
                  <i className="ri-rocket-2-line" />
                </div>
                <h5>Քայլ 3․ Գովազդային արշավի մեկնարկ</h5>
                <p className="text-muted small mb-0">
                  Գործարկում ենք բազմաալիքային արշավներ՝ ապահովելով արագ սկիզբ և տվյալահեն վերահսկում։
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="col-md-6 col-lg-3">
              <div className="seta-feature-card text-center">
                <div className="seta-feature-icon mb-3">
                  <i className="ri-loop-right-line" />
                </div>
                <h5>Քայլ 4․ Օպտիմիզացում և աճ</h5>
                <p className="text-muted small mb-0">
                  Անընդհատ բարելավում ենք արշավները՝ նվազեցնելով ծախսը և բարձրացնելով եկամտաբերությունը։
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
  );
}

export default Features;
