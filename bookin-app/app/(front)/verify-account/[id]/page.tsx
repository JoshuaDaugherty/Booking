// import { getUserById } from "@/actions/users";
// import VerifyTokenForm from "@/components/VerifyTokenForm";

import { getUserById } from "@/actions/users";
import VerifyTokenForm from "@/components/Frontend/VerifyTokenForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
export default async function VerifyAccount({params}:{params: Promise<{ id: string }>}) {
  const { id } = await(params)
  //Get a User from database
  const user = await getUserById(id);
  const userToken = user?.token;
  return (
   <div className="min-h-screen flex items-center justify-center">
    <Card className="mx-auto max-w-md">
    <CardHeader>
      <CardTitle className="text-xl">Verify Token</CardTitle>
      <CardDescription>
        Please Check your Email -{user?.email} and Enter the code we sent
      </CardDescription>
    </CardHeader>
    <CardContent>
    <VerifyTokenForm userToken={userToken} id={id} />
    </CardContent>
   </Card>
   </div>
  );
}