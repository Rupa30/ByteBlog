import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import appwriteService from "../appwrite/config";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-100 rounded-xl p-4'>
        <div className='w-full justify-center mb-4'>
          <LazyLoad height={200} offset={100} once>
            <img
              src={appwriteService.getFilePreview(featuredImage)}
              alt={title}
              className='rounded-xl'
            />
          </LazyLoad>
        </div>
        <h2 className='text-xl font-bold'>{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
