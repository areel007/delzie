"use client";

// import { getServerSession } from "next-auth";
// import { authOptions } from "../../../api/auth/[...nextauth]/route"; // adjust path if needed
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

import { useState } from 'react';
import axios from 'axios';
import { Button } from "@/components/Button";

export default function WriteBlog() {
    // const session = await getServerSession(authOptions);

    const { data: session, status } = useSession();

    if (!session) {
        redirect("/signin");
    }

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [markdown, setMarkdown] = useState('');
    const [author, setAuthor] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [clapCount, setClapCount] = useState<number>(0);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!file) {
            alert("Please select an image");
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('category', category);
        formData.append('markdown', markdown);
        formData.append('file', file);
        formData.append('author', author);
        formData.append('clap', "0");

        try {
            setLoading(true);
            const res = await axios.post('/api/blogs', formData);
            console.log('Submitted:', res.data);
            // reset state if needed
        } catch (err) {
            console.error('Error submitting form:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-[800px] w-[90%] mx-auto mb-[40px] flex flex-col gap-[10px]">
            <div className="flex items-center gap-[20px]">
                {title && <span>Title</span>}

                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                    className={`py-[0px] outline-none text-[24px] md:text-[36px] focus:pl-[20px] w-full ${title ? 'border-l pl-[20px]' : 'border-none'}`}
                />
            </div>

            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={e => setAuthor(e.target.value)}
                required
                className="outline-none p-[10px] border border-zinc-800"
            />

            <input type="file" accept="image/*" onChange={handleImageChange} className="outline-none p-[10px] border border-zinc-800" />

            <select className="outline-none p-[10px] border border-zinc-800" value={category} onChange={e => setCategory(e.target.value)}>
                <option value="">Select Category</option>
                <option value="all">All</option>
                <option value="fe">Frontend Development</option>
                <option value="be">Backend Development</option>
                <option value="mobile">Mobile Development</option>
            </select>

            <textarea
                placeholder="Content"
                value={markdown}
                onChange={e => setMarkdown(e.target.value)}
                className="min-h-[150px] outline-none border p-[10px] border-zinc-800"
            ></textarea>

            <Button type="submit" text="Publish" className="bg-[#00ff00] py-[10px] px-[20px] text-black/[.7]" />
        </form>
    );
}