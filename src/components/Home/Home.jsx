
import { Link } from 'react-router-dom';
import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';
import banner3 from '../../assets/banner3.jpg';
import banner4 from '../../assets/banner4.jpg';

const Home = () => {
  return (


    <div className="lg:flex">


      <div className="lg:w-1/2">
        <h1 className="md:text-5xl lg:pl-12 md:pl-0 ms-12 font-bold text-cyan-400">WELCOME</h1>
        <h1 className="lg:text-5xl mx-auto md:p-5 font-bold text-center">
          <span className="text-secondary">SALON &</span> HAIR CUTTING <br /> AND{' '}
          <span className="text-green-400">BEAUTI PARLER</span> <br />{' '}
          <span className="text-red-500"> SERVICE</span>{' '}
        </h1>
        <button className="btn font-semibold ms-5 px-10 py-2 'hover:bg-amber-400 bg-rose-700">
          <Link  to="/login">Explore Now</Link>
        </button>
      </div>



      <div className="lg:w-1/2 relative">
        <div className="carousel">


          <div id="slide1" className="carousel-item relative">
            <img src={banner2} className="w-full" alt="Banner 2" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide2" className="carousel-item relative hidden lg:block">
            <img src={banner1} className="w-full" alt="Banner 1" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide3" className="carousel-item relative hidden lg:block">
            <img src={banner3} className="w-full" alt="Banner 3" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide4" className="carousel-item relative hidden lg:block">
            <img src={banner4} className="w-full" alt="Banner 4" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Home;
