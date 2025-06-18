// src/components/DailyStats.tsx
export default function DailyStats() {
  return (
    // <section className="bg-white py-10 px-4 grid grid-cols-1 sm:grid-cols-3 text-center gap-6">
    //   <div>
    //     <h3 className="text-3xl font-bold text-red-600">2,300+</h3>
    //     <p className="text-gray-700">Incidents / Day</p>
    //   </div>
    //   <div>
    //     <h3 className="text-3xl font-bold text-yellow-600">5,600+</h3>
    //     <p className="text-gray-700">Threats / Day</p>
    //   </div>
    //   <div>
    //     <h3 className="text-3xl font-bold text-green-600">$8.5M</h3>
    //     <p className="text-gray-700">Avg Daily Loss</p>
    //   </div>
    // </section>
    <div className="grid grid-cols-1 gap-8 p-10 lg:grid-cols-2 xl:grid-cols-4">
      {/* <!-- Value card --> */}
      <div className="flex items-center shadow justify-between p-4 bg-white rounded-md">
          <div>
              <h6 className="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase">
                  Value
              </h6>
              <span className="text-xl font-semibold">$30,000</span>
              <span className="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
                  +4.4%
              </span>
          </div>
          <div>
              <span>
                  <svg className="w-12 h-12 text-gray-300" xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                      </path>
                  </svg>
              </span>
          </div>
      </div>

      {/* <!-- Users card --> */}
      <div className="flex items-center shadow justify-between p-4 bg-white rounded-md">
          <div>
              <h6 className="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase">
                  Users
              </h6>
              <span className="text-xl font-semibold">50,021</span>
              <span className="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
                  +2.6%
              </span>
          </div>
          <div>
              <span>
                  <svg className="w-12 h-12 text-gray-300" xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
                      </path>
                  </svg>
              </span>
          </div>
      </div>

      {/* <!-- Orders card --> */}
      <div className="flex items-center shadow justify-between p-4 bg-white rounded-md">
          <div>
              <h6 className="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase">
                  Orders
              </h6>
              <span className="text-xl font-semibold">45,021</span>
              <span className="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
                  +3.1%
              </span>
          </div>
          <div>
              <span>
                  <svg className="w-12 h-12 text-gray-300" xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                  </svg>
              </span>
          </div>
      </div>

      {/* <!-- Tickets card --> */}
      <div className="flex items-center shadow justify-between p-4 bg-white rounded-md">
          <div>
              <h6 className="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase">
                  Tickets
              </h6>
              <span className="text-xl font-semibold">20,516</span>
              <span className="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
                  +3.1%
              </span>
          </div>
          <div>
              <span>
                  <svg className="w-12 h-12 text-gray-300" xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z">
                      </path>
                  </svg>
              </span>
          </div>
      </div>
  </div>
  );
}
