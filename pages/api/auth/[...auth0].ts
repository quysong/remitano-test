import {
  handleAuth,
  handleLogin,
  handleCallback,
  Session,
} from "@auth0/nextjs-auth0";
import { prisma } from "../../../utils/db";

const afterCallback = async (
  req: any,
  res: any,
  session: Session,
  state: any
) => {
  try {
    const user = session.user;
    const { sub, name } = user;
    if (!sub) return session;

    const result = await prisma.user.findFirst({
      where: {
        id: sub,
      },
    });
    if (!result) {
      await prisma.user.create({
        data: {
          id: sub,
          email: name,
        },
      });
    }

    return session;
  } catch (error) {
    console.log("error", error);
    return session;
  }
};

export default handleAuth({
  async login(req, res) {
    try {
      // Pass in custom params to your handler
      await handleLogin(req, res);
      // Add your own custom logging.
    } catch (error: any) {
      // Add you own custom error logging.
      res.status(error.status || 500).end();
    }
  },
  async callback(req, res) {
    try {
      // Pass in custom params to your handler
      await handleCallback(req, res, { afterCallback });
      // Add your own custom logging.
    } catch (error: any) {
      // Add you own custom error logging.
      res.redirect("/");
      res.status(error.status || 500).end();
    }
  },
});
