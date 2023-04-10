import Tiktok from '../videos/Tiktok.mp4'

export const VideoCardType = [
  {
    video: {
      asset: {
        _id: 1,
        url: Tiktok,
      },
    },
    postedBy: {
      _id: '2',
      userName: 'IUBeautiful',
      name: 'IU',
      image: 'https://i.scdn.co/image/ab6761610000e5eb006ff3c0136a71bfb9928d34',
    },
    likes: [
      {
        postedBy: {
          _id: '3',
          userName: 'Thanh',
          image:
            'https://i.pinimg.com/236x/08/44/c5/0844c5eb33e92d674e6ad124bac4903a.jpg',
        },
      },

      {
        postedBy: {
          _id: '3',
          userName: 'Thanh',
          image:
            'https://i.pinimg.com/236x/08/44/c5/0844c5eb33e92d674e6ad124bac4903a.jpg',
        },
      },
    ],
    caption: {
      text: 'this is caption of video',
    },
    comments: [
      {
        comment: ' funny video!!!',
        _key: '1',
        postedBy: {
          _ref: '2',
        },
      },
    ],
  },
  {
    video: {
      asset: {
        _id: 2,
        url: 'https://www.youtube.com/watch?v=vvIhg-RYtIs',
      },
    },
    postedBy: {
      _id: '4',
      userName: 'IU1',
      name: 'IU112',
      image: 'https://i.scdn.co/image/ab6761610000e5eb006ff3c0136a71bfb9928d34',
    },
    likes: [
      {
        postedBy: {
          _id: '6',
          userName: 'Thanh1',

          image:
            'https://i.pinimg.com/236x/08/44/c5/0844c5eb33e92d674e6ad124bac4903a.jpg',
        },
      },
    ],
    comments: [
      {
        comment: ' funny vide1o!!!',
        _key: '1',
        postedBy: {
          _ref: '2',
        },
      },
    ],
  },
]
