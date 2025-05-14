import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Button } from "../ui/button";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MessageTable({ messages }: { messages: any[] }) {
    return (
        <div className="bg-white rounded-md shadow">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Status</TableHead>
                        <TableHead>From</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {messages.map((message) => (
                        <TableRow key={message._id} className={message.read ? '' : 'bg-blue-50'}>
                            <TableCell>
                                <div className={`w-3 h-3 rounded-full ${message.read ? 'bg-gray-300' : 'bg-blue-500'}`} />
                            </TableCell>
                            <TableCell>
                                <div className="font-medium">{message.name}</div>
                                <div className="text-sm text-gray-500">{message.email}</div>
                            </TableCell>
                            <TableCell className={!message.read ? 'font-semibold' : ''}>{message.subject}</TableCell>
                            <TableCell>{message.date}</TableCell>
                            <TableCell className="text-right">
                                <Button variant="ghost" size="sm">View</Button>
                                <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700">Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
