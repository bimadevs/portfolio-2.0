import { getPosts } from "@/app/utils/utils";
import { Grid } from "@/once-ui/components";
import Post from "./Post";
import { SpacingToken } from "@/once-ui/types";

interface PostsProps {
  range?: [number] | [number, number];
  columns?: "1" | "2" | "3";
  thumbnail?: boolean;
  marginBottom?: SpacingToken | number | string;
}

export function Posts({
  range,
  columns = "1",
  thumbnail = false,
  marginBottom = "40",
}: PostsProps) {
  let allBlogs = getPosts(["src", "app", "blog", "posts"]);

  const sortedBlogs = allBlogs.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedBlogs = range
    ? sortedBlogs.slice(range[0] - 1, range.length === 2 ? range[1] : sortedBlogs.length)
    : sortedBlogs;

  return (
    <>
      {displayedBlogs.length > 0 && (
        <Grid columns={columns} mobileColumns="1" fillWidth marginBottom={marginBottom as any} gap="m">
          {displayedBlogs.map((post) => (
            <Post key={post.slug} post={post} thumbnail={thumbnail} />
          ))}
        </Grid>
      )}
    </>
  );
}
