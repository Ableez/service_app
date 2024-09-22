import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  //   blogs: blogsRouter,
  //   works: worksRouter,
});

export type AppRouter = typeof appRouter;
