import React, { useCallback, useEffect } from 'react';
import { useToken } from '../../api/useToken';

const StudentsPage = () => {


  const examPortal = useToken();

  const getStudentsAndResultst = useCallback(async () => {
    const result = await examPortal.get('/user/students');
    console.log(result);
  }, []);

  useEffect(() => {
    getStudentsAndResultst();
  }, []);

  return (
    <div>
      <section className="flex flex-wrap">
        <div className="w-1/3 p-2">
          <div className="border shadow rounded bg-white mx-2">
            <div className="p-4">
              <h1 className="text-xl font-semibold">John Doe</h1>
              <small className="text-gray-600 text-xs">johndoe@gmail.com</small>
            </div>
            <div className="">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-200 px-4 text-sm">
                    <th className="text-left p-2 font-medium">Courses</th>
                    <th className="text-left p-2 font-medium">Scores</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-sm">
                    <td className="p-2">ELE456</td>
                    <td className="p-2">78%</td>
                  </tr>
                  <tr className="text-sm">
                    <td className="p-2">ELE456</td>
                    <td className="p-2">78%</td>
                  </tr>
                  <tr className="text-sm">
                    <td className="p-2">ELE456</td>
                    <td className="p-2">78%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="w-1/3 p-2">
          <div className="border shadow rounded bg-white mx-2">
            <div className="p-4">
              <h1 className="text-xl font-semibold">John Doe</h1>
              <small className="text-gray-600 text-xs">johndoe@gmail.com</small>
            </div>
            <div className="">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-200 px-4 text-sm">
                    <th className="text-left p-2 font-medium">Courses</th>
                    <th className="text-left p-2 font-medium">Scores</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-sm">
                    <td className="p-2">ELE456</td>
                    <td className="p-2">78%</td>
                  </tr>
                  <tr className="text-sm">
                    <td className="p-2">ELE456</td>
                    <td className="p-2">78%</td>
                  </tr>
                  <tr className="text-sm">
                    <td className="p-2">ELE456</td>
                    <td className="p-2">78%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="w-1/3 p-2">
          <div className="border shadow rounded bg-white mx-2">
            <div className="p-4">
              <h1 className="text-xl font-semibold">John Doe</h1>
              <small className="text-gray-600 text-xs">johndoe@gmail.com</small>
            </div>
            <div className="">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-200 px-4 text-sm">
                    <th className="text-left p-2 font-medium">Courses</th>
                    <th className="text-left p-2 font-medium">Scores</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-sm">
                    <td className="p-2">ELE456</td>
                    <td className="p-2">78%</td>
                  </tr>
                  <tr className="text-sm">
                    <td className="p-2">ELE456</td>
                    <td className="p-2">78%</td>
                  </tr>
                  <tr className="text-sm">
                    <td className="p-2">ELE456</td>
                    <td className="p-2">78%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentsPage;
