import Link from "next/link";

interface Props {
  post: {
    id: string;
    date: string;
    title: string;
    author: string;
    subtitle: string;
  };
}

const PostThumbnail = ({ post }: Props) => {
  return (
    <Link href={`/news/${post.id}`}>
      <div className='max-w-sm h-48 rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
        <div className='px-6 py-4'>
          <div className='font-bold text-2xl tracking-wider mb-2 font-cursive'>
            {post.title}
          </div>
          <p className='text-gray-700 text-base'>{post.date}</p>
          <p className='text-gray-700 text-base'>{post.author}</p>
          <p className='text-gray-700 text-base'>{post.subtitle}</p>
        </div>
        <div className='px-6 pt-4 pb-2'>
          {/* Tags or additional info can go here */}
        </div>
      </div>
    </Link>
  );
};

export default PostThumbnail;
