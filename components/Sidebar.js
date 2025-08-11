const items = [
  { label: 'Dashboard', icon: '🏠' },
  { label: 'Requests', icon: '📋' },
  { label: 'PMS View', icon: '🛎' },
  { label: 'Chat Logs', icon: '💬' },
  { label: 'Analytics', icon: '📊' },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r hidden lg:block">
      <div className="p-4">
        {items.map(i => (
          <div key={i.label} className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 cursor-pointer">
            <div className="text-lg">{i.icon}</div>
            <div className="text-sm">{i.label}</div>
          </div>
        ))}
      </div>
    </aside>
  );
}
