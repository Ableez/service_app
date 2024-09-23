import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createQueryClient } from "./query-client";
import { AppRouter } from "./root";
import {
  createTRPCReact,
  httpBatchLink,
  httpLink,
  loggerLink,
  unstable_httpBatchStreamLink,
} from "@trpc/react-query";
import { useState } from "react";
import SuperJSON from "superjson";

let clientQueryClientSingleton: QueryClient | undefined = undefined;

export const getClientQueryClient = () => {
  if (!clientQueryClientSingleton) {
    clientQueryClientSingleton = createQueryClient();
  }
  return clientQueryClientSingleton;
};

export const api = createTRPCReact<AppRouter>();

export const TRPCReactProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const queryClient = getClientQueryClient();

  const [trpcClient] = useState(() =>
    api.createClient({
      links: [
        loggerLink({
          enabled: (op) =>
            process.env.NODE_ENV === "development" || op.direction === "down",
        }),
        httpLink({
          url: "http://localhost:3000/api/trpc",
        }),
      ],
      transformer: SuperJSON,
    })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <api.Provider client={trpcClient} queryClient={queryClient}>
        {children}
      </api.Provider>
    </QueryClientProvider>
  );
};

export const getBaseUrl = () => {
  if (typeof window !== "undefined") return "";
  if (process.env.BASE_URL) return `https://${process.env.BASE_URL}`;
  return `http://localhost:${process.env.PORT ?? 8081}`;
};
