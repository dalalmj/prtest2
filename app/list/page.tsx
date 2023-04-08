import Link from "next/link";

export default function ListPage() {
  return (
    <div>
      <ul>
        <ul>
          <li>
            <Link href={`/list/1`}>1</Link>
          </li>
          <li>
            <Link href={`/list/2`}>2</Link>
          </li>
        </ul>
      </ul>
    </div>
  );
}
