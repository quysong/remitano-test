import { NextApiRequest, NextApiResponse } from "next";
import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";
import { prisma } from "../../../utils/db";
import { getMoviePagination } from "../../../helpers/movie";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "POST": {
      const data = req.body;
      const session = await getSession(req, res);
      const userId = session.user.sub;
      await prisma.movie.create({
        data: {
          url: data.url,
          author_id: userId,
          created_at: new Date(),
        },
      });
      res.redirect("/");
      break;
    }
    case "GET": {
      const { page } = req.query;
      const data = await getMoviePagination(Number(page));
      res.status(200).json(data);
      break;
    }

    default:
      break;
  }
}

export default function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    // No authentication required for GET method
    handler(req, res);
  } else {
    // Authentication required for POST method
    withApiAuthRequired(handler)(req, res);
  }
}
