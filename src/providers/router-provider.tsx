"use client";

import type { PropsWithChildren } from "react";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { RouterProvider } from "react-aria-components";

declare module "react-aria-components" {
    interface RouterConfig {
        routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>["push"]>[1]>;
    }
}

export const RouteProvider = ({ children }: PropsWithChildren) => {
    const router = useRouter();

    const navigate = useCallback(
        (path: string, options?: Parameters<typeof router.push>[1]) => {
            router.push(path, options);
        },
        [router],
    );

    return <RouterProvider navigate={navigate}>{children}</RouterProvider>;
};
