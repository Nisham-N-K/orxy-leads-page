"use client"

import { Plus, Bell, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function PageHeader() {
  return (
    <header className="flex items-center justify-between border-b border-border/60 bg-card px-6 py-4">
      <div className="flex items-center gap-3">
        <SidebarTrigger className="text-foreground" />
        <div className="h-5 w-px bg-border" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#" className="flex items-center gap-1 text-muted-foreground hover:text-foreground">
                <Home className="h-3.5 w-3.5" />
                <span className="sr-only">Home</span>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#" className="text-muted-foreground hover:text-foreground">Admissions</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium text-foreground">Leads</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" className="relative h-9 w-9 text-foreground">
          <Bell className="h-4 w-4" />
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground">
            3
          </span>
          <span className="sr-only">Notifications</span>
        </Button>
        <Button size="sm" className="h-9 gap-1.5">
          <Plus className="h-3.5 w-3.5" />
          Add Lead
        </Button>
      </div>
    </header>
  )
}
