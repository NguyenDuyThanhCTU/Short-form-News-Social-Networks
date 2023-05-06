const Auth = require('./privateRoute/Auth.route')
const User = require('../Routes/privateRoute/User.route')
const Post = require('../Routes/privateRoute/Post.route')
const Warning = require('../Routes/privateRoute/Warning.route')
const Lock = require('../Routes/privateRoute/Lock.route')
const Follow = require('../Routes/privateRoute/Follow.route')
const Block = require('../Routes/privateRoute/Block.route')
const Topic = require('./privateRoute/Content.route')
const Interaction = require('./privateRoute/Interaction.route')
const {
  getRoleRoute,
  newRoleRoute,
  addRoleRoute,
} = require('./privateRoute/Role.route')

const publicRoute = (app) => {}

const privateRoute = (app) => {
  //Auth routes
  app.use(Auth.loginRoute)
  app.use(Auth.logoutRoute)
  app.use(Auth.recoveryRoute)
  app.use(Auth.signupRoute)
  app.use(Auth.accountsRoute)
  app.use(Auth.searchAccountRoute)
  app.use(Auth.accountRoute)
  //User routes
  app.use(User.profileRoute)
  app.use(User.profilesRoute)
  app.use(User.updateProfileRoute)
  app.use(User.deleteProfileRoute)

  //Content routes
  app.use(Topic.AddTopicRoute)
  app.use(Topic.TopicsRoute)

  // Role
  // app.use(getRoleRoute)
  // app.use(newRoleRoute)
  // app.use(addRoleRoute)

  //Post
  app.use(Post.addPostRoute)
  app.use(Post.PostsRoute)
  app.use(Post.PostRoute)
  app.use(Post.updatePostRoute)
  // app.use(Post.deletePostRoute)

  //Warning
  app.use(Warning.addLevelRoute)
  app.use(Warning.levelRoute)
  app.use(Warning.LevelsRoute)
  app.use(Warning.updateLevel)
  app.use(Warning.deleteLevel)

  //Reason warning
  app.use(Warning.addReasonRoute)
  app.use(Warning.ReasonRoute)
  app.use(Warning.ReasonsRoute)
  app.use(Warning.updateReasonRoute)
  app.use(Warning.deleteReasonRoute)

  //Warning
  app.use(Warning.addWarningRoute)
  app.use(Warning.WarningLv1Route)
  app.use(Warning.WarningLv2Route)
  app.use(Warning.WarningLv3Route)
  app.use(Warning.WarningLv4Route)
  app.use(Warning.SearchWarningRoute)
  app.use(Warning.updateWarningRoute)

  // app.use(Lock.LockProfile)
  // app.use(Lock.unLockProfile)

  //Follow
  app.use(Follow.addfollowRoute)
  app.use(Follow.followingRoute)
  app.use(Follow.followingsRoute)
  app.use(Follow.unfollowRoute)
  app.use(Follow.FriendFollowingRoute)
  app.use(Follow.followerRoute)
  app.use(Follow.followersRoute)

  //Block
  app.use(Block.ReasonRoute)
  app.use(Block.addBlockRoute)
  app.use(Block.blocksRoute)
  app.use(Block.unblock)
  app.use(Block.addBlockRoute)
  app.use(Block.ReasonsRoute)
  app.use(Block.updateReasonRoute)
  app.use(Block.deleteReasonRoute)

  //Interaction
  app.use(Interaction.CommentRoute)
  app.use(Interaction.LikeRoute)
  app.use(Interaction.ViewRoute)
  app.use(Interaction.deleteCommentRoute)
  app.use(Interaction.unLikeRoute)
}

module.exports = {publicRoute, privateRoute}
