
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

import qZone1 from '../assets/qZone1.png';
import qZone2 from '../assets/qZone2.png';
import qZone3 from '../assets/qZone3.png';



const RightSideNav = () => {
  return (
    <div>
      <div className='p-4 space-y-3 mb-6'>
        <h2 className="text-2xl">Login With</h2>
        <button className="btn btn-outline">
          <FaGoogle></FaGoogle>
          Login with Google
        </button>
        <button className="btn btn-outline">
          <FaGithub></FaGithub>
          Login with Github
        </button>
      </div>
      <div className='p-4 space-y-3 mb-6'>
        <h2 className="text-2xl">Find us on </h2>

        <a className='p-4 flex  text-lg items-center border rounded-t-lg' href="">
          <FaFacebook className='mr-3'></FaFacebook>
          <span>Facebook</span>
        </a>
        <a className='p-4 flex  text-lg items-center border-x rounded-t-lg' href="">
          <FaTwitter className='mr-3'></FaTwitter>
          <span>Twitter</span>
        </a>
        <a className='p-4 flex  text-lg items-center border rounded-t-lg' href="">
          <FaInstagram className='mr-3'></FaInstagram>
          <span>Instagram</span>
        </a>


      </div>
      <div className='p-4 space-y-3 mb-6'>
        <h2 className="text-2xl">Q Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
