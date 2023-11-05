import { redirect } from 'next/navigation'
 


export async function POST(request) {
  const data = await request.json();
  console.log(data);

  return redirect("/results", "push");
}