import React, { useContext, useEffect, useState } from 'react';
import Calendar from '@sbmdkl/nepali-datepicker-reactjs';
import '@sbmdkl/nepali-datepicker-reactjs/dist/index.css';
import { DataContext } from '../../ContextAPI/data';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form1 = ({ id, details }) => {
  const { apiData } = useContext(DataContext);
  const [api, setapi] = apiData;
  const [inputFields, setInputFields] = useState([
    { goodname: '', specification: '', quantity: '' },
  ]);
  const initialFormState = {
    department: '',
    goods: [],
    date: '',
    fiscalyear: '',
    customername: '',
    departmentid: '',
  };

  const [data, setdata] = useState(initialFormState);
  const { departmentsData } = useContext(DataContext);
  const [departments, setDepartments] = departmentsData;

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === 'goodname') {
      values[index].goodname = event.target.value;
    } else if (event.target.name === 'specification') {
      values[index].specification = event.target.value;
    } else {
      values[index].quantity = event.target.value;
    }

    setInputFields(values);
    setdata({ ...data, goods: values });
  };

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ goodname: '', specification: '', quantity: '' });
    setInputFields(values);
    setdata({ ...data, goods: values });
  };

  const handleRemoveFields = (index) => {
    console.log('index', index);
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
    setdata({ ...data, goods: values });
  };

  const onSubmit = async () => {
    console.log('data', data);
    await axios
      .post(`${api}/api/details?populate=*`, {
        data: data,
      })
      .then((response) => {
        setdata(initialFormState);
        successNotification();
        setInterval(() => {
          window.location.reload();
        }, 1500);
      })
      .catch((error) => {
        errorNotification();
      });
  };

  const successNotification = () =>
    toast.success('Data successfully submitted', {
      position: 'top-right',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const errorNotification = () => {
    toast.error('Error, data not submitted', {
      position: 'top-right',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <div className='mb-2'>
        <p className='text-2xl dark:text-white'>फारम नं १ </p>
      </div>
      <hr className='mb-5' />
      <form>
        <div className='flex flex-wrap md:flex-row flex-col'>
          <div className='mb-6 grow md:mr-5'>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Year
            </label>
            <input
              type='text'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
              placeholder='yyyy/mm/dd'
              value={data.date}
              onChange={(e) =>
                setdata({
                  ...data,
                  date: e.target.value,
                })
              }
              required
            />
          </div>
          <div className='mb-6 grow md:mr-5'>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              AAwo
            </label>
            <input
              type='text'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
              placeholder='yyyy/mm/dd'
              value={data.date}
              onChange={(e) =>
                setdata({
                  ...data,
                  date: e.target.value,
                })
              }
              required
            />
          </div>
          <div className='mb-6  grow'>
            <label
              htmlFor='text'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Karyalaya
            </label>
            <input
              type='text'
              id='text'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
              value={data.customername}
              onChange={(e) =>
                setdata({
                  ...data,
                  customername: e.target.value,
                })
              }
              required
            />
          </div>
        </div>
        {/* <div className='mb-6'>
          <label
            htmlFor='countries'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
          >
            शाखा छान्नुहोस्
          </label>
          <select
            id='countries'
            onChange={(e) =>
              setdata({
                ...data,
                department: e.target.value,
                departmentid: parseInt(e.target.value),
              })
            }
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
          >
            <option value='' defaultValue disabled>
              Select one...
            </option>
            {departments.map((department) => (
              <option key={department.id} value={department.id}>
                {department.attributes.name}
              </option>
            ))}
          </select>
        </div> */}

        <hr className='mb-5' />
        <div className='mb-6'>
          <div className='flex justify-between items-center mb-2'>
            <label
              htmlFor='text'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Monthly data
            </label>
            <button
              type='button'
              onClick={() => handleAddFields()}
              className='flex justify-center items-center py-2 px-3 text-xs font-medium text-center text-white bg-red-500 rounded-lg'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 mr-2'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z'
                  clipRule='evenodd'
                />
              </svg>
              <span>नया</span>
            </button>
          </div>
          {inputFields.map((inputField, index) => {
            return (
              <div
                key={index}
                className='my-3 flex-col justify-center items-center space-x-5 border-2 p-4'
              >
                <div className='flex mb-3'>
                  <select
                    id='countries'
                    onChange={(e) =>
                      setdata({
                        ...data,
                        department: e.target.value,
                        departmentid: parseInt(e.target.value),
                      })
                    }
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                  >
                    <option value='' defaultValue disabled>
                      Select one...
                    </option>
                    <option value=''>Dudh tatha dudh padartha</option>
                    <option value=''>Teltahta gheu janya</option>
                    <option value=''>Fal tatha saagpat</option>
                    {/* {departments.map((department) => (
              <option key={department.id} value={department.id}>
                {department.attributes.name}
              </option>
            ))} */}
                  </select>
                  {/* <input
                    type='text'
                    className='w-full mr-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                    required
                    name='goodname'
                    value={inputField.goodname}
                    placeholder='Khadyanna'
                    onChange={(event) => handleInputChange(index, event)}
                  /> */}
                  <button
                    type='button'
                    className='py-2 px-3 text-xs font-medium text-center text-white bg-red-500 rounded-lg'
                    onClick={() => handleRemoveFields(index)}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </button>
                </div>

                <div className='flex mb-3 space-x-3'>
                  <input
                    type='text'
                    className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                    required
                    name='specification'
                    value={inputField.specification}
                    placeholder='Shrawan'
                    onChange={(event) => handleInputChange(index, event)}
                  />
                  <input
                    type='text'
                    className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                    required
                    name='quantity'
                    value={inputField.quantity}
                    placeholder='Bhadra'
                    onChange={(event) => handleInputChange(index, event)}
                  />
                  <input
                    type='text'
                    className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                    required
                    name='quantity'
                    value={inputField.quantity}
                    placeholder='Ashwin'
                    onChange={(event) => handleInputChange(index, event)}
                  />
                  <input
                    type='text'
                    className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                    required
                    name='quantity'
                    value={inputField.quantity}
                    placeholder='Kartik'
                    onChange={(event) => handleInputChange(index, event)}
                  />
                  <input
                    type='text'
                    className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                    required
                    name='quantity'
                    value={inputField.quantity}
                    placeholder='Mangsir'
                    onChange={(event) => handleInputChange(index, event)}
                  />
                  <input
                    type='text'
                    className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                    required
                    name='quantity'
                    value={inputField.quantity}
                    placeholder='Poush'
                    onChange={(event) => handleInputChange(index, event)}
                  />
                </div>

                <div className='flex mb-3 space-x-3'>
                  <input
                    type='text'
                    className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                    required
                    name='quantity'
                    value={inputField.quantity}
                    placeholder='Magh'
                    onChange={(event) => handleInputChange(index, event)}
                  />
                  <input
                    type='text'
                    className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                    required
                    name='quantity'
                    value={inputField.quantity}
                    placeholder='Falgun'
                    onChange={(event) => handleInputChange(index, event)}
                  />
                  <input
                    type='text'
                    className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                    required
                    name='quantity'
                    value={inputField.quantity}
                    placeholder='Chaitra'
                    onChange={(event) => handleInputChange(index, event)}
                  />
                  <input
                    type='text'
                    className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                    required
                    name='quantity'
                    value={inputField.quantity}
                    placeholder='Baisakh'
                    onChange={(event) => handleInputChange(index, event)}
                  />
                  <input
                    type='text'
                    className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                    required
                    name='quantity'
                    value={inputField.quantity}
                    placeholder='Jestha'
                    onChange={(event) => handleInputChange(index, event)}
                  />
                  <input
                    type='text'
                    className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                    required
                    name='quantity'
                    value={inputField.quantity}
                    placeholder='Ashar'
                    onChange={(event) => handleInputChange(index, event)}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <button
          type='button'
          onClick={onSubmit}
          className='text-white disabled:opacity-75 disabled:cursor-not-allowed bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          disabled={!data.department}
        >
          Submit
        </button>
        <ToastContainer />
      </form>
    </>
  );
};

export default Form1;