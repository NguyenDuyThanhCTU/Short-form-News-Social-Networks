import React, {useState} from 'react'
import {useSelector} from 'react-redux'

function Preview(Selected) {
  const option = Selected.selected
  const Data = useSelector((state) => state.News.PostDataReq)

  return (
    <div class="bg-gray-100 basis-2/3 flex flex-wrap pl-10 ">
      {option === 1 && (
        <>
          {/* <!-- Page header --> */}
          <div class="bg-white shadow">
            <div class="container mx-auto px-4 py-6">
              <h1 class="text-3xl font-bold text-gray-800">
                Lorem Ipsum Dolor Sit Amet
              </h1>
              <p class="text-gray-700 text-sm">Published on May 5, 2023</p>
            </div>
          </div>

          {/* <!-- Main content --> */}
          <div class="container mx-auto px-4 py-8">
            <div class="flex flex-wrap -mx-4">
              <div class="w-full lg:w-3/4 px-4">
                <div class="bg-white rounded-lg shadow">
                  <img
                    class="h-64 w-full object-cover"
                    src="https://picsum.photos/800/400?random=2"
                    alt="News Image"
                  />
                  <div class="p-6">
                    <p class="text-gray-700 leading-relaxed mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam euismod, enim at dignissim auctor, est ipsum lacinia
                      nisi, eget vestibulum urna erat eu orci. Integer dignissim
                      rutrum metus, vitae gravida enim facilisis eu. Vivamus sed
                      semper nisi. Pellentesque habitant morbi tristique
                      senectus et netus et malesuada fames ac turpis egestas.
                    </p>
                    <p class="text-gray-700 leading-relaxed mb-4">
                      Morbi blandit, massa vel porttitor finibus, velit velit
                      eleifend velit, ut faucibus libero turpis vel nisl. Sed
                      consequat est vel magna vulputate, sit amet posuere augue
                      sodales. Nam commodo augue eu neque tempor hendrerit. Nam
                      pulvinar commodo ante, at bibendum velit malesuada vitae.
                      Donec rutrum commodo nunc a luctus. Pellentesque in
                      molestie nisl. Morbi nec pharetra elit, sed pellentesque
                      odio. Nunc posuere, ex id fringilla fringilla, nisi ex
                      convallis orci, sed volutpat enim odio eu leo. Nam congue
                      felis eget purus consectetur tristique. Nulla vel magna a
                      arcu auctor finibus. Fusce fermentum ante ipsum, ac
                      tincidunt nibh fermentum eu. Donec tincidunt elit ut elit
                      convallis, ac bibendum mi pharetra.
                    </p>
                    <p class="text-gray-700 leading-relaxed mb-4">
                      Mauris maximus, enim vel rutrum bibendum, erat nunc
                      commodo dui, a luctus urna velit ac libero. Fusce ut mi
                      dignissim, placerat dolor id, malesuada nulla. Nam vel
                      lacinia velit. Suspendisse ut augue libero. Proin
                      porttitor consequat tincidunt. Aliquam erat volutpat.
                      Maecenas ultrices rutrum enim, sed luctus mauris rhoncus
                      vitae. Nulla facilisi. Duis maximus sapien id turpis
                      pulvinar, in aliquam tellus congue.
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-1/4 px-4">
                <div class="bg-white rounded-lg shadow p-6">
                  <h2 class="text-xl font-bold text-gray-800 mb-4">
                    Related Articles
                  </h2>
                  <ul>
                    <li class="py-2">
                      <a href="#" class="text-gray-700 hover:text-gray-900">
                        Lorem ipsum dolor sit amet
                      </a>
                    </li>
                    <li class="py-2">
                      <a href="#" class="text-gray-700 hover:text-gray-900">
                        Consectetur adipiscing elit
                      </a>
                    </li>
                    <li class="py-2">
                      <a href="#" class="text-gray-700 hover:text-gray-900">
                        Sed do eiusmod tempor
                      </a>
                    </li>
                    <li class="py-2">
                      <a href="#" class="text-gray-700 hover:text-gray-900">
                        Incididunt ut labore et dolore magna aliqua
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <footer class="bg-white shadow-lg">
            <div class="container mx-auto px-4 py-6 text-gray-600 text-sm">
              <p>&copy; 2023 News Page. All rights reserved.</p>
            </div>
          </footer>
        </>
      )}
      {option === 2 && (
        <>
          <header class="bg-white shadow-lg"></header>

          <div class="container mx-auto px-4 py-8">
            <h1 class="text-3xl font-bold text-gray-900">Tiêu đề bài viết</h1>
            <p class="text-gray-600 mt-2">Ngày đăng: 05/05/2023</p>
            <img
              src="https://via.placeholder.com/800x400"
              alt="Ảnh minh họa"
              class="mt-4"
            />
            <div class="mt-4">
              <p class="text-gray-700 text-lg">Nội dung bài viết:</p>
              <p class="text-gray-600 mt-2 leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                sagittis ultrices ipsum, eu posuere justo tincidunt at. Donec
                eget elit vitae elit vestibulum rhoncus sed nec mi. Maecenas
                congue ipsum eget arcu bibendum tincidunt. Sed ut elit nec elit
                consectetur semper vel ut elit. Sed ut elit nec elit consectetur
                semper vel ut elit. Sed ut elit nec elit consectetur semper vel
                ut elit. Sed ut elit nec elit consectetur semper vel ut elit.
                Sed ut elit nec elit consectetur semper vel ut elit. Sed ut elit
                nec elit consectetur semper vel ut elit. Sed ut elit nec elit
                consectetur semper vel ut elit. Sed ut elit nec elit consectetur
                semper vel ut elit. Sed ut elit nec elit consectetur semper vel
                ut elit. Sed ut elit nec elit consectetur semper vel ut elit.
              </p>
              <p class="text-gray-600 mt-2 leading-8">
                Morbi quis mi eget felis consectetur pretium sed vitae nibh.
                Aenean commodo arcu ut lectus vehicula commodo. Integer id ante
                ante. Sed pulvinar nulla eget lectus tincidunt maximus. Nulla
                sit amet mauris eget sapien varius ultricies. Duis eleifend fel{' '}
              </p>
              <p class="text-gray-600 mt-2 leading-8">
                Nunc ullamcorper massa id commodo fermentum. Sed sollicitudin
                enim nec sem placerat lobortis. Aenean pellentesque sem vitae
                velit tristique suscipit. Maecenas eleifend, libero vel
                vulputate sagittis, nunc magna commodo orci, ac hendrerit nunc
                lectus vel nibh. Praesent nec bibendum urna. Praesent vulputate
                auctor ipsum, vitae suscipit massa eleifend non. Fusce sed risus
                eget tortor aliquam pretium. Integer id eros eu leo luctus
                tempor quis non quam. Vestibulum eu tincidunt sapien. Vivamus eu
                purus sit amet libero aliquam luctus. Maecenas a massa
                malesuada, tristique turpis in, dictum risus. Aliquam quis mi
                ultrices, efficitur risus at, vestibulum risus. Quisque
                scelerisque velit id ligula fringilla pharetra. Aliquam
                tristique bibendum nisi ut fermentum.
              </p>
              <p class="text-gray-600 mt-2 leading-8">
                Nam sit amet nisi eu sapien sagittis ullamcorper. Pellentesque
                et velit eu arcu elementum auctor in eu mi. Suspendisse et ante
                tortor. Nullam non nisi vel est volutpat feugiat. Sed auctor
                libero in neque dignissim, eu commodo justo vulputate. Aliquam
                id consequat tellus. Aenean euismod velit ut turpis congue, id
                tempor elit dapibus. Etiam lobortis lobortis est, nec viverra
                nulla faucibus nec. Maecenas at erat eu libero bibendum ultrices
                vitae sit amet justo. Nam porta nibh sed erat posuere dapibus.
                Nullam eu dui ut enim efficitur fermentum. Cras vehicula euismod
                purus, non suscipit nisi pellentesque ut.
              </p>
            </div>
          </div>

          <footer class="bg-gray-900 text-white py-8">
            <div class="container mx-auto px-4">
              <p class="text-center">
                &copy; 2023 Tên báo điện tử. All rights reserved.
              </p>
            </div>
          </footer>
        </>
      )}
      {option === 3 && (
        <>
          <header class="bg-white shadow-lg"></header>
          {/* <!-- Hình ảnh bài báo --> */}
          <div class="w-full md:w-1/3 p-4">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Bài báo"
              class="w-full rounded-lg shadow-md"
            />
          </div>

          {/* <!-- Thông tin bài báo --> */}
          <div class="w-full md:w-2/3 p-4">
            <h1 class="text-2xl font-bold mb-2">Tiêu đề bài báo</h1>
            <p class="text-gray-600 text-sm mb-4">Mô tả ngắn về bài báo</p>
            <div class="prose max-w-none mb-4">
              {/* <!-- Nội dung bài báo --> */}
              <p>Nội dung bài báo</p>
            </div>
            <div class="flex flex-wrap">
              {/* <!-- Hashtag --> */}
              <div class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Hashtag1
              </div>
              <div class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Hashtag2
              </div>
            </div>
          </div>
        </>
      )}
      {option === 4 && (
        <div class="bg-gray-100 ">
          {/* <!-- Page header --> */}
          <div class="bg-white shadow">
            <div class="container mx-auto px-4 py-6">
              <h1 class="text-3xl font-bold text-gray-800">{Data.title}</h1>
            </div>
          </div>

          {/* <!-- Main content --> */}
          <div class="container mx-auto px-4 py-8">
            <div class="flex flex-wrap -mx-4">
              <div class="w-full lg:w-3/4 px-4">
                <div class="bg-white rounded-lg shadow">
                  <img
                    class="h-64 w-full object-cover"
                    src={Data?.title}
                    alt="News Image"
                  />
                  <div class="p-6">
                    <p class="text-gray-700 leading-relaxed mb-4">
                      {Data.introduction}
                    </p>
                    <p class="text-gray-700 leading-relaxed mb-4">
                      {Data.body}
                    </p>
                    <p class="text-gray-700 leading-relaxed mb-4">
                      {Data.body}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {option === 5 && (
        <>
          <header class="bg-white shadow-lg"></header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-8 sm:py-16 lg:py-24">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                <div className="md:col-span-3">
                  <h1 className="text-4xl font-bold mb-4">title</h1>
                  <p className="text-gray-600 text-lg mb-6">introduction</p>
                  <div className="prose max-w-none">
                    <p>body</p>
                  </div>
                  <div className="mt-8">
                    <span className="text-gray-600 mr-2">#</span>
                    <span className="text-gray-600">hashtag</span>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div
                    className="relative h-0"
                    style={{paddingBottom: '56.25%'}}
                  >
                    <img
                      src={null}
                      alt="Article image"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Preview
