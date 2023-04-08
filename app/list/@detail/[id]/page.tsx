import Link from "next/link";

export default function DetailIdPage({ params }: { params: { id: string } }) {
  console.log(`detail id ${params.id}`);
  return (
    <div>
      <div>{`Detail Id ${params.id}`}</div>
      <Link href="/list">Close (Back to List)</Link>
    </div>
  );
}
