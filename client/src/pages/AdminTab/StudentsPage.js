import React, { useCallback, useEffect, useState } from 'react';
import { useToken } from '../../api/useToken';

const StudentsPage = () => {
  const examPortal = useToken();
  const [studentsArray, setStudentsArray] = useState([]);

  const getStudentsAndResultst = useCallback(async () => {
    const result = await examPortal.get('/user/students');
    console.log(result.data.users);
    setStudentsArray(result.data.users);
    // const { firstName, lastName, email } = result.data.users[0];
  }, []);

  useEffect(() => {
    getStudentsAndResultst();
  }, []);

  return (
    <div>
      {studentsArray.length > 0 ? (
        <section className="flex flex-wrap">
          {studentsArray.map((student, idx) => (
            <div className="w-1/3 p-2" key={idx}>
              <div className="border shadow rounded bg-white mx-2">
                <div className="p-4">
                  <h1 className="text-xl font-semibold">{`${student.firstName} ${student.lastName}`}</h1>
                  <small className="text-gray-600 text-xs">
                    {student.email}
                  </small>
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
                      {student.results.map((result, idx) => (
                        <tr className="text-sm">
                          <td className="p-2">{result.code}</td>
                          <td className="p-2">{result.score}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <div>There are currently no students enrolled</div>
      )}
    </div>
  );
};

export default StudentsPage;
