const Dashboard = () => {
  return (
    <div class="flex flex-col h-screen w- bg-gray-100 px-8 py-6 ml-64 absolute top-0 right-0 left-0">
      {/* <!-- Header --> */}
      <div class="flex items-center justify-between bg-white py-4 px-8 shadow-md">
        <div class="text-2xl font-bold text-gray-800">Dashboard</div>
        <div class="flex items-center">
          <div class="mr-4">
            <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              New Video
            </button>
          </div>
          <div class="flex items-center">
            <img
              class="h-10 w-10 rounded-full object-cover"
              src="https://via.placeholder.com/150"
              alt="Profile Picture"
            />
            <div class="ml-4 text-gray-800 font-semibold">John Doe</div>
          </div>
        </div>
      </div>

      {/* <!-- Main Content --> */}
      <div class="flex-1 overflow-y-auto p-8">
        <div class="grid grid-cols-3 gap-4">
          {/* <!-- Video Stats Card --> */}
          <div class="bg-white rounded-lg shadow-md">
            <div class="bg-blue-500 rounded-t-lg py-4 px-6 text-white font-bold">Video Stats</div>
            <div class="py-8 px-6">
              <div class="text-4xl font-bold text-gray-800">120</div>
              <div class="text-sm text-gray-600">Views this month</div>
            </div>
          </div>
          {/* <!-- Subscriber Stats Card --> */}
          <div class="bg-white rounded-lg shadow-md">
            <div class="bg-green-500 rounded-t-lg py-4 px-6 text-white font-bold">
              Subscriber Stats
            </div>
            <div class="py-8 px-6">
              <div class="text-4xl font-bold text-gray-800">5000</div>
              <div class="text-sm text-gray-600">Total subscribers</div>
            </div>
          </div>
          {/* <!-- Engagement Stats Card --> */}
          <div class="bg-white rounded-lg shadow-md">
            <div class="bg-yellow-500 rounded-t-lg py-4 px-6 text-white font-bold">
              Engagement Stats
            </div>
            <div class="py-8 px-6">
              <div class="text-4xl font-bold text-gray-800">25%</div>
              <div class="text-sm text-gray-600">Average engagement rate</div>
            </div>
          </div>
        </div>

        {/* <!-- Recent Videos Table --> */}
        <div class="mt-8">
          <div class="flex items-center justify-between mb-6">
            <div class="text-xl font-bold text-gray-800">Recent Videos</div>
            <div class="flex items-center">
              <div class="text-sm text-gray-600 mr-2">Show:</div>
              <select class="border border-gray-300 rounded-lg py-2 px-4">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>All Time</option>
              </select>
            </div>
          </div>
          <table class="w-full text-left table-auto border  border-gray-300">
            <thead class="bg-gray-200">
              <tr>
                <th class="py-2 px-4 font-semibold text-gray-800">Title</th>
                <th class="py-2 px-4 font-semibold text-gray-800">Views</th>
                <th class="py-2 px-4 font-semibold text-gray-800">Likes</th>
                <th class="py-2 px-4 font-semibold text-gray-800">Comments</th>
                <th class="py-2 px-4 font-semibold text-gray-800">Published</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="py-2 px-4">Video Title 1</td>
                <td class="py-2 px-4">1200</td>
                <td class="py-2 px-4">50</td>
                <td class="py-2 px-4">10</td>
                <td class="py-2 px-4">2023-02-22</td>
              </tr>
              <tr>
                <td class="py-2 px-4">Video Title 2</td>
                <td class="py-2 px-4">800</td>
                <td class="py-2 px-4">30</td>
                <td class="py-2 px-4">5</td>
                <td class="py-2 px-4">2023-02-21</td>
              </tr>
              <tr>
                <td class="py-2 px-4">Video Title 3</td>
                <td class="py-2 px-4">500</td>
                <td class="py-2 px-4">20</td>
                <td class="py-2 px-4">3</td>
                <td class="py-2 px-4">2023-02-20</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <!-- Footer --> */}
      <div class="bg-white py-4 px-8 shadow-md text-gray-600 text-sm">
        &copy; 2023 YouTube Dashboard. All rights reserved.
      </div>
    </div>
  );
};
export default Dashboard;
