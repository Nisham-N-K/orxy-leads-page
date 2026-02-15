"use client"

import { Users, UserCheck, UserX, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    label: "Total Leads",
    value: "7,469",
    change: "+12.5%",
    trend: "up" as const,
    icon: Users,
    color: "bg-primary/10 text-primary",
  },
  {
    label: "Verified",
    value: "1,284",
    change: "+8.2%",
    trend: "up" as const,
    icon: UserCheck,
    color: "bg-[hsl(var(--success))]/10 text-[hsl(var(--success))]",
  },
  {
    label: "Unverified",
    value: "6,185",
    change: "-3.1%",
    trend: "down" as const,
    icon: UserX,
    color: "bg-[hsl(var(--warning))]/10 text-[hsl(var(--warning))]",
  },
  {
    label: "This Month",
    value: "342",
    change: "+24.7%",
    trend: "up" as const,
    icon: TrendingUp,
    color: "bg-primary/10 text-primary",
  },
]

export function StatCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="border-border/60 shadow-sm">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-sm text-muted-foreground">{stat.label}</span>
                <span className="text-2xl font-semibold tracking-tight text-foreground">{stat.value}</span>
              </div>
              <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.color}`}>
                <stat.icon className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-3 flex items-center gap-1.5">
              <span
                className={`text-xs font-medium ${
                  stat.trend === "up" ? "text-[hsl(var(--success))]" : "text-[hsl(var(--warning))]"
                }`}
              >
                {stat.change}
              </span>
              <span className="text-xs text-muted-foreground">vs last month</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
