import React from 'react';

function About() {
  return (
    <section id="about" className="py-5 py-lg-6 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h6 className="seta-section-subtitle">About Seta</h6>
            <h2 className="seta-section-title">Մեր նպատակը մեկն է՝ ձեր բիզնեսը պետք է տեսնեն, հիշեն և ընտրեն։
              Միասին կառուցում ենք աճող ու ճանաչելի բրենդ։</h2>
            <p className="text-muted mt-3">
              Մենք կառուցում ենք բովանդակություն և արշավներ, որոնք
              դարձնում են Ձեր բիզնեսը տարբերվող։
            </p>
            <ul className="seta-list mt-3">
              <li><i className="ri-checkbox-circle-line" /> Բարձրացնում ենք կոնվերսիան՝ ստեղծելով պարզ ու գրավիչ
                առաջարկներ
              </li>
              <li><i className="ri-checkbox-circle-line" /> Կատարում ենք արշավների ամբողջական կառավարում՝
                վերլուծությունից մինչև օպտիմիզացում
              </li>
              <li><i className="ri-checkbox-circle-line" /> Արդյունքն չափելի է՝ ավելի շատ դիմումներ և նվազեցված
                ներգրավման արժեք
              </li>
            </ul>

          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="seta-stats row g-3">
              <div className="col-6">
                <div className="seta-stat-card">
                  <h3 className="mb-0">XX+</h3>
                  <p className="mb-0 small text-muted">
                    Մեր կողմից սպասարկված հաճախորդներ
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className="seta-stat-card">
                  <h3 className="mb-0">YY%</h3>
                  <p className="mb-0 small text-muted">Միջին եկամտի աճ</p>
                </div>
              </div>
              <div className="col-6">
                <div className="seta-stat-card">
                  <h3 className="mb-0">ZZM</h3>
                  <p className="mb-0 small text-muted">Կառավարվում է գովազդային բյուջե</p>
                </div>
              </div>
              <div className="col-6">
                <div className="seta-stat-card">
                  <h3 className="mb-0">NPS</h3>
                  <p className="mb-0 small text-muted">Հաճախորդների բավարարվածության ցուցիչ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
