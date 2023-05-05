const express = require('express')
// const followController = require('../../Controllers/follow.controller')

//following Route
const addfollowRoute = express.Router()
const followingRoute = express.Router()
const followingsRoute = express.Router()
const unfollowRoute = express.Router()
const FriendFollowingRoute = express.Router()
const followerRoute = express.Router()
//follower Route

const followersRoute = express.Router()

// addfollowRoute.post('/add/follow/:id', followController.addfollow)
// followingRoute.get('/following/:id', followController.getfollowLevel1)
// followingsRoute.get('/followings/', followController.getfollowingsLevel1)
// unfollowRoute.delete('/unfollow/:id', followController.unfollow)
// FriendFollowingRoute.get(
//   '/friendFollowing/:id',
//   followController.getFriendFollowingLevel1
// )

// followerRoute.get('/follower/:id', followController.getfollowerLevel1)
// followersRoute.get('/followers/', followController.getfollowersLevel1)

module.exports = {
  addfollowRoute,
  followingRoute,
  followingsRoute,
  unfollowRoute,
  FriendFollowingRoute,
  followerRoute,
  followersRoute,
}
