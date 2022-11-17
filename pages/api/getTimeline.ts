// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Timeline } from "../../typings";

const query = groq`
  *[_type == "timeline"] {
    ...,
    technologies[]->
  }
`;

type Data = {
    timeline: Timeline[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const timeline: Timeline[] = await sanityClient.fetch(query);

  res.status(200).json({ timeline });
}