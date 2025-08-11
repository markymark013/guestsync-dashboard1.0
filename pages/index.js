import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Tasks from '../components/Tasks'

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
              <p className="text-sm text-gray-500">Real-time tasks from Firestore</p>
            </div>
          </div>
          <Tasks />
        </main>
      </div>
    </div>
  )
}
