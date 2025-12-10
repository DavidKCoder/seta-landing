import React from 'react';

function Testimonials() {
  return (
      <section id="testimonials" className="py-5 py-lg-6 bg-light">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <h6 className="seta-section-subtitle">Հաճախորդների կարծիքները</h6>
              <h2 className="seta-section-title">Ի՞նչ են ասում մեր գործընկերները Seta-ի մասին։</h2>
              <p className="text-muted mt-3">
                Ստորև ներկայացված են իրական արդյունքների վրա հիմնված կարծիքներ։
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="seta-testimonial-card h-100">
                <p className="mb-3">
                  «Seta-ի թիմը մեկ ամսում ամբողջությամբ թարմացրեց մեր սոցիալական մեդիան։
                  Արդյունքում ներգրավվածությունը զգալիորեն աճեց, իսկ բովանդակությունը դարձավ
                  ավելի պրոֆեսիոնալ ու համակարգված։»
                </p>
                <h6 className="mb-0">Անի Գ.</h6>
                <span className="small text-muted">Մարկետինգի ղեկավար, Retail բրենդ</span>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="seta-testimonial-card h-100">
                <p className="mb-3">
                  «Հստակ ռազմավարությունն ու որակյալ կոնտենտը մեզ օգնեցին մեծացնել լսարանը մոտ 40%։
                  Seta-ն մատուցում է այնպիսի ծառայություն, որը իրոք տալիս է չափելի արդյունք։»
                </p>
                <h6 className="mb-0">Դավիթ Մ.</h6>
                <span className="small text-muted">Համահիմնակ, Startup ընկերություն</span>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="seta-testimonial-card h-100">
                <p className="mb-3">
                  «Գովազդային արշավների օպտիմիզացիան և բովանդակության որակը մեզ տրամադրեց
                  ավելի բարձր ROI, քան սպասում էինք։ Թիմը միշտ աշխատում է ժամկետներին համապատասխան.»
                </p>
                <h6 className="mb-0">Մարիամ Ք.</h6>
                <span className="small text-muted">Գործադիր տնօրեն, Սերվիս ոլորտ</span>
              </div>
            </div>
          </div>

        </div>
      </section>
  );
}

export default Testimonials;
