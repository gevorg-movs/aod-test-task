import User from "../users/users.model";
import config from "config";
import bcrypt from "bcrypt";
import { IUser, LoginUserDto, RegisterUserDto } from "../users/users.types";
import jwt from "jsonwebtoken";

export default class AuthService {
  static async register(registerUserDto: RegisterUserDto) {
    const candidate = await User.findOne({
      where: {
        email: registerUserDto.email,
      },
    });

    if (candidate) {
      throw new Error("The email has been already taken");
    }

    const hashedPassword = await bcrypt.hash(
      registerUserDto.password,
      config.get("bcrypt.salt")
    );

    await User.create({
      ...registerUserDto,
      password: hashedPassword,
    });

    return await this.login({
      email: registerUserDto.email,
      password: registerUserDto.password,
    });
  }

  static async login(loginUserDto: LoginUserDto) {
    const user = await User.findOne({
      where: {
        email: loginUserDto.email,
      },
    });

    if (!user) {
      throw new Error("The user with the following credentials not found");
    }

    const isMatch = await bcrypt.compare(loginUserDto.password, user.password);

    if (!isMatch) {
      throw new Error("The user with the following credentials not found");
    }

    const expiresIn = Date.now() + Number(config.get("jwt.expiresIn"));

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      config.get("jwt.secret"),
      {
        expiresIn,
      }
    );

    return {
      token,
      expiresIn,
      user,
    };
  }

  static async verify(accessToken: string) {
    const payload = jwt.verify(accessToken, config.get("jwt.secret")) as IUser;

    const user = await User.findOne({
      where: {
        email: payload.email,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }
}
