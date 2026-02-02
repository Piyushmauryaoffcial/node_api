import userModule from "../models/userModel.js";

//==== get user info controller =====//
export const getUserController = async (req, res) => {
  try {
    const user = await userModule.findById(req.user.id);

    console.log("Fetched User:", user);
    res.status(200).send({
      success: true,
      message: "User info fetched successfully",
      user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in getting user info",
      error: error.message,
    });
  }
};

export const updateUserController = async (req, res) => {
  try {
    //== gdt user detials from req ==
    const user = await userModule.findById(req.user.id);
    //validate user
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }
    //=== update user details =====//
    const { userName, phone, address } = req.body;
    user.userName = userName || user.userName;
    user.phone = phone || user.phone;
    user.address = address || user.address;
    await user.save();
    res.status(200).send({
      success: true,
      message: "User info updated successfully",
      user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in updating user info",
      error: error.messsage,
    });
  }
};
//====  deleter user controller ===============

export const deleteUserController = async (req, res) => {
  try {
    //=======  find  user
    await userModule.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in  deleting user",
      error,
    });
  }
};
