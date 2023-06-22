import { IUser } from "@/constants/interfaces";

type TLogin = {
  email: string | undefined;
  password: string | undefined;
};

type TUser = {};

async function LoginUser({ email, password }: TLogin) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API_URL}/api/auth/login`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }
  );
  const data = await res.json();
  return data;
}

async function getAdminUser(token: string): Promise<IUser> {
  const res = await fetch("http://localhost:3001/api/auth/users", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();

  return data;
}

export { LoginUser, getAdminUser };
