// app/routes/home.tsx

import { json, LoaderFunction } from "@remix-run/node";
import { Layout } from "~/components/layout";
import { SnippetsPanel } from "~/components/snippets-panel";
import { getAllSnippets, getAllSnippetsCategories, getSnippetById } from "~/utils/user.server";
import { Outlet, useLoaderData } from "@remix-run/react";
import SnippetModal from "./home/snippet.$snippetId";

export const loader: LoaderFunction = async ({ request }) => {
  const snippets = await getAllSnippetsCategories();
  const all = await getAllSnippets();
  return json({ all, snippets});
};

export default function Home() {
  const { all, snippets} = useLoaderData();
  return (
    <Layout>
      <Outlet />
      <div className="h-full flex">
        <SnippetsPanel snipp={snippets} />
        <div className="flex-1 flex flex-col">
          {/* Search Bar Goes Here */}
          <div className="flex-1 flex">
            <div className="w-full p-10 flex flex-col gap-y-4">
              {all.map((x) => (
                <div>
                  <h1 key={x.category}>{x.category}</h1>
                  <h1 className="underline" key={x.snippetId}> {x.title}</h1>
                  <p key={x.snippetId}>{x.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
