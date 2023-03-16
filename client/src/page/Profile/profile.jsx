import avt from '../../assets/imgs/1.jpg';
function profile() {
  return (
    <div class="bg-white rounded-lg shadow-lg px-8  h-screen  py-6 ml-64 ">
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center">
          <img src={avt} alt="Profile Picture" class="w-20 h-20 rounded-full mr-4" />
          <div>
            <h2 class="text-xl font-semibold">John Doe</h2>
            <p class="text-gray-600">Bio goes here</p>
          </div>
        </div>
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
          Edit Profile
        </button>
      </div>
      <hr class="my-6" />
      <div class="flex mb-6">
        <div class="w-1/3 pr-6">
          <h3 class="text-lg font-semibold mb-2">Stats</h3>
          <p class="text-gray-600">
            <span class="font-bold">Followers:</span> 10,000
          </p>
          <p class="text-gray-600">
            <span class="font-bold">Following:</span> 500
          </p>
          <p class="text-gray-600">
            <span class="font-bold">Likes:</span> 50,000
          </p>
          <p class="text-gray-600">
            <span class="font-bold">Videos:</span> 100
          </p>
        </div>
        <div class="w-2/3">
          <h3 class="text-lg font-semibold mb-2">About Me</h3>
          <p class="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod est vel quam
            sagittis, et varius libero tincidunt. Proin placerat nibh in velit ullamcorper, vel
            consectetur est commodo. Maecenas rutrum libero a mauris egestas commodo. Proin vehicula
            mauris ac diam tincidunt gravida. Sed lacinia ante at sem tristique tincidunt.
          </p>
        </div>
      </div>
      <hr class="my-6" />
      <div class="flex items-center justify-between mb-6">
        <h3 class="text-lg font-semibold">Videos</h3>
        <a href="#" class="text-blue-500 hover:text-blue-600 font-semibold">
          See all
        </a>
      </div>
      <div class="grid grid-cols-3 gap-4">
        <div class="relative">
          <img
            src="https://via.placeholder.com/300x400"
            alt="Video Thumbnail"
            class="w-full rounded-lg"
          />
          <span class="absolute top-0 right-0 bg-black text-white p-1 rounded-br-lg">0:30</span>
        </div>
        <div class="relative">
          <img
            src="https://via.placeholder.com/300x400"
            alt="Video Thumbnail"
            class="w-full rounded-lg"
          />
          <span class="absolute top-0 right-0 bg-black text-white p-1 rounded-br-lg">0:45</span>
        </div>
        <div class="relative">
          <img
            src="https://via.placeholder.com/300x400"
            alt="Video Thumbnail"
            class="w-full rounded-lg"
          />
          <span class="absolute top-0 right-0 bg-black text-white p-1 rounded-br-lg">1:00</span>
        </div>
      </div>
    </div>
  );
}

export default profile;
