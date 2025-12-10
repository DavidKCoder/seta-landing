import React from 'react';
import 'animate.css'; // make sure Animate.css is installed

function Team() {
  const teamMembers = [
    { initials: 'AG', name: 'Անի Գեւորգյան', role: 'CEO & Մարքեթինգի ղեկավար' },
    { initials: 'DM', name: 'Դավիթ Մկրտչյան', role: 'Գործադիր տնօրեն & Strategy Lead' },
    { initials: 'MK', name: 'Մարիամ Քարամյան', role: 'Creative Director' },
    { initials: 'SS', name: 'Սամվել Սարգսյան', role: 'Performance Marketing Lead' },
  ];

  return (
      <section id="team" className="py-5 py-lg-6">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <h6 className="seta-section-subtitle animate__animated animate__fadeInUp">Թիմ</h6>
              <h2 className="seta-section-title animate__animated animate__fadeInUp animate__delay-1s">
                Մարդիկ, ովքեր կանգնած են Seta-ի ետևում
              </h2>
              <p className="text-muted mt-3 animate__animated animate__fadeInUp animate__delay-2s">
                Մեր թիմի հիմնական անդամներն ու ղեկավարությունը՝ պրոֆեսիոնալ մոտեցմամբ ձեր բիզնեսի համար։
              </p>
            </div>
          </div>

          <div className="row g-4">
            {teamMembers.map((member, index) => (
                <div key={member.name} className="col-md-6 col-lg-3">
                  <div
                      className="seta-team-card text-center h-100 animate__animated animate__fadeInUp"
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
                    <div
                        className="seta-team-avatar mb-3"
                        style={{
                          background: '#4f47a5',
                          color: '#fff',
                          fontWeight: '700',
                          fontSize: '1.5rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '80px',
                          height: '80px',
                          borderRadius: '50%',
                          margin: '0 auto',
                          transition: 'transform 0.3s',
                        }}
                    >
                      {member.initials}
                    </div>
                    <h6 className="mb-0 mt-2">{member.name}</h6>
                    <span className="small text-muted d-block mb-2">{member.role}</span>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}

export default Team;
