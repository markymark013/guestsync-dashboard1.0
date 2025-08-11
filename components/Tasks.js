'use client'
import React, { useEffect, useState } from 'react'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'
import { db } from '../firebase'

export default function Tasks() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const q = query(collection(db, 'tasks'), orderBy('createdAt', 'desc'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const arr = []
      snapshot.forEach(doc => {
        arr.push({ id: doc.id, ...doc.data() })
      })
      setTasks(arr)
      setLoading(false)
    }, (error) => {
      console.error('Firestore error:', error)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  if (loading) return <div>Loading tasks…</div>

  return (
    <div className="bg-white rounded-lg shadow border overflow-auto">
      <table className="min-w-full table-fixed divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Room</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Time</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Title</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Note</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Status</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Assigned</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Priority</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100 text-sm">
          {tasks.length === 0 && (
            <tr><td className="px-4 py-6" colSpan="7">No tasks found.</td></tr>
          )}
          {tasks.map(row => (
            <tr key={row.id} className="hover:bg-gray-50">
              <td className="px-4 py-3">{row.room || '-'}</td>
              <td className="px-4 py-3">{row.time || '-'}</td>
              <td className="px-4 py-3 font-medium">{row.title || '-'}</td>
              <td className="px-4 py-3 text-gray-600 truncate max-w-[30ch]">{row.note || ''}</td>
              <td className="px-4 py-3">
                <span className={
                  "px-2 py-1 rounded-full text-xs text-white " +
                  (row.status === 'Open' ? 'bg-green-500' : row.status === 'Closed' ? 'bg-gray-400' : 'bg-yellow-500')
                }>{row.status || 'Open'}</span>
              </td>
              <td className="px-4 py-3">{row.assigned || 'Unassigned'}</td>
              <td className="px-4 py-3">{row.priority || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
