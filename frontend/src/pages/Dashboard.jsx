// src/pages/Dashboard.jsx
import { Card, CardContent } from '@/components/ui/card'
import { BarChart, Folder, Rocket } from 'lucide-react'

export default function Dashboard() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                    <CardContent className="flex items-center gap-4">
                        <BarChart size={24} />
                        <div>
                            <p className="text-sm text-muted-foreground">사용자 수</p>
                            <p className="text-2xl font-semibold">123</p>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="flex items-center gap-4">
                        <Folder size={24} />
                        <div>
                            <p className="text-sm text-muted-foreground">프로젝트</p>
                            <p className="text-2xl font-semibold">12건</p>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="flex items-center gap-4">
                        <Rocket size={24} />
                        <div>
                            <p className="text-sm text-muted-foreground">트래픽</p>
                            <p className="text-2xl font-semibold">80%</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
