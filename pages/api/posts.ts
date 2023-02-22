// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'

import { posts } from './data/posts'

const getPosts = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(posts)
}

export default getPosts