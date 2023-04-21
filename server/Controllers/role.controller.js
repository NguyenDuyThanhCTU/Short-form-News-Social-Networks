const User = require('../Models/User.model')
const Role = require('../Models/role.model')

const roleController = {}

roleController.newRole = async (req, res) => {
  const nameRole = req.body
  try {
    const addRole = new Role(nameRole)
    await addRole.save()

    res.status(200).json(addRole)
  } catch (err) {
    res.status(500).json({success: false, message: 'Loi server'})
  }
}

roleController.addRole = async (req, res) => {
  const username = req.body.name_user
  const rolename = req.body.name_role

  try {
    // lấy id từ tên user muốn
    const userUI = await User.findOne({name: username})
    const userId = userUI ? userUI._id : null
    //  lấy rote từ tên rote user chọn
    const roleUI = await Role.findOne({name: rolename})
    const roleId = roleUI ? roleUI._id : null

    const updatedUser = await User.findOneAndUpdate(
      {_id: userId},
      {role: roleId},
      {new: true}
    )
    const updateRole = await Role.findOneAndUpdate(
      {_id: roleId},
      {user: userId},
      {new: true}
    )
    if (!updatedUser || !updateRole) {
      res.status(404).json({success: false, message: 'User or Role not found'})
    }

    res.status(200).json({success: true})
  } catch (err) {
    res.status(500).json({success: false, message: 'loi server'})
  }
}

roleController.getRole = async (req, res) => {
  const username = req.params.name
  try {
    const user = await User.findOne({name: username}).populate('role')

    if (!user) {
      return res.status(404).send('User not found')
    }
    const roleName = user.role.name
    res.status(200).json(roleName)
  } catch (err) {
    res.status(500).json({success: false, message: 'loi server'})
  }
}

module.exports = roleController
