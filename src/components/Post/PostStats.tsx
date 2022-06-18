import { LensterPost } from '@generated/lenstertypes'
import React, { FC } from 'react'

interface Props {
  post: LensterPost
}

const PostStats: FC<Props> = ({ post }) => {
  return (
    <div className="border-y py-3 mt-5 text-sm space-x-6">
      <button className="space-x-1">
        <span className="font-bold">{post?.stats?.totalAmountOfMirrors}</span>
        <span className="text-gray-500">Mirrors</span>
      </button>
      <button className="space-x-1">
        <span className="font-bold">{post?.stats?.totalUpvotes}</span>
        <span className="text-gray-500">Likes</span>
      </button>
    </div>
  )
}

export default PostStats
