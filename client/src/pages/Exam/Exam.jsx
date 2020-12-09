import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useToken } from '../../api/useToken';
import { types } from '../../redux/types';
import ExamControls from './ExamControls';
import ExamNavbar from './ExamNavbar';
import ExamOptions from './ExamOptions';
import ExamQuestion from './ExamQuestion';
import ExamSkipper from './ExamSkipper';
import ExamTimer from './ExamTimer';

const Exam = () => {
  const dispatch = useDispatch();

  const history = useHistory();
  const { courseId, time } = useSelector((state) => state.exam);
  const { questions } = useSelector((state) => state.examQuestions);

  const examPortal = useToken();

  useEffect(() => {
    dispatch({
      type: types.SET_TIMER,
      payload: Date.now() + 1 * 60 * 1000,
    });
  }, [dispatch]);

 

  useEffect(() => {
    if (!courseId) history.push('/take-exam');
    else {
      (async function getQuestions() {
        try {
          const response = await examPortal.post(`/questions`, {
            id: courseId,
          });
          const { status } = response;
          if (status === 200) {
            const { questions } = response.data;

            dispatch({
              type: types.SET_QUESTIONS,
              payload: questions,
            });
          } else if (status !== 200) {
            history.push('/');
          }
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, []);

  // console.log(questions);

  return (
    <div className="bg-purple-800 h-screen">
      <ExamNavbar />
      <main className="flex px-24 py-8">
        {/* {questions.length > 0 && ( */}
        <section className="question w-2/3 border p-4 mr-16 bg-white rounded-lg shadow-xl">
          <ExamQuestion />
          <ExamOptions />
          <ExamControls />
        </section>
        {/* )} */}
        <section className="list w-1/3 p-4 flex flex-col">
          <ExamSkipper length={questions.length} />
          { time && <ExamTimer />}
        </section>
      </main>
    </div>
  );
};

export default Exam;
