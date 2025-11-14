// import { User } from 'lucide-react';

export default function Avatar({ name = "User" }: { name?: string }) {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm ring-2 ring-primary ring-offset-2 ring-offset-base-100">
      {initials}
    </div>
  );
}