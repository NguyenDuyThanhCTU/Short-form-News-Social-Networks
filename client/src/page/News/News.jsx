import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import styles from '../../Style'
import robot from '../../assets/imgs/3.jpg'

function News(Selected) {
  const option = Selected.selected
  const Data = useSelector((state) => state.News.PostDataRes.currentPost)

  return (
    <div class="bg-gray-100 basis-2/3 flex flex-wrap  ml-1 h-[150%]">
      {option !== 0 && (
        <>
          <div
            id="home"
            className={`flex flex-col  gap-10  overflow-auto  h-[500vh]  bg-black   flex-1  `}
          >
            <div className="mt-12 mr-16">
              <div className="flex flex-row justify-between items-center w-full">
                <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                  {Data.title}
                  <br className="sm:block hidden" />{' '}
                  <span className="text-gradient text-3xl">
                    {Data.introduction}
                  </span>{' '}
                </h1>
              </div>

              <div className="absolute z-[1] w-[50%] h-[50%] rounded-full white__gradient bottom-40" />

              <p className={`${styles.paragraph} text-white  mt-5`}>
                {Data.body}
              </p>
              <div className="mt-6 z-[5]">
                <img src={Data.image} alt="billing" className=" " />
              </div>
              <p
                className={`${styles.paragraph} text-white  mt-5 inline-block`}
              >
                {Data.footer}
              </p>
            </div>

            <div
              className={`flex-1  flex ${styles.flexCenter} md:my-0 my-10 relative`}
            >
              {/* gradient start */}

              {/* gradient end */}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default News
