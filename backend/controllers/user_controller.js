import { User } from "../models/usermodel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//register

export const register = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, role } = req.body;
    console.log( fullname, email, phoneNumber, password, role)
    if (!fullname || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "something went wrong!!",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "user already exist",
        status: false,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      fullname,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
    });

    return res.status(201).json({
      message: "created successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

//login

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    console.log(email, password, role)
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "something went wrong!!",
        success: false,
      });
    }
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "something went wrong!!",
        success: false,
      });
    }
    const ispasswordmatched = await bcrypt.compare(password, user.password);
    if (!ispasswordmatched) {
      return res.status(400).json({
        message: "something went wrong!!",
        success: false,
      });
    }
    if (role != user.role) {
      return res.status(400).json({
        message: "account does not exist with current role",
        success: false,
      });
    }

    const tokendata = {
      userId: user._id,
    };
    const token = await jwt.sign(tokendata, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpsOnly: true,
        sameSite: "strict",
      })
      .json({
        message: "welcome",
        user,
        success: true,
      });
  } catch (error) {
    console.log(error);
  }
};

//logout

export const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "logged out successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
export const updateprofile = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, bio, skills } = req.body;
    const file = req.file;

    //cloudinary ayega idhar
    let skillsarray;
    if (skills) {
      const skillsarray = skills.split(",");
    }
    const userId = req.id; //middlewares se ayega
    let user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        message: "user not found",
        success: false,
      });
    }

    //update things in profile
    if (fullname) user.fullname = fullname;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (email) user.email = email;
    if (bio) user.profile.bio = bio;
    if (skills) user.profile.skills = skillsarray;

    //resume comes here

    await user.save();
    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      r0le: user.role,
      profile: user.profile,
    };
    return res.status(200).json({
      message: "profile updated",
      user,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
