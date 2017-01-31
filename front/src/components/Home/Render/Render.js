import React, { PropTypes } from 'react';
import { Button, Select, Input } from 'semantic-ui-react';
import Slider from 'react-slick';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Render.css';

class Render extends React.Component {

  render() {

    const options = [
  { text: 'All', value: 'all' },
  { text: 'Articles', value: 'articles' },
  { text: 'Products', value: 'products' },
]

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  initialSlide: 0,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      //slidesToScroll: 3,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      //slidesToScroll: 2,
      initialSlide: 2
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      //slidesToScroll: 1
    }
  }]
};

    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.top}>
            <div className={s.filters}>
              <Input fluid type='text' placeholder='Search...' action>
                <input />
                <Select compact options={options} defaultValue='articles' />
                <Select compact options={options} defaultValue='products' />
              </Input>
            </div>
          </div>
          <div className={s.bottom}>
            <div className={s.activity}>
              <h2 className={s.activityTitle}>New Events</h2>
              <div className={s.sliderWrapper}>
                <Slider {...settings}>
                  <a className={s.sliderItem}>
                    <div className={s.image}>
                      <h3 className={s.title}>Event 1</h3>
                    </div>
                    <div className={s.meta}><span className={s.childTitle}>When:</span>4:00PM</div>
                    <div className={s.meta}><span className={s.childTitle}>Where:</span>Ocean Springs</div>
                  </a>
                  <a className={s.sliderItem}>
                    <div className={s.image}>
                      <h3 className={s.title}>Another Event</h3>
                    </div>
                    <div className={s.meta}><span className={s.childTitle}>When:</span>9:00AM</div>
                    <div className={s.meta}><span className={s.childTitle}>Where:</span>Biloxi</div>
                  </a>
                  <a className={s.sliderItem}>
                    <div className={s.image}>
                      <h3 className={s.title}>More</h3>
                    </div>
                    <div className={s.meta}><span className={s.childTitle}>When:</span>8:00PM</div>
                    <div className={s.meta}><span className={s.childTitle}>Where:</span>Ocean Springs</div>
                  </a>
                </Slider>
              </div>
            </div>
          </div>
          <div className={s.more}>
            <div className={s.titleWrapper}>
              <h2>What are you looking for?</h2>
            </div>
            <div className={s.moreOptions}>
              <div className={s.option}>
                <a className={s.inner}>
                  <div className={s.moreImg}></div>
                  <span className={s.optionName}>Jobs</span>
                </a>
              </div>
              <div className={s.option}>
                <a className={s.inner}>
                  <div className={s.moreImg}></div>
                  <span className={s.optionName}>Lodging</span>
                </a>
              </div>
              <div className={s.option}>
                <a className={s.inner}>
                  <div className={s.moreImg}></div>
                  <span className={s.optionName}>Things to do</span>
                </a>
              </div>
              <div className={s.option}>
                <a className={s.inner}>
                  <div className={s.moreImg}></div>
                  <span className={s.optionName}>Events</span>
                </a>
              </div>
              <div className={s.option}>
                <a className={s.inner}>
                  <div className={s.moreImg}></div>
                  <span className={s.optionName}>Restaurants</span>
                </a>
              </div>
              <div className={s.option}>
                <a className={s.inner}>
                  <div className={s.moreImg}></div>
                  <span className={s.optionName}>Real Estate</span>
                </a>
              </div>
              <div className={s.option}>
                <a className={s.inner}>
                  <div className={s.moreImg}></div>
                  <span className={s.optionName}>Classifieds</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Render);
