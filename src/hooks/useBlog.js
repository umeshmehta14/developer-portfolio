function UseBlog() {
  const blogs = [
    {
      id: 1,
      canonical_url:
        "https://umeshmehta.hashnode.dev/type-error-vs-reference-error",
      cover_image:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1676290466086/13aa07dd-0beb-4331-937a-e008abea95e7.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      published_at: "2023-02-13T13:16:00Z",
      public_reactions_count: 2,
      comments_count: 0,
      title: "Type Error Vs. Reference Error",
      description:
        "If you write code in javascript and you also saw some errors. In the bunch of error types, today we talked about type errors and reference errors...",
    },
    {
      id: 2,
      canonical_url: "https://umesh14.hashnode.dev/error-handling-in-js",
      cover_image:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1678609861209/784f7b21-fe3e-41ac-a2e3-e54d3353fc25.webp?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      published_at: "2023-03-12T19:16:00Z",
      public_reactions_count: 2,
      comments_count: 2,
      title: "Error Handling In Js",
      description:
        "If we write javascript code there might be some chance of getting errors don't be afraid this is part of programming. By producing errors...",
    },
    {
      id: 3,
      canonical_url:
        "https://umeshmehta.hashnode.dev/is-there-any-difference-between",
      cover_image:
        "https://tse1.mm.bing.net/th?id=OIP.3mAB-fEpX8cv3v415vREdQHaEK&pid=Api&P=0&h=220",
      published_at: "2023-02-12T16:13:00Z",
      public_reactions_count: 3,
      comments_count: 0,
      title: "Is there any difference between = , == , ===?",
      description:
        "Yes, there is a lot of difference between these three operators. First, we discuss the = (equal to) operator. In general, we say this is equal...",
    },
  ];

  return { blogs };
}

export default UseBlog;
