"use client";

import { Post } from "@prisma/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [loading, setLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/image");
      const data = await response.json();
      console.log(data);
      setPosts(data)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="w-full min-h-dvh border border-pink-400 flex justify-center items-center p-3 pt-[72px]">
      {loading ? (
        "loading"
      ) : (
          posts.map((post) => {
            return (
              <div className="w-full h-full" key={post.id}>
                <Image
                  alt={post.prompt}
                  src={post.url}
                  width={250}
                  height={250}
                  className="object-cover w-full h-full "
                />
              </div>
            );
          })
      
      )}
    </div>
  );
}
