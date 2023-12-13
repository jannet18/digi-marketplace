import { createTRPCReact } from "@trpc/react-query";
import AppRouter from "next/dist/client/components/app-router";

export const trpc = createTRPCReact(() => {
  <AppRouter />;
});
