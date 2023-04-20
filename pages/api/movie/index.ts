import { NextApiRequest, NextApiResponse } from "next";
import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";
import { prisma } from "../../../utils/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "POST": {
      const data = req.body;
      console.log('data', data)
      const session = await getSession(req, res);
      const userId = session.user.sub;
      await prisma.movie.create({
        data: {
          url: data.url,
          author_id: userId,
          created_at: new Date(),
        }
      })
      res.redirect("/");
      break;
    }
    case "GET": {
      console.log("GET");
      res.status(200).json([{ id: 1 }, { id: 2 }]);
      break;
    }

    default:
      break;
  }
}

export default withApiAuthRequired(handler);
