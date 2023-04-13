interface MessageProps{
    message: string;
    reversed?: boolean;
    avatarUrl?: string;
}

export default function Message ({
    message,
}: MessageProps) {
   return(
    <div className="flex items-start space-x-2">
    <div className="w-8 h-8 rounded-full bg-slate-400"/>
    <div className="w-1/3 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
        <p>{message}</p>
    </div>
</div>
   )
}