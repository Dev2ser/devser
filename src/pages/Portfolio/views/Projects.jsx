import React, { Component } from 'react';
import isotope from 'isotope-layout/js/isotope';
import $ from '../../../utils/loader';

class Projects extends Component {
  componentDidMount() {
    $(document).ready(function () {
      let $btns = $('.project-area .button-group button');

      $btns.click(function (e) {
        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
          filter: selector,
        });

        return false;
      });

      $('.project-area .button-group #btn1').trigger('click');

      $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true },
      });
    });
  }
  render() {
    return (
      <section class="project-area">
        <div class="container">
          <div class="project-title pb-5">
            <h1 class="text-uppercase title-h1">Recently Done Project</h1>
            <h1 class="text-uppercase title-h1">Quality Work</h1>
          </div>

          <div class="button-group">
            <button type="button" class="active" id="btn1" data-filter="*">
              All
            </button>
            <button type="button" data-filter=".popular">
              Popular
            </button>
            <button type="button" data-filter=".latest">
              Latest
            </button>
            <button type="button" data-filter=".following">
              Following
            </button>
            <button type="button" data-filter=".upcoming">
              Upcoming
            </button>
          </div>

          <div class="row grid">
            <div class="col-lg-4 col-md-6 col-sm-12 element-item latest">
              <div class="our-project">
                <div class="img">
                  <a class="test-popup-link" href="./img/portfolio/p1.jpg">
                    <img
                      src="./img/portfolio/p1.jpg"
                      alt="portfolio-1"
                      class="img-fluid"
                    />
                  </a>
                </div>
                <div class="title py-4">
                  <h4 class="text-uppercase">Minimul Desing</h4>
                  <span class="text-secondary">Latest, Portfolio</span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 element-item popular">
              <div class="our-project">
                <div class="img">
                  <a class="test-popup-link" href="./img/portfolio/p2.jpg">
                    <img
                      src="./img/portfolio/p2.jpg"
                      alt="portfolio-2"
                      class="img-fluid"
                    />
                  </a>
                </div>
                <div class="title py-4">
                  <h4 class="text-uppercase">Paint Wall</h4>
                  <span class="text-secondary">Popular, Portfolio</span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 element-item popular">
              <div class="our-project">
                <div class="img">
                  <a class="test-popup-link" href="./img/portfolio/p3.jpg">
                    <img
                      src="./img/portfolio/p3.jpg"
                      alt="portfolio-3"
                      class="img-fluid"
                    />
                  </a>
                </div>
                <div class="title py-4">
                  <h4 class="text-uppercase">Female light</h4>
                  <span class="text-secondary">Popular, Portfolio</span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 element-item upcoming">
              <div class="our-project">
                <div class="img">
                  <a class="test-popup-link" href="./img/portfolio/p4.jpg">
                    <img
                      src="./img/portfolio/p4.jpg"
                      alt="portfolio-4"
                      class="img-fluid"
                    />
                  </a>
                </div>
                <div class="title py-4">
                  <h4 class="text-uppercase">Fourth Air</h4>
                  <span class="text-secondary">Upcoming, Portfolio</span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 element-item upcoming">
              <div class="our-project">
                <div class="img">
                  <a class="test-popup-link" href="./img/portfolio/p5.jpg">
                    <img
                      src="./img/portfolio/p5.jpg"
                      alt="portfolio-5"
                      class="img-fluid"
                    />
                  </a>
                </div>
                <div class="title py-4">
                  <h4 class="text-uppercase">Muliple fown</h4>
                  <span class="text-secondary">Upcoming, Portfolio</span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 element-item following">
              <div class="our-project">
                <div class="img">
                  <a class="test-popup-link" href="./img/portfolio/p6.jpg">
                    <img
                      src="./img/portfolio/p6.jpg"
                      alt="portfolio-6"
                      class="img-fluid"
                    />
                  </a>
                </div>
                <div class="title py-4">
                  <h4 class="text-uppercase">Together sign</h4>
                  <span class="text-secondary">Following, Portfolio</span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 element-item following">
              <div class="our-project">
                <div class="img">
                  <a class="test-popup-link" href="./img/portfolio/p7.jpg">
                    <img
                      src="./img/portfolio/p7.jpg"
                      alt="portfolio-7"
                      class="img-fluid"
                    />
                  </a>
                </div>
                <div class="title py-4">
                  <h4 class="text-uppercase">Green Heaven</h4>
                  <span class="text-secondary">Following, Portfolio</span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 element-item following">
              <div class="our-project">
                <div class="img">
                  <a class="test-popup-link" href="./img/portfolio/p8.jpg">
                    <img
                      src="./img/portfolio/p8.jpg"
                      alt="portfolio-8"
                      class="img-fluid"
                    />
                  </a>
                </div>
                <div class="title py-4">
                  <h4 class="text-uppercase">Fly Male</h4>
                  <span class="text-secondary">Following, Portfolio</span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 element-item upcoming">
              <div class="our-project">
                <div class="img">
                  <a class="test-popup-link" href="./img/portfolio/p9.jpg">
                    <img
                      src="./img/portfolio/p9.jpg"
                      alt="portfolio-9"
                      class="img-fluid"
                    />
                  </a>
                </div>
                <div class="title py-4">
                  <h4 class="text-uppercase">Camera Lens</h4>
                  <span class="text-secondary">Upcoming, Portfolio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
