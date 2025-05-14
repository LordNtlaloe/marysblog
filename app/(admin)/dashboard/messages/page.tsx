import { useMessages } from "@/hooks/use-message";
import MessageTable from "@/components/messages/MessageTable";

export default function MessagesPage() {
    const { data: messages, isLoading } = useMessages();

    if (isLoading) return <p>Loading...</p>;
    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Messages</h1>
            <MessageTable messages={messages} />
        </div>
    );
}
