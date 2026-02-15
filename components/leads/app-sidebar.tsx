"use client"

import {
  GraduationCap,
  Users,
  BookOpen,
  Layers,
  DollarSign,
  UserCircle,
  Lightbulb,
  Activity,
  Building2,
  MessageSquare,
  Settings,
  Package,
  ChevronDown,
  BookDashed,
  Info,
  ListCheck,
  OutdentIcon,
  BookDashedIcon,
  LayoutDashboardIcon,
  LayoutDashboard,
  LucideLayoutDashboard,
  CalendarClockIcon,
  Move,
  Transgender,
  Move3DIcon,
  MoveDiagonal,
  Move3d,
  MoveVertical,
  MoveVerticalIcon,
  MoveRightIcon,
  UploadCloudIcon,
  LetterTextIcon,
  LucideTheater,
  MailMinus,
  GraduationCapIcon,
  LucideGraduationCap,
  AppleIcon,
  FileIcon,
  SkullIcon,
  Tally1Icon,
  LucideFileChartColumnIncreasing,
  FireExtinguisherIcon,
  LucideFlaskConicalOff,
  BeerIcon,
  icons,
  Icon,
  AccessibilityIcon,
  EggFried,
  Verified,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"




const navSections = [
  {
    label: "Admissions",
    items: [
      { label: "Overview", icon: LayoutDashboardIcon, isActive: false },
      { label: "Leads", icon: Users, isActive: true },
      { label: "Applications", icon: BookOpen, isActive: false },
      { label: "Application Review", icon: GraduationCap, isActive: false },
      { label: "Eligibility Verification", icon: Verified, isActive: false },
      { label: "Conditional Offers", icon: EggFried, isActive: false },
      { label: "RPL Applications", icon: LucideFileChartColumnIncreasing, isActive: false },
      { label: "Scholarship Applications", icon: FileIcon, isActive: false },
      { label: "Offer Letters", icon: MailMinus, isActive: false },
      { label: "Ready For Transfer", icon: UploadCloudIcon, isActive: false },
      { label: "Meetings", icon: CalendarClockIcon, isActive: false },
    ],
  },
  {
    label: "Academic",
    items: [
      { label: "Programs", icon: Layers, isActive: false },
      { label: "Modules", icon: Building2, isActive: false },
      { label: "Assessments", icon: BookOpen, isActive: false },
      { label: "Academic Weeks", icon: Layers, isActive: false },
      { label: "Academic Years", icon: Building2, isActive: false },
      { label: "Campuses", icon: BookOpen, isActive: false },
      { label: "Credit Costs", icon: Layers, isActive: false },
      { label: "Delivery Options", icon: Building2, isActive: false },
      { label: "Locations", icon: BookOpen, isActive: false },
      { label: "Qualification Levels", icon: BookOpen, isActive: false },
      { label: "Qualifications", icon: BookOpen, isActive: false },
      { label: "Schools", icon: BookOpen, isActive: false },
      { label: "Semesters", icon: BookOpen, isActive: false },
      { label: "Study Periods", icon: BookOpen, isActive: false },
    ],
  },
  {
    label: "Cohort Planning",
    items: [
      { label: "Cohorts", icon: Layers, isActive: false },
      { label: "Taught Modules", icon: Building2, isActive: false },
      { label: "Taight Module Assessments", icon: BookOpen, isActive: false },
      { label: "Cohort Update Claims", icon: Layers, isActive: false },
      { label: "Cohort Explorer", icon: Building2, isActive: false },
      { label: "Academic Grouping", icon: BookOpen, isActive: false },
    ],
  },
  {
    label: "Finance",
    items: [
      { label: "Payment Plans", icon: DollarSign, isActive: false },
      { label: "Scholarships & Discounts", icon: DollarSign, isActive: false },
      { label: "Enrollment Payment Plans", icon: DollarSign, isActive: false },
      { label: "Enrollment Transactions", icon: DollarSign, isActive: false },
      { label: "Special Consideration Requests", icon: DollarSign, isActive: false },
      { label: "Payment Plan Requests", icon: DollarSign, isActive: false },
      { label: "Enrollment Payment Overdues", icon: DollarSign, isActive: false },
    ],
  },
  {
    label: "Students",
    items: [
      { label: "Student Registractions", icon: UserCircle, isActive: false },
      { label: "Students", icon: Lightbulb, isActive: false },
      { label: "Student Declarations", icon: Activity, isActive: false },
      { label: "File Parser", icon: UserCircle, isActive: false },
      { label: "Failed Module Attempts", icon: Lightbulb, isActive: false },
      { label: "Program Transfers", icon: Activity, isActive: false },
      { label: "Program Withdrawals", icon: UserCircle, isActive: false },
    ],
  },
  {
    label: "System",
    items: [
      { label: "Communication", icon: MessageSquare, isActive: false },
      { label: "Asset Registry", icon: Package, isActive: false },
      { label: "Settings", icon: Settings, isActive: false },
    ],
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="px-4 py-5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary">
            <GraduationCap className="h-4.5 w-4.5 text-sidebar-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-sidebar-foreground">SIS</span>
            <span className="text-[10px] text-sidebar-foreground/50">Student Information System</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent className="px-2">
        {navSections.map((section) => (
          <Collapsible key={section.label} defaultOpen={section.label === "Admissions"}>
            <SidebarGroup>
              <CollapsibleTrigger asChild>
                <SidebarGroupLabel className="cursor-pointer gap-1 text-[11px] uppercase tracking-wider text-sidebar-foreground/40 hover:text-sidebar-foreground/60">
                  {section.label}
                  <ChevronDown className="ml-auto h-3.5 w-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </SidebarGroupLabel>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {section.items.map((item) => (
                      <SidebarMenuItem key={item.label}>
                        <SidebarMenuButton
                          isActive={item.isActive}
                          tooltip={item.label}
                        >
                          <item.icon className="h-4 w-4" />
                          <span>{item.label}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>

      <SidebarSeparator />

      <SidebarFooter className="px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sidebar-accent text-xs font-semibold text-sidebar-accent-foreground">
            A
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-sidebar-foreground">Admin User</span>
            <span className="text-[11px] text-sidebar-foreground/50">admin@oryx.edu.qa</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
