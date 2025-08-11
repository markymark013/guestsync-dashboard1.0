import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import RequestTable from '../components/RequestTable'

const MOCK = [
  { id:1, room: '204', time: '10:12 AM', title: 'Extra Towels', note: 'Need 2 bath towels and 1 hand towel', status: 'Open', assigned: '', priority: 'Low' },
  { id:2, room: '307', time: '9:25 AM', title: 'AC Not Cooling', note: 'AC is blasting hot air', status: 'Open', assigned: 'Maintenance', priority: 'High' },
  { id:3, room: '101', time: '8:40 AM', title: 'Late Checkout', note: 'Guest would like until 2pm', status: 'Closed', assigned: 'Front Desk', priority: 'Low' },
  { id:4, room: '512', time: '11:20 AM', title: 'Mini Bar Charge Dispute', note: 'Guest denies minibar items', status: 'Open', assigned: 'Manager', priority: 'Medium' },
  { id:5, room: '303', time: '7:55 AM', title: 'Wakeup Call', note: 'Wake guest at 6:30 AM', status: 'Closed', assigned: 'Front Desk', priority: 'Low' },
  { id:6, room: '410', time: '12:03 PM', title: 'Housekeeping Service', note: 'Full clean and restock supplies', status: 'Open', assigned: '', priority: 'Medium' },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold">Requests</h1>
              <p className="text-sm text-gray-500">Management view — table layout for high density</p>
            </div>
          </div>

          <RequestTable data={MOCK} />
        </main>
      </div>
    </div>
  )
}
