import { getAllPostIds, getPostData } from "@/lib/posts";
import Navbar from "@/components/Navbar";

interface PostData {
  id: string;
  title: string;
  date: string;
  contentHtml: string;
}

export default function Post({ postData }: { postData: PostData }) {
  return (
    <div>
      <Navbar />
      <h1>Post</h1>
      {postData.title}
      <br />
      {postData.date}
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
