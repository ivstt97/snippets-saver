import bcrypt from "bcryptjs";
import type { RegisterForm } from "./types.server";
import { prisma } from "./prisma.server";

export const createUser = async (user: RegisterForm) => {
  const passwordHash = await bcrypt.hash(user.password, 10);
  const newUser = await prisma.user.create({
    data: {
      email: user.email,
      password: passwordHash,
      profile: {
        firstName: user.firstName,
        lastName: user.lastName,
      },
    },
  });
  return { id: newUser.id, email: user.email };
};

// Imposters detected

export const getAllSnippetsCategories = async () => {
  return prisma.snippet.findMany({
    where: {},
    distinct: ["category"],
  });
};

export const getSnippetById = async (snippetId: string) => {
  return await prisma.snippet.findUnique({
    where: {
      snippetId: snippetId,
    },
  });
};

export const getAllSnippets = async () => {
  return prisma.snippet.findMany({
    select: {
      title: true,
      content: true,
      category: true,
    },
    where: {
      // here I should filter them by category, but I messed it up.
    },
  });
};
