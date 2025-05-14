import { useQuery } from "@tanstack/react-query";

export const useMessages = () => {
    return useQuery({
        queryKey: ["messages"],
        queryFn: async () => {
            const res = await fetch("/api/messages");
            if (!res.ok) throw new Error("Failed to fetch messages");
            return res.json();
        },
    });
};
