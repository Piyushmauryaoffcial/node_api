import JWT from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    JWT.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          success: fasle,
          message: "Invalid Token",
        });
      } else {
        req.user = { id: decoded.id };
        next();
      }
    });
  } catch (error) {
    res.status(401).send({
      success: false,
      message: "Auth Middleware Error",
      error,
    });
  }
};
