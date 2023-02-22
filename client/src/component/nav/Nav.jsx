const Nav = () => {
  return (
    <nav class="w-56 bg-white shadow-lg h-screen fixed left-0  z-10 top-16">
      <div class="p-4">
        <a href="#" class="flex items-center text-gray-900 font-semibold text-xl">
          <svg class="h-6 w-6 fill-current mr-2" viewBox="0 0 24 24">
            <path d="M4.906 4.906c5.475-5.475 14.375-5.475 19.85 0 5.475 5.475 5.475 14.375 0 19.85-5.475 5.475-14.375 5.475-19.85 0-5.475-5.475-5.475-14.375 0-19.85zm4.626 13.51v-7.192l6.596 3.596-6.596 3.596z" />
          </svg>
          TikTok
        </a>
      </div>
      <div class="mt-8">
        <h3 class="text-gray-600 font-semibold text-sm uppercase px-4">Trending</h3>
        <ul class="py-4">
          <li class="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-100">
            <svg class="h-5 w-5 fill-current mr-2" viewBox="0 0 24 24">
              <path d="M19.5 5H18v-.5c0-.3-.2-.5-.5-.5H16c-.3 0-.5.2-.5.5V5h-1.5c-.3 0-.5.2-.5.5V7h2V5h1.5v2c0 .3.2.5.5.5H20v-1.5c0-.3-.2-.5-.5-.5zM7.5 5H6v-.5C6 4.2 5.8 4 5.5 4H4c-.3 0-.5.2-.5.5V5H2.5C2.2 5 2 5.2 2 5.5V7h2V5h1.5v2c0 .3.2.5.5.5H8v-1.5c0-.3-.2-.5-.5-.5zM19 20h-5.5c-.3 0-.5-.2-.5-.5v-1.5c0-.3.2-.5.5-.5H19v-2h-5.5c-.3 0-.5-.2-.5-.5v-1.5c0-.3.2-.5.5-.5H19v-2h-5.5c-.3 0-.5-.2-.5-.5V8.5c0-." />
            </svg>
            <a href="#" class="text-gray-700 hover:text-black">
              #dance
            </a>
          </li>
          <li class="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-100">
            <svg class="h-5 w-5 fill-current mr-2" viewBox="0 0 24 24">
              <path d="M19 3h-1.5c-.3 0-.5.2-.5.5v2c0 .3.2.5.5.5H19v15H5V6h1.5c.3 0 .5-.2.5-.5v-2c0-.3-.2-.5-.5-.5H4c-.6 0-1 .4-1 1v17c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1z" />
            </svg>
            <a href="#" class="text-gray-700 hover:text-black">
              #funny
            </a>
          </li>
          <li class="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-100">
            <svg class="h-5 w-5 fill-current mr-2" viewBox="0 0 24 24">
              <path d="M12 2c-4.4 0-8 3.6-8 8 0 3.6 2.4 6.6 5.6 7.6.4 0 .8.4.8.8v4.6c0 .4.4.8.8.8h2.4c.4 0 .8-.4.8-.8v-4.6c0-.4.4-.8.8-.8 3.2-1 5.6-4 5.6-7.6 0-4.4-3.6-8-8-8zm0 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
            </svg>
            <a href="#" class="text-gray-700 hover:text-black">
              #pets
            </a>
          </li>
          <li class="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-100">
            <svg class="h-5 w-5 fill-current mr-2" viewBox="0 0 24 24">
              <path d="M20 4h-4.64c.4-.6.64-1.3.64-2h-1.5c-.2 0-.4-.2-.4-.4V.5c0-.3-.2-.5-.5-.5h-3c-.3 0-.5.2-.5.5v1.1c0 .2-.2.4-.4.4H8.64c0 .7.24 1.4.64 2H4c-.6 0-1 .4-1 1v16c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1zM5 5h14v5.5c0 .3.2.5." />
              {/* <svg class="h-5 w-5 fill-current mr-2 viewBox="0 0 24 24"> */}
              <path d="M21 20h-5v-1h5c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1h-5V4c0-.6-.4-1-1-1h-4c-.6 0-1 .4-1 1v1H4c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-1c0 .6-.4 1-1 1zm-7-2h-2v-1h2v1zm4 0h-2v-1h2v1zm2-3H5V6h15v9z" />
            </svg>
            <a href="#" class="text-gray-700 hover:text-black">
              #travel
            </a>
          </li>
          <li class="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-100">
            <svg class="h-5 w-5 fill-current mr-2" viewBox="0 0 24 24">
              <path d="M18 4h-1.5c-.8 0-1.5.7-1.5 1.5v1h-9v-1c0-.8-.7-1.5-1.5-1.5H6c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1zm-6 13.6c-2.8 0-5.2-2.2-5.2-5 0-1.3.5-2.4 1.4-3.2.7-.7 1.6-1.1 2.6-1.1.9 0 1.8.4 2.4 1.1.9.8 1.4 1.9 1.4 3.2 0 2.8-2.3 5-5.2 5zm0-10.6c-1.9 0-3.5 1.5-3.5 3.5 0 1.2.6 2.2 1.5 2.8.1.1.1.2.1.3h4.6c0-.1 0-.2.1-.3.9-.6 1.5-1.6 1.5-2.8 0-2-1.6-3.5-3.7-3.5z" />
            </svg>
            <a href="#" class="text-gray-700 hover:text-black">
              #music
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
