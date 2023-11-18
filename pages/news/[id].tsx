import Link from "next/link";

import { getAllPostIds, getPostData } from "@/lib/posts";
import Navbar from "@/components/Navbar";

interface PostData {
  id: string;
  title: string;
  date: string;
  author: string;
  subtitle: string;
  contentHtml: string;
}

export default function Post({ postData }: { postData: PostData }) {
  return (
    <div className='container mx-auto px-4 py-8'>
      <Navbar />

      {/* Back Button */}
      <div className='mb-4'>
        <Link href='/news'>
          <span className='text-blue-600 hover:text-blue-800 transition duration-300'>
            ← Back to Posts
          </span>
        </Link>
      </div>

      {/* Title and Date */}
      <div className='text-center mb-4'>
        <h1 className='text-3xl font-bold mb-2'>{postData.title}</h1>
        <p className='text-xl text-gray-600'>{postData.date}</p>
      </div>

      {/* Subtitle */}
      {/* Replace 'Your Subtitle Here' with actual subtitle data if available */}
      <p className='text-center text-lg mb-4'>{postData.subtitle}</p>

      {/* Author */}
      {/* Replace 'Author Name' with actual author data if available */}
      <p className='text-center text-md mb-8'>By {postData.author}</p>

      {/* Content */}
      <div
        className='prose mx-auto'
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

interface Params {
  id: string;
}

export async function getStaticProps({ params }: { params: Params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
