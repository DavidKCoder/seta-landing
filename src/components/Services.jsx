import React from 'react';
import 'animate.css';

function Services() {
  const services = [
    {
      icon: 'ri-advertisement-line',
      title: 'Վճարովի գովազդ (Paid Media)',
      description: `Կառավարում ենք Meta, Google, TikTok և այլ հարթակների գովազդային արշավները՝ ապահովելով առավելագույն արդյունք նվազագույն ծախսով։`,
      bullets: [
        'Թիրախավորում և մեդիա պլանավորում',
        'ROAS-ի և CPA-ի շարունակական օպտիմիզացում'
      ],
    },
    {
      icon: 'ri-bar-chart-2-line',
      title: 'Վերլուծություն և Performance օպտիմիզացում',
      description: `Կիրառում ենք տվյալահեն մոտեցում՝ հայտնաբերելով աճի իրական հնարավորությունները և բարձրացնելով եկամտաբերությունը բոլոր ալիքներում։`,
      bullets: [
        'KPI-ների մոնիթորինգ և հաշվետվություններ',
        'Funnels-ի և conversion rate-ի բարելավում'
      ],
    },
    {
      icon: 'ri-quill-pen-line',
      title: 'Ստեղծարար արտադրություն (Creatives)',
      description: `Ստեղծում ենք գովազդային կրեատիվներ և կոնտենտ, որոնք իրականում փոխակերպում են․ բրենդային, վիդեո, UGC և այլ ֆորմատներ։`,
      bullets: [
        'Արդյունավետ visual և video creatives',
        'UGC, product shoots և բրենդային կոնտենտ'
      ],
    },
  ];

  return (
      <section id="services" className="py-5 py-lg-6 bg-light">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <h6 className="seta-section-subtitle animate__animated animate__fadeInUp">Ծառայություններ</h6>
              <h2 className="seta-section-title animate__animated animate__fadeInUp animate__delay-1s">
                Ինչ կարող է Seta-ն կառավարել ձեր փոխարեն
              </h2>
              <p className="text-muted mt-3 animate__animated animate__fadeInUp animate__delay-2s">
                Մեր հիմնական գործառույթներն ընդգրկում են վճարովի գովազդը, performance օպտիմիզացումը,
                ստեղծարար արտադրությունը, կոնտենտը, SEO-ն և email մարքեթինգը։
              </p>
            </div>
          </div>

          <div className="row g-4">
            {services.map((service, index) => (
                <div key={service.title} className="col-md-6 col-lg-4">
                  <div
                      className="seta-service-card h-100 animate__animated animate__fadeInUp"
                      style={{
                        transition: 'transform 0.3s, box-shadow 0.3s',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.transform = 'translateY(-10px) scale(1.03)';
                        e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                      }}
                  >
                    <div className="seta-service-icon mb-3">
                      <i className={service.icon} />
                    </div>
                    <h5>{service.title}</h5>
                    <p className="text-muted small">{service.description}</p>
                    <ul className="seta-list small">
                      {service.bullets.map((bullet, i) => (
                          <li key={i}><i className="ri-check-line" /> {bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}

export default Services;
