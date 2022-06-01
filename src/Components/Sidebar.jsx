import { useContext, useEffect, useState } from 'react';
import nepalsarkarlogo from '../Assets/nepalsarkarlogo.png';
import { NavLink } from 'react-router-dom';
import { DataContext } from '../ContextAPI/data';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Sidebar = ({ showNav, setshowNav }) => {
  const [dropdown1, setdropdown1] = useState(false);
  const [dropdown2, setdropdown2] = useState(false);
  const { apiData } = useContext(DataContext);
  const [api, setapi] = apiData;
  const location = useLocation();

  const fetchGaupalika = async () => {
    try {
      const response = await axios.get(
        `${api}/api/departments?filters[type]=गाउँपालिका`
      );
      setgaupalika(response.data.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchGaupalika();
  }, []);

  return (
    <>
      <div
        className={`${
          showNav ? 'block' : 'hidden'
        } lg:block z-10 w-[100%] lg:w-[20%] mt-[6vh] lg:mt-0 h-full fixed overflow-y-auto py-4 px-3 bg-gray-200 dark:bg-gray-800`}
      >
        <div className='hidden lg:flex justify-center mb-5'>
          <img src={nepalsarkarlogo} height={100} width={100} alt='' />
        </div>
        <ul className='space-y-2'>
          <li>
            <NavLink
              to='/admin/dashboard'
              onClick={() => setshowNav(!showNav)}
              className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
            >
              <svg
                className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z'></path>
                <path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z'></path>
              </svg>
              <span className='ml-3'>ड्यासबोर्ड </span>
            </NavLink>
          </li>

          <li>
            <button
              type='button'
              className='flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
              onClick={() => setdropdown1(!dropdown1)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z' />
              </svg>
              <span
                className='flex-1 ml-3 text-left whitespace-nowrap'
                sidebar-toggle-item=''
              >
                फारम नं १
              </span>
              <svg
                sidebar-toggle-item=''
                className='w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>

            <ul className={`${dropdown1 ? 'block' : 'hidden'} py-2 space-y-2`}>
              <li>
                <NavLink
                  to='/admin/form1'
                  onClick={() => {
                    setshowNav(!showNav);
                  }}
                  className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                >
                  नया इन्ट्री
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/admin/form1report'
                  onClick={() => {
                    setshowNav(!showNav);
                  }}
                  className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                >
                  रिपोर्ट
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <button
              type='button'
              className='flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
              onClick={() => setdropdown2(!dropdown2)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z' />
              </svg>
              <span
                className='flex-1 ml-3 text-left whitespace-nowrap'
                sidebar-toggle-item=''
              >
                फारम नं २
              </span>
              <svg
                sidebar-toggle-item=''
                className='w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>

            <ul className={`${dropdown2 ? 'block' : 'hidden'} py-2 space-y-2`}>
              <li>
                <NavLink
                  to='/admin/form2'
                  onClick={() => {
                    setshowNav(!showNav);
                  }}
                  className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                >
                  नया इन्ट्री
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/admin/form2report'
                  onClick={() => {
                    setshowNav(!showNav);
                  }}
                  className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                >
                  रिपोर्ट
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink
              to='/admin/settings'
              onClick={() => setshowNav(!showNav)}
              className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='ml-3'>सेटिङ</span>
            </NavLink>
          </li>
          {/* <li>
            <a
              href='#'
              className='flex items-center bg-red-700 text-white p-2 text-base font-normal  rounded-lg dark:text-white hover:bg-red-500 dark:hover:bg-gray-700'
            >
              <svg
                className='w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z'></path>
                <path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z'></path>
              </svg>
              <span className='ml-3'>Log out</span>
            </a>
          </li> */}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
