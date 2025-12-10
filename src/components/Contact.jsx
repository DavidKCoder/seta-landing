import React from 'react';

function Contact() {
  return (
      <section id="contact" className="py-5 py-lg-6 bg-dark text-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h6 className="seta-section-subtitle text-uppercase text-warning">Կապ</h6>
              <h2 className="seta-section-title text-white">Կիսվեք ձեր մարքեթինգային նպատակներով</h2>
              <p className="mt-3 text-white">
                Խնդրում ենք լրացնել ստորևի ձևը՝ ձեր բիզնեսի նպատակները և նախընտրելի բյուջեն մեզ ներկայացնելու համար։
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <form className="seta-contact-form">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Անուն</label>
                    <input type="text" className="form-control" placeholder="Ձեր անունը" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Էլ․ հասցե</label>
                    <input type="email" className="form-control" placeholder="you@example.com" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Ընկերություն</label>
                    <input type="text" className="form-control" placeholder="Ընկերության անունը" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Ամսական գովազդային բյուջե</label>
                    <select className="form-select" defaultValue="">
                      <option value="" disabled>
                        Ընտրել միջակայքը
                      </option>
                      <option>Under $5k</option>
                      <option>$5k - $20k</option>
                      <option>$20k - $50k</option>
                      <option>$50k+</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label">Ի՞նչ եք ցանկանում հասնել</label>
                    <textarea
                        rows="4"
                        className="form-control"
                        placeholder="Կիսվեք նպատակներով, ժամկետներով և կոնտեքստով։"
                    />
                  </div>
                  <div className="col-12 d-grid mt-2">
                    <button type="button" className="btn btn-warning btn-lg">
                      Ուղարկել
                    </button>
                  </div>
                  <div className="col-12">
                    <p className="small text-muted mb-0">
                      Այս ձևը ներկայումս front-end placeholder է։ Մենք կարող ենք կապակցել այն ձեր backend-ի կամ HubSpot, Mailchimp, Web3Forms նման գործիքների հետ։
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Contact;
