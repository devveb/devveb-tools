// src/App.jsx
import { Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Lotto from './pages/Lotto'
import URLShort from './pages/URLShort'

export default function App() {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <main className="flex-1 bg-gray-100 overflow-auto">
                <Routes>
                    <Route path="/" element={<Navigate to="/dashboard" replace />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/urlshort" element={<URLShort />} />
                    <Route path="/dreamlotto" element={<Lotto />} />
                    {/* 404 */}
                    <Route path="*" element={<div className="p-8">페이지를 찾을 수 없습니다.</div>} />
                </Routes>
            </main>
        </div>
    )
}
