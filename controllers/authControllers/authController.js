import User from "../../models/userModel.js";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

export const authController = async (req, res) => {
  try {
    const { userName, email, password, phone, address } = req.body;
    if (!userName || !email || !password || !phone) {
      return res.status(400).send({
        success: false,
        message: "Please provide all required fields",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(500).send({
        success: false,
        message: "User already exists on this email",
      });
    }
    //=== hasing paSSWORD =========
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      userName,
      email,
      password: hashedPassword,
      phone,
      address,
    });
    await newUser.save();
    res.status(201).send({
      success: true,
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      error: error.message,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Please provide email and password",
      });
    }
    //=== check user ===//
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found, please register first",
      });
    }
    //=== check password ===//

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).send({
        success: false,
        message: "Invalid password",
      });
    }
    //--- hide password in response ==

    user.password = undefined; // Hide password in response
    //=  -- generate token =====//
    const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).send({
      success: true,
      message: "Login successful",
      user: user,
      token: token,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in Login API",
      error: error.message,
    });
  }
};
