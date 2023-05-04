import {
  useLoaderData,
  useSubmit,
} from "@remix-run/react";
import { useNavigate } from "@remix-run/react";

export function SnippetsPanel({ snipp }) {
  const navigate = useNavigate();
  const { snippets } = useLoaderData();
  let submit = useSubmit();

  return (
    <div className="w-1/6 bg-gray-200 flex flex-col">
      <div className="flex-1 overflow-y-scroll py-4 flex flex-col gap-y-10">
        <nav aria-label="Main navigation" className="remix-app__header-nav">
          <div className="flex flex-col justify-between mt-6">
            <ul className="">
              {snipp.map((sn) => (
                <li key={sn.snippetId} className="cursor-pointer">
                  <p
                    onClick={() => navigate(`snippet/${sn.snippetId}`)}
                    className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md"
                  >
                    {sn.category}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
      <div className="text-center p-6 bg-gray-300">
        <form action="/logout" method="post">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >
            Sign Out
          </button>
        </form>
      </div>
    </div>
  );
}
