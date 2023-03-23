export const structureUser = [
  {
    User: {
      _id_user: 1,
      username: 'Thanh_rita',
      password: 'hash_123',
      name: 'Nguyen Duy Thanh',
      email: 'thanhnd2512@gmail.com',
      avatar: 'url_',
      bio: 'my bio',
      timestamp_user: '7:47 19/3/2023',
      Role: {},

      //những thằng theo dõi mình
      followBy: [
        {
          _id_follow: 1,
          _id_user: 2 /*Ref another User*/,
          timestamp_follow: '7:47 20/3/2023',
        },
      ],
      //những thằng mình theo dõi
      followedBy: [
        {
          _id_followed: 1,
          _id_user: 3 /*Ref another User*/,
          timestamp_followed: '7:47 20/3/2023',
        },
      ],

      Block: [
        {
          _id_block: 'block_1',
          _id_user: 3,
          timestamp_block: '7:47 29/3/2023',
          _id_reason: 1,
        },
      ],

      Video: {
        _id_video: 1,
        title: 'this is my first video',
        description: 'description',
        url: Tiktok,
        timestamp_video: '7:47 20/3/2023',
        postedBy: 1 /*Ref User*/,
        _id_hashtag: ['hashtag_1'],
        Views: [
          {
            _id_view: 'view_1',
            timestamp_view: '7:47 20/3/2023',
            _id_video: 3 /*Ref Video*/,
            watchedBy: 3 /*Ref User*/,
          },
          {
            _id_view: 'view_2',
            timestamp_view: '7:47 20/3/2023',
            _id_video: 2 /*Ref Video*/,
            watchedBy: 2 /*Ref User*/,
          },
        ],

        likes: [
          {
            _id_like: 'like_1',
            _id_video: 1 /*Ref Video*/,
            timestamp_like: '7:47 20/3/2023',
            likedBy: 2 /*Ref User*/,
          },
          {
            _id_like: 'like_2',
            _id_video: 1 /*Ref Video*/,
            timestamp_like: '7:50 20/3/2023',
            likedBy: 3 /*Ref User*/,
          },
        ],
        comments: [
          {
            _id_cmt: 'cmt_1',
            timestamp_cmt: '7:47 20/3/2023',
            _id_video: 1 /*Ref Video*/,
            text_cmt: 'funny video!!',
            commentedBy: {
              _id_user: 2 /*Ref User*/,
              replyBy: {
                _id_user: 3 /*Ref User*/,
                text_reply: ' really?',
                timestamp_reply: '8:47 20/3/2023',
              },
            },
          },
        ],
      },
    },
  },
]
export const structureHashTag = [
  {
    _id_hashtag: 'hashtag_1',
    name_hashtag: 'Funny',
    amount_use: '50',
    timestamp_hashtag: '7:47 19/3/2023',
  },
]
export const reasonBlock = [
  {
    _id_reason: '1',
    name_reason: 'Being annoyed',
    amount_use: '50',
    timestamp_reason: '7:47 19/3/2023',
  },
]

export const role = [
  {
    _id_role: 'role_1',
    name: 'Admin',
    timestamp_role: '7:47 19/3/2023',
    user: [
      {
        _id_user: 'user_1',
      },
    ],
  },
  {
    _id_role: 'role_2',
    name: 'ContentCreator',
    timestamp_hashtag: '7:47 19/3/2023',
    user: [
      {
        _id_user: 'user_1',
      },
    ],
  },
]
