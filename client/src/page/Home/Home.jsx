const Home = () => {
  return (
    <div class="flex flex-col items-center justify-center bg-gray-100 py-10 pt-24 ">
      <div class="max-w-screen-md w-full ">
        {/* <!-- Sample video cards --> */}
        <div class="flex flex-col sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          <div class="bg-white rounded-lg overflow-hidden shadow-lg ">
            <div class="relative">
              <img
                class="h-96 w-full object-cover"
                src="https://source.unsplash.com/random/800x800"
                alt="Video thumbnail"
              />
              <div class="absolute top-0 right-0 bg-black p-2 text-white text-sm">00:15</div>
            </div>
            <div class="p-4">
              <div class="flex items-center mb-4">
                <div class="h-10 w-10 rounded-full bg-gray-400 mr-2"></div>
                <div>
                  <p class="font-bold">Username</p>
                  <p class="text-gray-600 text-sm">Description of video</p>
                </div>
              </div>
              <div class="flex justify-between items-center">
                <div class="flex items-center">
                  <div class="h-8 w-8 rounded-full bg-gray-400 mr-2"></div>
                  <div class="font-bold text-gray-700">Likes</div>
                </div>
                <div class="flex items-center">
                  <div class="h-8 w-8 rounded-full bg-gray-400 mr-2"></div>
                  <div class="font-bold text-gray-700">Comments</div>
                </div>
                <div class="flex items-center">
                  <div class="h-8 w-8 rounded-full bg-gray-400 mr-2"></div>
                  <div class="font-bold text-gray-700">Shares</div>
                </div>
                <div class="flex items-center">
                  <div class="h-8 w-8 rounded-full bg-gray-400 mr-2"></div>
                  <div class="font-bold text-gray-700">Views</div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-lg overflow-hidden shadow-lg">
            <div class="relative">
              <img
                class="h-96 w-full object-cover"
                src="https://source.unsplash.com/random/800x800"
                alt="Video thumbnail"
              />
              <div class="absolute top-0 right-0 bg-black p-2 text-white text-sm">00:15</div>
            </div>
            <div class="p-4">
              <div class="flex items-center mb-4">
                <div class="h-10 w-10 rounded-full bg-gray-400 mr-2"></div>
                <div>
                  <p class="font-bold">Username</p>
                  <p class="text-gray-600 text-sm">Description of video</p>
                </div>
              </div>
              <div class="flex justify-between items-center">
                <div class="flex   items-center">
                  <div class="h-8 w-8 rounded-full bg-gray-400 mr-2"></div>
                  <div class="font-bold text-gray-700">Likes</div>
                </div>
                <div class="flex items-center">
                  <div class="h-8 w-8 rounded-full bg-gray-400 mr-2"></div>
                  <div class="font-bold text-gray-700">Comments</div>
                </div>
                <div class="flex items-center">
                  <div class="h-8 w-8 rounded-full bg-gray-400 mr-2"></div>
                  <div class="font-bold text-gray-700">Shares</div>
                </div>
                <div class="flex items-center">
                  <div class="h-8 w-8 rounded-full bg-gray-400 mr-2"></div>
                  <div class="font-bold text-gray-700">Views</div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-lg overflow-hidden shadow-lg">
            <div class="relative">
              <img
                class="h-96 w-full object-cover"
                src="https://source.unsplash.com/random/800x800"
                alt="Video thumbnail"
              />
              <div class="absolute top-0 right-0 bg-black p-2 text-white text-sm">00:15</div>
            </div>
            <div class="p-4">
              <div class="flex items-center mb-4">
                <div class="h-10 w-10 rounded-full bg-gray-400 mr-2"></div>
                <div>
                  <p class="font-bold">Username</p>
                  <p class="text-gray-600 text-sm">Description of video</p>
                </div>
              </div>
              <div class="flex justify-between items-center">
                <div class="flex items-center">
                  <div class="h-8 w-8 rounded-full bg-gray-400 mr-2"></div>
                  <div class="font-bold text-gray-700">Likes</div>
                </div>
                <div class="flex items-center">
                  <div class="h-8 w-8 rounded-full bg-gray-400 mr-2"></div>
                  <div class="font-bold text-gray-700">Comments</div>
                </div>
                <div class="flex items-center">
                  <div class="h-8 w-8 rounded-full bg-gray-400 mr-2"></div>
                  <div class="font-bold text-gray-700">Shares</div>
                </div>
                <div class="flex items-center">
                  <div class="h-8 w-8 rounded-full bg-gray-400 mr-2"></div>
                  <div class="font-bold text-gray-700">Views</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
