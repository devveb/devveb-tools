import { NavLink } from 'react-router-dom'
import { Home, Users, Camera  } from 'lucide-react'

const links = [
    { to: '/dashboard', label: 'Dashboard', icon: Home },
    { to: '/urlshort',     label: 'URLShortner',     icon: Users },
    { to: '/dreamlotto',  label: 'Lotto',  icon: Camera  },
]

export default function Sidebar() {
    return (
        <div className="w-60 h-screen bg-gray-900 text-white p-4 space-y-4">
            <h2 className="text-xl font-bold">My Admin</h2>
            <nav className="space-y-3">
                {links.map(({ to, label, icon: Icon }) => (
                    <NavLink
                        key={to}
                        to={to}
                        className={({ isActive }) =>
                            `flex items-center gap-2 p-2 rounded-md ${
                                isActive ? 'bg-gray-700' : 'hover:bg-gray-800'
                            }`
                        }
                    >
                        <Icon size={20} />
                        <span>{label}</span>
                    </NavLink>
                ))}
            </nav>
        </div>
    )
}
