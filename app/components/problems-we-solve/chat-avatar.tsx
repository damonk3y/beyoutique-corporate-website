type ChatAvatarProps = {
  role: 'owner' | 'therapist';
  name: string;
};

export const ChatAvatar = ({ role, name }: ChatAvatarProps) => {
  const isOwner = role === 'owner';
  const bgColor = isOwner ? 'bg-neutral-900' : 'bg-neutral-700';
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div
      className={`${bgColor} w-10 h-10 rounded-full flex items-center
        justify-center text-white font-medium text-xs shrink-0`}
    >
      {initials}
    </div>
  );
};
