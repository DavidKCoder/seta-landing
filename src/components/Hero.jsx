import React from "react";

function Hero() {
    return (
        <section
            id="home"
            className="seta-hero d-flex align-items-center"
            style={{
                backgroundImage:
                    "linear-gradient(135deg, #0062E6 0%, #4f47a5 50%, #ec1025 100%), url('https://images.pexels.com/photos/7130499/pexels-photo-7130499.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "overlay",
            }}
        >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h1 className="display-4 fw-bold mb-3">
                            Մենք զարգացնում ենք հավակնոտ բրենդերը առցանց
                        </h1>
                        <p className="lead mb-4 text-muted">
                            Ձեր բիզնեսը կարող է դառնալ շուկայի առաջատարներից,
                            և մենք գիտենք՝ ինչպես դա իրականացնել։
                        </p>
                        <div className="d-flex flex-wrap gap-2">
                            <a href="#contact" className="btn btn-primary btn-lg">Պատվիրել անվճար աուդիտ</a>
                            <a href="#about" className="btn btn-outline-light btn-lg">Ինչպես է աշխատում Seta-ն</a>
                        </div>
                        <div className="seta-hero-meta mt-4">
                            <span className="text-white"><i className="ri-check-line" /> Վստահված է 120+ բրենդերի կողմից ամբողջ աշխարհում</span>
                            <span className="text-white"><i className="ri-check-line" /> Միջին ROAS-ի աճը՝ 45%</span>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-5 mt-lg-0 text-center">
                        <div className="seta-hero-visual shadow-lg">
                            <span className="badge bg-primary mb-3">Իրական արդյունքներ. Իրական կատարողական</span>
                            <h5 className="mb-2">Քեմփեյնների արդյունքների համառոտ դիտարկում</h5>
                            <div className="row g-3 justify-content-center">
                                <div className="col-6">
                                    <div className="p-3 bg-dark text-light rounded">
                                        <div className="small">Միջին ROAS</div>
                                        <div className="h4 mb-0">3.2x</div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="p-3 bg-light rounded">
                                        <div className="small text-muted">Եկամտի աճ</div>
                                        <div className="h4 mb-0">+45%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
