import { appRouter } from "@/trpc/root";
import { createTRPCContext } from "@/trpc/trpc";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const createContext = async (req: Request) => {
  return createTRPCContext({
    headers: req.headers,
  });
};

const handler = async (req: Request) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => createContext(req),
    onError:
      process.env.NODE_ENV === "development"
        ? ({ path, error }) => {
            console.error(
              `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
            );
          }
        : undefined,
  });
};

export { handler as GET, handler as POST };
