import { json, LoaderFunction, redirect } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { getSnippetById } from '~/utils/user.server'
import { getAllSnippets } from '~/utils/user.server'

export const loader: LoaderFunction = async ({ request, params }) => {
  const { snippetId } = params

  if (typeof snippetId !== 'string') {
    return redirect('/home')
  }

  const snipp = await getSnippetById(snippetId)
  return json({ snipp})

}

export default function SnippetModal() {
  const data = useLoaderData()
  return <h2> Snippets: {data.snipp.category}</h2>
  
}