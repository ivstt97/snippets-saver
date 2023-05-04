import { useState } from "react";
import { Layout } from "~/components/layout";
import { FormField } from "~/components/form-field";
import { ActionFunction, json, LoaderFunction, redirect } from '@remix-run/node'
import { validateEmail, validateName, validatePassword } from '~/utils/validators.server'
import { login, register, getUser } from '~/utils/auth.server'
import { useActionData } from '@remix-run/react'
import { useRef, useEffect } from 'react'

// export const loader: LoaderFunction = async ({ request }) => {
//   // If there's already a user in the session, redirect to the home page, but it may NOT WORK!!!!!!!!!!
//   return (await getUser(request)) ? redirect('/') : null
// }

// errors not displayed? 

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  const action = form.get('_action')
  const email = form.get('email')
  const password = form.get('password')
  let firstName = form.get('firstName')
  let lastName = form.get('lastName')


  if (typeof action !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
    return json({ error: `Invalid Form Data`, form: action }, { status: 400 })
  }

  if (action === 'register' && (typeof firstName !== 'string' || typeof lastName !== 'string')) {
    return json({ error: `Invalid Form Data`, form: action }, { status: 400 })
  }

  const errors = {
    email: validateEmail(email),
    password: validatePassword(password),
    ...(action === 'register'
      ? {
          firstName: validateName((firstName as string) || ''),
          lastName: validateName((lastName as string) || ''),
        }
      : {}),
  }

  if (Object.values(errors).some(Boolean))
    return json({ errors, fields: { email, password, firstName, lastName }, form: action }, { status: 400 })

    switch (action) {
      case 'login': {
          return await login({ email, password })
      }
      case 'register': {
          firstName = firstName as string
          lastName = lastName as string
          return await register({ email, password, firstName, lastName })
      }
      default:
          return json({ error: `Invalid Form Data` }, { status: 400 });
    }   
}

export default function Login() {
  

  const [action, setAction] = useState("login");
  const actionData = useActionData()
  const firstLoad = useRef(true)
  const [errors, setErrors] = useState(actionData?.errors || {})
  const [formError, setFormError] = useState(actionData?.error || '')
  const [formData, setFormData] = useState({
    email: actionData?.fields?.email || '',
    password: actionData?.fields?.password || '',
    firstName: actionData?.fields?.lastName || '',
    lastName: actionData?.fields?.firstName || '',
  })

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setFormData((form) => ({ ...form, [field]: event.target.value }));
  };

    
  

  return (
    <Layout>
      <div className="h-full justify-center items-center flex flex-col gap-y-4">
        <button
          onClick={() => setAction(action == "login" ? "register" : "login")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        >
          {action === "login" ? "Sign Up" : "Sign In"}
        </button>
        {/* ... */}
        <form method="POST" className="rounded-2xl bg-gray-200 p-6 w-96">
          <FormField
            htmlFor="email"
            label="Email"
            value={formData.email}
            onChange={(e) => handleInputChange(e, "email")}
          />
          <FormField
            htmlFor="password"
            type="password"
            label="Password"
            value={formData.password}
            onChange={(e) => handleInputChange(e, "password")}
          />
           {action === 'register' && (
            <>
              <FormField
                htmlFor="firstName"
                label="First Name"
                onChange={e => handleInputChange(e, 'firstName')}
                value={formData.firstName}
              />
              <FormField
                htmlFor="lastName"
                label="Last Name"
                onChange={e => handleInputChange(e, 'lastName')}
                value={formData.lastName}
              />
            </>
          )}
          <div className="w-full text-center">
            <button
              type="submit"
              name="_action"
              value={action}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            >
              {action === "login" ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
