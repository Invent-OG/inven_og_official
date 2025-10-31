"use client";
import React, { useState } from "react";

const NAV_ITEMS = [
  { label: "Leads", key: "leads" },
  { label: "Blogs", key: "blogs" },
];

// Sample Data
const sampleLeads = [
  {
    id: 1,
    name: "Alice Wilson",
    email: "alice@example.com",
    phone: "123-456-7890",
    status: "New",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    phone: "555-123-4567",
    status: "Contacted",
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie@example.com",
    phone: "987-654-3210",
    status: "Qualified",
  },
];
const sampleBlogs = [
  { id: 1, title: "First Blog Post", author: "Admin", date: "2024-10-30" },
  {
    id: 2,
    title: "How to Use Supabase",
    author: "Jane Doe",
    date: "2024-10-29",
  },
];

export default function AdminPanel() {
  const [currentTab, setCurrentTab] = useState("leads");
  const [blogs, setBlogs] = useState(sampleBlogs);
  const [newBlog, setNewBlog] = useState({ title: "", author: "" });

  function handleAddBlog(e: React.FormEvent) {
    e.preventDefault();
    setBlogs([
      ...blogs,
      {
        id: blogs.length + 1,
        title: newBlog.title,
        author: newBlog.author,
        date: new Date().toISOString().slice(0, 10),
      },
    ]);
    setNewBlog({ title: "", author: "" });
  }

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-gray-100 border-b md:border-b-0 md:border-r flex flex-row md:flex-col p-4">
        <h2 className="text-2xl font-bold mb-4 md:mb-6 flex-1">Admin Panel</h2>
        <nav className="flex md:flex-col gap-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.key}
              onClick={() => setCurrentTab(item.key)}
              className={`text-left px-4 py-2 rounded transition-colors duration-150 ${
                currentTab === item.key
                  ? "bg-blue-500 text-white font-semibold"
                  : "hover:bg-blue-100 text-gray-700"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-4 md:p-8">
        {currentTab === "leads" && (
          <section>
            <h1 className="text-xl font-bold mb-4">Manage Leads</h1>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 rounded border shadow">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                      Phone
                    </th>
                    <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-5 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sampleLeads.map((lead) => (
                    <tr key={lead.id}>
                      <td className="px-5 py-3 whitespace-nowrap">
                        {lead.name}
                      </td>
                      <td className="px-5 py-3 whitespace-nowrap">
                        {lead.email}
                      </td>
                      <td className="px-5 py-3 whitespace-nowrap">
                        {lead.phone}
                      </td>
                      <td className="px-5 py-3 whitespace-nowrap">
                        {lead.status}
                      </td>
                      <td className="px-5 py-3 whitespace-nowrap flex gap-2">
                        <button className="px-3 py-1 bg-green-500 text-white rounded text-xs">
                          View
                        </button>
                        <button className="px-3 py-1 bg-blue-500 text-white rounded text-xs">
                          Edit
                        </button>
                        <button className="px-3 py-1 bg-red-500 text-white rounded text-xs">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
        {currentTab === "blogs" && (
          <section>
            <h1 className="text-xl font-bold mb-4">Manage Blogs</h1>
            {/* Add Blog Form */}
            <form
              className="bg-white border rounded p-4 mb-8 flex flex-col gap-4 max-w-md"
              onSubmit={handleAddBlog}
            >
              <h2 className="text-lg font-semibold mb-2">Add New Blog</h2>
              <input
                className="border rounded px-3 py-2"
                type="text"
                placeholder="Title"
                value={newBlog.title}
                onChange={(e) =>
                  setNewBlog({ ...newBlog, title: e.target.value })
                }
                required
              />
              <input
                className="border rounded px-3 py-2"
                type="text"
                placeholder="Author"
                value={newBlog.author}
                onChange={(e) =>
                  setNewBlog({ ...newBlog, author: e.target.value })
                }
                required
              />
              <button
                className="self-end bg-blue-500 text-white px-4 py-2 rounded"
                type="submit"
              >
                Add Blog
              </button>
            </form>
            {/* Blogs Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 rounded border shadow">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                      Author
                    </th>
                    <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {blogs.map((blog) => (
                    <tr key={blog.id}>
                      <td className="px-5 py-3 whitespace-nowrap">
                        {blog.title}
                      </td>
                      <td className="px-5 py-3 whitespace-nowrap">
                        {blog.author}
                      </td>
                      <td className="px-5 py-3 whitespace-nowrap">
                        {blog.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
