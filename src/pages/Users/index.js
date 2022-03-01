import React, { useState, useEffect } from 'react';
import { db } from '../../config/base';
import { capitalizeFirstLetter } from '../../services/Helpers';

export function Users() {
  const [usersData, setUsersData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    require('../../utils/tailwind.generated.css');
    const fetchData = async () => {
      const usersRef = db.collection('users');
      // eslint-disable-next-line
      const usersData = await usersRef
        .get()
        .then((userDoc) => {
          setUsersData(userDoc.docs.map((doc) => ({ ...doc.data() })));
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    UID
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Created On
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Verified
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Subjects
                  </th>
                  <th className="px-6 py-3 bg-gray-50"></th>
                </tr>
              </thead>
              {isLoading
                ? null
                : usersData.map((user, index) => {
                    return (
                      <tbody
                        key={index}
                        className="bg-white divide-y divide-gray-200"
                      >
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <svg
                                  fill="rgb(203, 213, 224)"
                                  className="h-10 w-10 rounded-full"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" />
                                </svg>
                              </div>
                              <div className="ml-4">
                                <div className="text-sm leading-5 font-medium text-gray-900">
                                  {user.username}
                                </div>
                                <div className="text-sm leading-5 text-gray-500">
                                  {user.email}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm leading-5 font-medium text-gray-700">
                              {user.uid}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm leading-5 font-medium text-gray-700">
                              {String(user.created_on)}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 ${
                                user.isVerified
                                  ? 'text-green-800'
                                  : 'text-red-800'
                              }`}
                            >
                              {capitalizeFirstLetter(String(user.isVerified))}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm leading-5 text-gray-500">
                            {String(user.numberOfSubjects)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap leading-5 font-medium">
                            <button className="outline-none text-indigo-600 hover:text-indigo-900 text-sm font-medium">
                              Edit
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
