import React, { useContext, useEffect, useState } from 'react';

import { DataContext } from '../../../ContextAPI/data';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { NepaliDatePicker } from 'nepali-datepicker-reactjs';
import 'nepali-datepicker-reactjs/dist/index.css';
import { adToBs, bsToAd } from '@sbmdkl/nepali-date-converter';
import { data } from 'autoprefixer';

const Form1 = () => {
  const navigate = useNavigate();
  const { apiData } = useContext(DataContext);
  const [api, setapi] = apiData;
  const [inputFields, setInputFields] = useState([
    {
      khadyanna: '',
      months: {
        shrawan: 0,
        bhadra: 0,
        ashwin: 0,
        kartik: 0,
        mangsir: 0,
        poush: 0,
        magh: 0,
        falgun: 0,
        chaitra: 0,
        baisakh: 0,
        jestha: 0,
        ashar: 0,
      },
    },
  ]);
  const initialFormState = {
    date: '',
    timecode: '',
    arthikbarsha: '',
    karyalaya: '',
    collection: [
      {
        khadyanna: '',
        months: {
          shrawan: 0,
          bhadra: 0,
          ashwin: 0,
          kartik: 0,
          mangsir: 0,
          poush: 0,
          magh: 0,
          falgun: 0,
          chaitra: 0,
          baisakh: 0,
          jestha: 0,
          ashar: 0,
        },
      },
    ],
  };

  const [form1Inputs, setform1Inputs] = useState(initialFormState);
  const { fetchform1Function } = useContext(DataContext);
  const { fetchform1 } = fetchform1Function;

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === 'khadyanna') {
      values[index].khadyanna = event.target.value;
    } else if (event.target.name === 'shrawan') {
      values[index].months.shrawan = event.target.value;
    } else if (event.target.name === 'bhadra') {
      values[index].months.bhadra = event.target.value;
    } else if (event.target.name === 'ashwin') {
      values[index].months.ashwin = event.target.value;
    } else if (event.target.name === 'kartik') {
      values[index].months.kartik = event.target.value;
    } else if (event.target.name === 'mangsir') {
      values[index].months.mangsir = event.target.value;
    } else if (event.target.name === 'poush') {
      values[index].months.poush = event.target.value;
    } else if (event.target.name === 'magh') {
      values[index].months.magh = event.target.value;
    } else if (event.target.name === 'falgun') {
      values[index].months.falgun = event.target.value;
    } else if (event.target.name === 'chaitra') {
      values[index].months.chaitra = event.target.value;
    } else if (event.target.name === 'baisakh') {
      values[index].months.baisakh = event.target.value;
    } else if (event.target.name === 'jestha') {
      values[index].months.jestha = event.target.value;
    } else {
      values[index].months.ashar = event.target.value;
    }

    setInputFields(values);
    setform1Inputs({ ...form1Inputs, collection: values });
  };

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({
      khadyanna: '',
      months: {
        shrawan: 0,
        bhadra: 0,
        ashwin: 0,
        kartik: 0,
        mangsir: 0,
        poush: 0,
        magh: 0,
        falgun: 0,
        chaitra: 0,
        baisakh: 0,
        jestha: 0,
        ashar: 0,
      },
    });
    setInputFields(values);
    setform1Inputs({ ...form1Inputs, months: values });
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
    setform1Inputs({ ...form1Inputs, months: values });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`${api}/api/form1s`, {
        data: form1Inputs,
      })
      .then((response) => {
        setform1Inputs(initialFormState);
        setInputFields([
          {
            khadyanna: '',
            months: {
              shrawan: '',
              bhadra: '',
              ashwin: '',
              kartik: '',
              mangsir: '',
              poush: '',
              magh: '',
              falgun: '',
              chaitra: '',
              baisakh: '',
              jestha: '',
              ashar: '',
            },
          },
        ]);
        successNotification();
        fetchform1();
      })
      .catch((error) => {
        errorNotification();
      });
  };

  const successNotification = () =>
    toast.success('??????????????? ?????????', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const errorNotification = () => {
    toast.error('??????????????? ????????????', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    console.log('form1Inputs', form1Inputs);
  }, [form1Inputs]);

  return (
    <>
      <div className='mb-2'>
        <p className='text-2xl dark:text-white'>
          {' '}
          ??????????????? ??????/???????????? ?????????????????? ?????????????????? ??????????????? ???????????????{' '}
        </p>
      </div>
      <hr className='mb-5' />
      <form>
        <div className='flex flex-wrap md:flex-row flex-col'>
          <div className='mr-5 mb-6 md:w-[25%]  '>
            <label className=' block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
              ????????????????????????
            </label>
            <select
              name='karyalaya'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
              required
              value={form1Inputs.karyalaya}
              onChange={(e) =>
                setform1Inputs({
                  ...form1Inputs,
                  karyalaya: e.target.value,
                })
              }
            >
              <option value='' selected disabled>
                ???????????? ??????????????????????????????
              </option>
              <option value='PS'>PS</option>
              <option value='FFSQRD'>FFSQRD</option>
              <option value='NFFRL'>NFFRL</option>
              <option value='FTDND'>FTDND</option>
              <option value='FTQCO'>FTQCO</option>
              <option value='FIEQCO'>FIEQCO</option>
              <option value='FTQCDO'>FTQCDO</option>
            </select>
            {/* <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
              ????????????????????????
            </label>
            <input
              type='text'
              id='text'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
              placeholder='????????????????????????'
              value={form1Inputs.karyalaya}
              onChange={(e) =>
                setform1Inputs({
                  ...form1Inputs,
                  karyalaya: e.target.value,
                })
              }
              required
            /> */}
          </div>
          <div className='mr-5 mb-6'>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
              ??? . ???
            </label>
            <input
              type='text'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
              placeholder='??? . ???'
              value={form1Inputs.arthikbarsha}
              onChange={(e) =>
                setform1Inputs({
                  ...form1Inputs,
                  arthikbarsha: e.target.value,
                })
              }
              required
            />
          </div>
          <div className='mr-5 mb-6'>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
              ????????????
            </label>
            <NepaliDatePicker
              inputClassName='form-control'
              className='mb-6'
              value={form1Inputs.date}
              onChange={(value) => {
                const adDate = bsToAd(value);

                const newtimestamp = Date.parse(adDate);

                setform1Inputs({
                  ...form1Inputs,
                  date: value,
                  timecode: newtimestamp,
                });
              }}
              options={{ calenderLocale: 'ne', valueLocale: 'en' }}
            />
            {/* <input
              type='text'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
              placeholder='?????????????????? ????????????'
              value={form1Inputs.date}
              onChange={(e) =>
                setform1Inputs({
                  ...form1Inputs,
                  date: e.target.value,
                })
              }
              required
            /> */}
          </div>
        </div>

        <hr className='mb-5' />
        <div className='mb-6'>
          <div className='flex justify-between items-center mb-2'>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
              ??????????????? ?????????????????? ???????????? ???????????????????????????
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
              <span>?????????</span>
            </button>
          </div>
          {inputFields.map((inputField, index) => {
            return (
              <div
                key={index}
                className='my-3 flex-col justify-center items-center space-x-5 border-2 p-4'
              >
                <div className='flex mb-3 items-center justify-between'>
                  <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                    ?????? ??????. {index + 1}
                  </label>
                  <div className='flex'>
                    <button
                      type='button'
                      onClick={() => handleAddFields()}
                      className='mr-2 flex justify-center items-center py-2 px-3 text-xs font-medium text-center text-white bg-red-500 rounded-lg'
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
                      <span>?????????</span>
                    </button>
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
                </div>
                <select
                  id='countries'
                  name='khadyanna'
                  className='mr-5 mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                  required
                  value={inputField.khadyanna}
                  onChange={(event) => handleInputChange(index, event)}
                >
                  <option value='' selected disabled>
                    ???????????? ??????????????????????????????
                  </option>
                  <option value='????????? ????????? ????????? ??????????????????'>????????? ????????? ????????? ??????????????????</option>
                  <option value='????????? ????????? ????????? ????????????'>????????? ????????? ????????? ????????????</option>
                  <option value='?????? ????????? ??????????????????'>?????? ????????? ??????????????????</option>
                  <option value='????????????'>????????????</option>
                  <option value='????????????, ?????????'>????????????, ?????????</option>
                  <option value='?????????'>?????????</option>
                  <option value='??????????????????????????? ???????????? ??? ??????????????? ???????????????'>
                    ??????????????????????????? ???????????? ??? ??????????????? ???????????????
                  </option>
                  <option value='?????????. ??????????????? ????????????'>?????????. ??????????????? ????????????</option>
                  <option value='?????????????????? ??????????????????'>?????????????????? ??????????????????</option>
                  <option value='?????????????????????????????????'>?????????????????????????????????</option>
                  <option value=' ???????????? ????????? ????????????????????????'>???????????? ????????? ????????????????????????</option>
                  <option value='????????????'>????????????</option>

                  <option value='????????????'>????????????</option>
                </select>
                <div className='flex flex-wrap md:flex-nowrap mb-2 space-x-3'>
                  <div className='mb-2'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      ??????????????????
                    </label>
                    <input
                      type='number'
                      min={0}
                      className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      required
                      name='shrawan'
                      value={inputField.months.shrawan}
                      placeholder='??????????????????'
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                  <div className='mb-2'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      ?????????
                    </label>
                    <input
                      type='number'
                      min={0}
                      className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      required
                      name='bhadra'
                      value={inputField.months.bhadra}
                      placeholder='?????????'
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                  <div className='mb-2'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      ??????????????????
                    </label>
                    <input
                      type='number'
                      min={0}
                      className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      required
                      name='ashwin'
                      value={inputField.months.ashwin}
                      placeholder='??????????????????'
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                  <div className='mb-2'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      ?????????????????????
                    </label>
                    <input
                      type='number'
                      min={0}
                      className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      required
                      name='kartik'
                      value={inputField.months.kartik}
                      placeholder='?????????????????????'
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                  <div className='mb-2'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      ???????????????
                    </label>
                    <input
                      type='number'
                      min={0}
                      className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      required
                      name='mangsir'
                      value={inputField.months.mangsir}
                      placeholder='???????????????'
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                  <div className='mb-2'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      ?????????
                    </label>
                    <input
                      type='number'
                      min={0}
                      className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      required
                      name='poush'
                      value={inputField.months.poush}
                      placeholder='?????????'
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>

                  <div className='mb-2'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      ?????????
                    </label>
                    <input
                      type='number'
                      min={0}
                      className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      required
                      name='magh'
                      value={inputField.months.magh}
                      placeholder='?????????'
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                  <div className='mb-2'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      ?????????????????????
                    </label>
                    <input
                      type='number'
                      min={0}
                      className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      required
                      name='falgun'
                      value={inputField.months.falgun}
                      placeholder='?????????????????????'
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                  <div className='mb-2'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      ???????????????
                    </label>
                    <input
                      type='number'
                      min={0}
                      className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      required
                      name='chaitra'
                      value={inputField.months.chaitra}
                      placeholder='???????????????'
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>

                  <div className='mb-2'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      ???????????????
                    </label>
                    <input
                      type='number'
                      min={0}
                      className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      required
                      name='baisakh'
                      value={inputField.months.baisakh}
                      placeholder='???????????????'
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                  <div className='mb-2'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      ?????????
                    </label>
                    <input
                      type='number'
                      min={0}
                      className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      required
                      name='jestha'
                      value={inputField.months.jestha}
                      placeholder='?????????'
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                  <div className='mb-2'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      ????????????
                    </label>
                    <input
                      type='number'
                      min={0}
                      className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      required
                      name='ashar'
                      value={inputField.months.ashar}
                      placeholder='????????????'
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          type='submit'
          onClick={onSubmit}
          className='text-white disabled:opacity-75 disabled:cursor-not-allowed bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          disabled={
            !form1Inputs.karyalaya ||
            !form1Inputs.arthikbarsha ||
            form1Inputs.date === '' ||
            inputFields.khadyanna == ''
          }
        >
          ????????? ???????????????????????????
        </button>
        <ToastContainer />
      </form>
    </>
  );
};

export default Form1;
