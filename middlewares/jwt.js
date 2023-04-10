import User from "../models/User.js";
import jwt from 'jsonwebtoken'
export const extractJwt = async (
    req,
    res ,
    next
  ) => {
    const bearer = req.headers["authorization"];
    let headerToken = bearer.split(" ")[1]
    if (headerToken) {
      jwt.verify(headerToken, "secret", (err, data) => {
        if (err) {
          return res.status(403).json("Token in not valid ");
        } else {
          User.findByPk(data.id)
            .then(() => {
              req.user = data;
              console.log(req.user);
              next();
            })
            .catch((err) => {
              return res.status(404).json("invalid token for user");
            })
        }
      });
    } else {
      return res.status(404).json("Token in not present in header");
    }
  };
  