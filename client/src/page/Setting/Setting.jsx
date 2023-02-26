const Setting = () => {
  return (
    <div className="relative">
      <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-4 absolute left-0 right-0">
        <h1 class="text-3xl font-bold mb-4">Settings</h1>
        {/* <!-- Manage Account section --> */}
        <div class="mb-8">
          <h2 class="text-2xl font-bold mb-4">Manage Account</h2>
          <div class="mb-4">
            <p class="block text-gray-700 font-bold mb-2">Name:</p>
            <p class="text-gray-800 mb-2">John Doe</p>
          </div>
          <div class="mb-4">
            <p class="block text-gray-700 font-bold mb-2">Username:</p>
            <p class="text-gray-800 mb-2">johndoe</p>
          </div>
          <div class="mb-4">
            <p class="block text-gray-700 font-bold mb-2">Email:</p>
            <p class="text-gray-800 mb-2">john.doe@example.com</p>
          </div>
          <div class="flex justify-end">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
              Edit
            </button>
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Delete Account
            </button>
          </div>
        </div>
        {/* <!-- Privacy section --> */}
        <div class="mb-8">
          <h2 class="text-2xl font-bold mb-4">Privacy</h2>
          <div class="mb-4">
            <p class="block text-gray-700 font-bold mb-2">Who can view your videos?</p>
            <p class="text-gray-800 mb-2">Everyone</p>
          </div>
          <div class="mb-4">
            <p class="block text-gray-700 font-bold mb-2">Who can comment on your videos?</p>
            <p class="text-gray-800 mb-2">Everyone</p>
          </div>
          <div class="mb-4">
            <p class="block text-gray-700 font-bold mb-2">Block list:</p>
            <ul class="list-disc list-inside">
              <li class="text-gray-800 mb-2">user1</li>
              <li class="text-gray-800 mb-2">user2</li>
            </ul>
          </div>
          <div class="flex justify-end">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
              Edit
            </button>
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Delete Block List
            </button>
          </div>
        </div>
        {/* <!-- Notifications section --> */}
        <div class="mb-8">
          <h2 class="text-2xl font-bold mb-4">Notifications</h2>
          <div class="mb-4">
            <p class="block text-gray-700 font-bold mb-2">Email Notifications:</p>
            <p class="text-gray-800 mb-2">On</p>
          </div>
          <div class="mb-4">
            <p class="block text-gray" />
          </div>
        </div>
        {/* !-- Languages section --> */}
        <div class="mb-8">
          <h2 class="text-2xl font-bold mb-4">Languages</h2>
          <div class="mb-4">
            <p class="block text-gray-700 font-bold mb-2">Preferred Language:</p>
            <p class="text-gray-800 mb-2">English</p>
          </div>
          <div class="flex justify-end">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
              Edit
            </button>
          </div>
        </div>
        {/* <!-- Billing section --> */}
        <div class="mb-8">
          <h2 class="text-2xl font-bold mb-4">Billing</h2>
          <div class="mb-4">
            <p class="block text-gray-700 font-bold mb-2">Plan:</p>
            <p class="text-gray-800 mb-2">Free</p>
          </div>
          <div class="flex justify-end">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
              Upgrade Plan
            </button>
          </div>
        </div>
        {/* <!-- Help and Support section --> */}
        <div class="mb-8">
          <h2 class="text-2xl font-bold mb-4">Help and Support</h2>
          <div class="mb-4">
            <p class="block text-gray-700 font-bold mb-2">Contact Us:</p>
            <ul class="list-disc list-inside">
              <li class="text-blue-500 mb-2 hover:underline">
                <a href="#">Support Form</a>
              </li>
              <li class="text-blue-500 mb-2 hover:underline">
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>
          <div class="flex justify-end">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
              Send Feedback
            </button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Report a Problem
            </button>
          </div>
        </div>
      </div>
      {/* ================== */}
      {/* <!-- Left navigation bar --> */}
      <nav class="flex flex-col w-48 bg-gray-100 h-screen px-4 py-8 absolute left-0">
        <div class="flex items-center mb-4">
          <img src="logo.png" alt="Logo" class="h-8" />
          <span class="text-xl font-bold ml-2">My App</span>
        </div>
        <ul class="flex flex-col">
          <li class="mb-2">
            <a href="#manage-account" class="flex items-center text-gray-600 hover:text-blue-500">
              <i class="fas fa-user-circle text-lg mr-2"></i>
              Manage Account
            </a>
          </li>
          <li class="mb-2">
            <a href="#privacy" class="flex items-center text-gray-600 hover:text-blue-500">
              <i class="fas fa-shield-alt text-lg mr-2"></i>
              Privacy
            </a>
          </li>
          <li class="mb-2">
            <a href="#languages" class="flex items-center text-gray-600 hover:text-blue-500">
              <i class="fas fa-globe text-lg mr-2"></i>
              Languages
            </a>
          </li>
          <li class="mb-2">
            <a href="#billing" class="flex items-center text-gray-600 hover:text-blue-500">
              <i class="fas fa-credit-card text-lg mr-2"></i>
              Billing
            </a>
          </li>
          <li class="mb-2">
            <a href="#notifications" class="flex items-center text-gray-600 hover:text-blue-500">
              <i class="fas fa-bell text-lg mr-2"></i>
              Notifications
            </a>
          </li>
          <li class="mb-2">
            <a href="#help-and-support" class="flex items-center text-gray-600 hover:text-blue-500">
              <i class="fas fa-question-circle text-lg mr-2"></i>
              Help and Support
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Setting;
