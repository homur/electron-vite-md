import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export const Chat = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState<string>("");
    const messageContainerRef = useRef<HTMLDivElement>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Load messages from localStorage when the component mounts
    useEffect(() => {
        const savedMessages = localStorage.getItem("chatMessages");
        if (savedMessages) {
            setMessages(JSON.parse(savedMessages));
        }
    }, []);

    // Save messages to localStorage whenever the messages change
    useEffect(() => {
        if (messages.length > 0) {
            localStorage.setItem("chatMessages", JSON.stringify(messages));
        }

        if (messageContainerRef.current && messagesEndRef.current) {
            messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;

        // Append user message to the chat UI
        const userMessage = `You: ${input}`;
        setMessages((prev) => [...prev, userMessage]);

        try {
            // Send message to the API
            const response = await fetch("http://localhost:3001/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: input }), // Send the user's message to the API
            });

            const result = await response.json();
            // Append AI response to the chat UI
            setMessages((prev) => [
                ...prev,
                `AI: ${result.reply || "No response from AI"}`, // Correct key here
            ]);
        } catch (error) {
            setMessages((prev) => [...prev, `Error: Could not connect to API`]);
        }

        setInput(""); // Clear input
    };

    return (
        <div className="mx-auto mt-10 flex h-[600px] w-full max-w-2xl flex-col rounded-2xl bg-gray-50 p-4 shadow-xl">
            {/* Messages List */}
            <div
                ref={messageContainerRef}
                className="mb-4 flex-grow space-y-3 overflow-y-auto rounded-xl bg-white p-2"
            >
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={msg.startsWith("You") ? "text-blue-600" : "text-gray-800"}
                    >
                        {msg}
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Section */}
            <div className="flex items-center space-x-2">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    className="flex-grow rounded-xl border p-2 focus:border-blue-300 focus:outline-none focus:ring"
                    placeholder="Type your message..."
                />
                <Button onClick={handleSend}>Send</Button>
            </div>
        </div>
    );
};
