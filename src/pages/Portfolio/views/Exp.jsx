import React from 'react';

export default class Exp extends React.Component {
  componentDidMount() {
    require('../scss/Exp.css');
  }

  render() {
    return (
      <section class="brand-area">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-6 col-lg-12 col-md-12">
              <div class="first-row row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="single-brand">
                    <img src="./img/brands/logo1.png" alt="Brand-1 " />
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="single-brand">
                    <img src="./img/brands/logo2.png" alt="Brand-2 " />
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="single-brand">
                    <img src="./img/brands/logo3.png" alt="Brand-3 " />
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="single-brand">
                    <img src="./img/brands/logo4.png" alt="Brand-4" />
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="single-brand">
                    <img src="./img/brands/logo5.png" alt="Brand-5 " />
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="single-brand">
                    <img src="./img/brands/logo6.png" alt="Brand-6" />
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="single-brand">
                    <img src="./img/brands/logo7.png" alt="Brand-7 " />
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="single-brand">
                    <img src="./img/brands/logo8.png" alt="Brand-8 " />
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="single-brand">
                    <img src="./img/brands/logo9.png" alt="Brand-9" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-12 col-md-12">
              <div class="experience-area">
                <div class="d-flex flex-row years-area">
                  <h2 class="p-3 years">10</h2>
                  <h2>
                    <span>Years</span>
                    <span>Experience</span>
                    <span>Working</span>
                  </h2>
                </div>
                <div class="d-flex flex-row flex-wrap call-area">
                  <span>
                    <i class="fas fa-phone-alt fa-3x px-3"></i>
                  </span>
                  <div class="call-now">
                    <a href="#" class="text-uppercase h4 font-roboto">
                      Call Now
                    </a>
                    <span class="font-roboto py-2">(+91)-800-555-4986</span>
                  </div>
                </div>
                <div class="bg-panel"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
