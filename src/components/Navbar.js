import { IoIosArrowBack, IoMdMic, IoMdSettings } from 'react-icons/io';

const Navbar = () => (
  <div className="d-flex justify-content-between pink p-4 fs-5">
    <IoIosArrowBack />
    <span>World Covid Statistic</span>
    <div>
      <IoMdMic />
      <IoMdSettings className="ms-3" />
    </div>
  </div>
);

export default Navbar;
