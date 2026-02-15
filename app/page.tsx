import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/leads/app-sidebar"
import { PageHeader } from "@/components/leads/page-header"
import { StatCards } from "@/components/leads/stat-cards"
import { LeadsTable } from "@/components/leads/leads-table"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <PageHeader />
        <div className="flex flex-1 flex-col gap-6 p-6">
          {/* Page Title */}
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-foreground">Leads</h1>
              <p className="text-sm text-muted-foreground">
                Manage and track all admission leads in one place.
              </p>
            </div>
            <Tabs defaultValue="all" className="w-auto">
              <TabsList>
                <TabsTrigger value="all">All Leads</TabsTrigger>
                <TabsTrigger value="verified">Verified</TabsTrigger>
                <TabsTrigger value="unverified">Unverified</TabsTrigger>
                <TabsTrigger value="recent">Recent</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Stats */}
          <StatCards />

          {/* Data Table */}
          <LeadsTable />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
