"use client"

import { useState } from "react"
import {
  Search,
  Filter,
  ArrowUpDown,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Download,
  Mail,
  Eye,
  Trash2,
  Columns3,
} from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type Lead = {
  id: number
  name: string
  title: string
  email: string
  phone: string
  recentlyLoggedIn: string
  totalLogins: number
  tokenSentAt: string | null
  emailSentAt: string | null
  emailVerified: "verified" | "not_verified" | "pending"
  created: string
  lastUpdated: string
}

const leads: Lead[] = [
  { id: 1, name: "Nisham NK", title: "Mr.", email: "nishamoryx@gmail.com", phone: "97412345678", recentlyLoggedIn: "Never", totalLogins: 2, tokenSentAt: "2026-01-25 09:30", emailSentAt: "2026-01-26 14:15", emailVerified: "pending", created: "20 days ago", lastUpdated: "13 days ago" },
  { id: 2, name: "Khalid Husen", title: "Mr.", email: "khalid@gmail.com", phone: "97412345678", recentlyLoggedIn: "Never", totalLogins: 0, tokenSentAt: "2025-12-01 08:05", emailSentAt: "2025-12-01 08:05", emailVerified: "not_verified", created: "3 months ago", lastUpdated: "13 days ago" },
  { id: 3, name: "Khalid Khan", title: "Mr.", email: "khankhalidn@gmail.com", phone: "97412345678", recentlyLoggedIn: "Never", totalLogins: 0, tokenSentAt: "2025-12-01 08:05", emailSentAt: "2025-12-01 08:05", emailVerified: "not_verified", created: "4 months ago", lastUpdated: "2 months ago" },
  { id: 4, name: "Iyngaran Iyathurai", title: "Mr.", email: "iyngaran@gmail.com", phone: "97412345678", recentlyLoggedIn: "Never", totalLogins: 0, tokenSentAt: "2024-03-10 11:00", emailSentAt: "2025-12-01 08:05", emailVerified: "not_verified", created: "2 years ago", lastUpdated: "2 months ago" },
  { id: 5, name: "Essa Khalifa S R Alhitmi", title: "Mr.", email: "ealhitmi@gmail.com", phone: "97412345678", recentlyLoggedIn: "2 days ago", totalLogins: 14, tokenSentAt: "2025-09-14 16:45", emailSentAt: "2025-09-15 08:20", emailVerified: "verified", created: "a year ago", lastUpdated: "5 months ago" },
  { id: 6, name: "Salma Suleiman Shaik", title: "Miss.", email: "shaiksul@gmail.com", phone: "97412345678", recentlyLoggedIn: "Never", totalLogins: 0, tokenSentAt: "2025-10-01 10:30", emailSentAt: "2025-10-02 09:00", emailVerified: "not_verified", created: "a year ago", lastUpdated: "5 months ago" },
  { id: 7, name: "Yara Naji Mohamed Shaaban", title: "Mrs.", email: "yaran@gmail.com", phone: "97412345678", recentlyLoggedIn: "Never", totalLogins: 0, tokenSentAt: "2025-12-01 08:05", emailSentAt: "2025-12-01 08:05", emailVerified: "pending", created: "2 years ago", lastUpdated: "5 months ago" },
  { id: 8, name: "Abdulaziz Hassan M A Al-Sheebani", title: "Mr.", email: "alsheebani@gmail.com", phone: "97412345678", recentlyLoggedIn: "Never", totalLogins: 0, tokenSentAt: "2025-11-20 13:10", emailSentAt: "2025-11-21 07:45", emailVerified: "not_verified", created: "a year ago", lastUpdated: "5 months ago" },
  { id: 9, name: "Obaid Rehman", title: "Mr.", email: "obaidrehman@gmail.com", phone: "97412345678", recentlyLoggedIn: "Never", totalLogins: 0, tokenSentAt: "2024-06-05 15:00", emailSentAt: "2024-06-06 10:30", emailVerified: "not_verified", created: "2 years ago", lastUpdated: "5 months ago" },
  { id: 10, name: "Saad Ghanem Al-Romaihi", title: "Mr.", email: "saadgal@gmail.com", phone: "97412345678", recentlyLoggedIn: "1 week ago", totalLogins: 5, tokenSentAt: "2025-12-01 08:00", emailSentAt: "2025-12-01 08:05", emailVerified: "verified", created: "a year ago", lastUpdated: "5 months ago" },
  { id: 11, name: "Rashid Khan", title: "Mr.", email: "rashid@gmail.com", phone: "97412345678", recentlyLoggedIn: "Never", totalLogins: 0, tokenSentAt: "2026-01-10 12:00", emailSentAt: "2025-12-01 08:05", emailVerified: "not_verified", created: "a year ago", lastUpdated: "5 months ago" },
  { id: 12, name: "Fahad Essa R E Al-Sowaidi", title: "Eng.", email: "alsuwaidi@gmail.com", phone: "97412345678", recentlyLoggedIn: "Never", totalLogins: 0, tokenSentAt: "2025-12-01 08:05", emailSentAt: "2025-12-01 08:05", emailVerified: "not_verified", created: "2 years ago", lastUpdated: "5 months ago" },
]

function getInitials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase()
}

const avatarColors = [
  "bg-primary/15 text-primary",
  "bg-[hsl(var(--success))]/15 text-[hsl(var(--success))]",
  "bg-[hsl(var(--warning))]/15 text-[hsl(var(--warning))]",
  "bg-[hsl(var(--destructive))]/15 text-[hsl(var(--destructive))]",
  "bg-primary/10 text-primary",
]

function getAvatarColor(name: string) {
  const hash = name.split("").reduce((a, b) => a + b.charCodeAt(0), 0)
  return avatarColors[hash % avatarColors.length]
}

function VerificationBadge({ status }: { status: Lead["emailVerified"] }) {
  if (status === "verified") {
    return (
      <Badge className="border-0 bg-[hsl(var(--success))]/10 text-[hsl(var(--success))] hover:bg-[hsl(var(--success))]/15 font-medium">
        Verified
      </Badge>
    )
  }
  if (status === "pending") {
    return (
      <Badge className="border-0 bg-[hsl(var(--warning))]/10 text-[hsl(var(--warning))] hover:bg-[hsl(var(--warning))]/15 font-medium">
        Pending
      </Badge>
    )
  }
  return (
    <Badge variant="secondary" className="font-medium bg-red-200 hover:bg-red-200 text-muted-foreground">
      Not Verified
    </Badge>
  )
}

function formatDate(dateStr: string | null) {
  if (!dateStr) return null
  const date = new Date(dateStr)
  return {
    date: date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }),
    time: date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true }),
  }
}

function DateCell({ value }: { value: string | null }) {
  const formatted = formatDate(value)
  if (!formatted) {
    return <span className="text-muted-foreground/40">-</span>
  }
  return (
    <div className="flex flex-col">
      <span className="text-sm text-foreground">{formatted.date}</span>
      <span className="text-xs text-muted-foreground">{formatted.time}</span>
    </div>
  )
}

function LoginBadge({ value }: { value: string }) {
  if (value === "Never") {
    return <span className="text-muted-foreground/60">Never</span>
  }
  return <span className="text-foreground">{value}</span>
}

export function LeadsTable() {
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set())
  const [selectAll, setSelectAll] = useState(false)

  function toggleRow(id: number) {
    setSelectedRows((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  function toggleAll() {
    if (selectAll) {
      setSelectedRows(new Set())
    } else {
      setSelectedRows(new Set(leads.map((l) => l.id)))
    }
    setSelectAll(!selectAll)
  }

  return (
    <TooltipProvider>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search leads..."
                className="h-9 w-64 bg-card pl-9 text-sm"
              />
            </div>
            <Button variant="outline" size="sm" className="h-9 gap-1.5 bg-card text-foreground">
              <Filter className="h-3.5 w-3.5" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="h-9 gap-1.5 bg-card text-foreground">
              <ArrowUpDown className="h-3.5 w-3.5" />
              Sort
            </Button>
            <Button variant="outline" size="sm" className="h-9 gap-1.5 bg-card text-foreground">
              <Columns3 className="h-3.5 w-3.5" />
              Columns
            </Button>
          </div>
          <div className="flex items-center gap-2">
            {selectedRows.size > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  {selectedRows.size} selected
                </span>
                <Button variant="outline" size="sm" className="h-9 gap-1.5 text-foreground">
                  <Mail className="h-3.5 w-3.5" />
                  Email
                </Button>
                <Button variant="outline" size="sm" className="h-9 gap-1.5 text-destructive">
                  <Trash2 className="h-3.5 w-3.5" />
                  Delete
                </Button>
              </div>
            )}
            <Button variant="outline" size="sm" className="h-9 gap-1.5 bg-card text-foreground">
              <Download className="h-3.5 w-3.5" />
              Export
            </Button>
          </div>
        </div>

        <div className="rounded-xl border border-border/60 bg-card shadow-sm">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent border-border/60">
                <TableHead className="w-12">
                  <Checkbox
                    checked={selectAll}
                    onCheckedChange={() => toggleAll()}
                    aria-label="Select all leads"
                  />
                </TableHead>
                <TableHead className="min-w-[240px] font-semibold text-foreground">Lead</TableHead>
                <TableHead className="font-semibold text-foreground">Phone</TableHead>
                <TableHead className="font-semibold text-foreground">Last Login</TableHead>
                {/* <TableHead className="text-center font-semibold text-foreground">Token sent at</TableHead> */}
                <TableHead className="text-center font-semibold text-foreground">Logins</TableHead>
                {/* <TableHead className="font-semibold text-foreground">Email Sent At</TableHead> */}
                <TableHead className="font-semibold text-foreground">Email Status</TableHead>
                <TableHead className="font-semibold text-foreground">Created</TableHead>
                <TableHead className="font-semibold text-foreground">Last Updated</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leads.map((lead) => (
                <TableRow
                  key={lead.id}
                  className={`border-border/40 transition-colors ${selectedRows.has(lead.id) ? "bg-primary/5" : ""
                    }`}
                  data-state={selectedRows.has(lead.id) ? "selected" : undefined}
                >
                  <TableCell>
                    <Checkbox
                      checked={selectedRows.has(lead.id)}
                      onCheckedChange={() => toggleRow(lead.id)}
                      aria-label={`Select ${lead.name}`}
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className={`h-9 w-9 ${getAvatarColor(lead.name)}`}>
                        <AvatarFallback className={`text-xs font-semibold ${getAvatarColor(lead.name)}`}>
                          {getInitials(lead.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="font-medium text-foreground leading-tight">
                          {lead.title} {lead.name}
                        </span>
                        <span className="text-xs text-muted-foreground">{lead.email}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="font-mono text-sm text-muted-foreground">{lead.phone}</TableCell>
                  <TableCell>
                    <LoginBadge value={lead.recentlyLoggedIn} />
                  </TableCell>
                  {/* <TableCell>
                    <DateCell value={lead.tokenSentAt} />
                  </TableCell> */}
                  <TableCell className="text-center">
                    <span
                      className={`tabular-nums ${lead.totalLogins > 0 ? "font-medium text-foreground" : "text-muted-foreground/50"
                        }`}
                    >
                      {lead.totalLogins}
                    </span>
                  </TableCell>
                  {/* <TableCell>
                    <DateCell value={lead.emailSentAt} />
                  </TableCell> */}
                  <TableCell>
                    <VerificationBadge status={lead.emailVerified} />
                  </TableCell>
                  <TableCell>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="text-sm text-muted-foreground cursor-default">{lead.created}</span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Last updated: {lead.lastUpdated}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TableCell>
                  <TableCell className="font-mono text-sm text-muted-foreground">{lead.lastUpdated}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Actions for {lead.name}</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-44">
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Mail className="mr-2 h-4 w-4" />
                          Send Email
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive focus:text-destructive">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex items-center justify-between border-t border-border/40 px-4 py-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Rows per page</span>
              <Select defaultValue="25">
                <SelectTrigger className="h-8 w-[70px] text-foreground">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="25">25</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                  <SelectItem value="100">100</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                1 - 12 of 7,469
              </span>
              <div className="flex items-center gap-1">
                <Button variant="outline" size="icon" className="h-8 w-8" disabled>
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous page</span>
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground">
                  1
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 text-foreground">
                  2
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 text-foreground">
                  3
                </Button>
                <span className="px-1 text-muted-foreground">...</span>
                <Button variant="outline" size="sm" className="h-8 w-8 text-foreground">
                  299
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Next page</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}
