export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-brand text-white flex items-center justify-center font-bold rounded-md">GS</div>
        <div>
          <div className="text-lg font-semibold">GuestSync Dashboard</div>
          <div className="text-xs text-gray-500">Hotel request management — management view</div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <input className="hidden md:block border rounded-md px-3 py-1 text-sm" placeholder="Search requests..." />
        <button className="px-3 py-2 text-sm rounded-md border">Settings</button>
        <div className="w-9 h-9 bg-gray-200 rounded-full" />
      </div>
    </header>
  );
}
