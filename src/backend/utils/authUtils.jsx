import { Response } from "miragejs";
import dayjs from "dayjs";
import {jwtDecode} from "jwt-decode";

export const requiresAuth = function (request) {
  const encodedToken = request.requestHeaders.authorization;
  const decodedToken = jwtDecode(
    encodedToken,
    "D428D715E440367121D7DF9BE40FE5C4D1C4A15294DC06381D89DCDDF1D65015"
  );
  if (decodedToken) {
    const user = this.db.users.findBy({ username: decodedToken.username });
    return user;
  }
  return new Response(
    401,
    {},
    { errors: ["The token is invalid. Unauthorized access error."] }
  );
};

export const formatDate = () => dayjs().format("YYYY-MM-DDTHH:mm:ssZ");
