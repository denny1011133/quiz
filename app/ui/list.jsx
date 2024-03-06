import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const questions = [
  {
    title: 'What is the difference between let, const, and var in JavaScript?',
    id: 1,
  },
  {
    title: 'How does the this keyword work in JavaScript?',
    id: 2,
  },
  {
    title: 'Explain the concept of scope in JavaScript.',
    id: 3,
  },
];

export default function List() {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {questions.map((q) => (
        <li key={q.title} className="flex justify-between gap-x-6 py-5">
          <Link className="flex min-w-0 gap-x-4" href={`/dashboard/${q.id}`}>
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {q.title}
              </p>
            </div>
            <ArrowTopRightOnSquareIcon className="h-6 w-6 text-blue-500" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
