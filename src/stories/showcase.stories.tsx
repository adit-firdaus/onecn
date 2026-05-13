import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Toast, ToastAction, ToastProvider, ToastViewport } from "@/components/ui/toast";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import type { Meta, StoryObj } from "@storybook/react";
import {
  AlertTriangle,
  Bold,
  Calculator,
  CalendarIcon,
  Check,
  ChevronDown,
  Clock,
  Copy,
  CreditCard,
  Italic,
  Mail,
  MapPin,
  Search,
  Settings,
  Smile,
  Underline,
  User,
} from "lucide-react";
import * as React from "react";

const meta: Meta = {
  title: "Dashboard/Showcase",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

function ShowcaseSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <div className="rounded-xl border bg-card p-6 shadow-sm">{children}</div>
    </div>
  );
}

function ShowcaseGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">{children}</div>;
}

function ComponentBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-medium text-muted-foreground">{title}</p>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </div>
  );
}

function ShowcaseDashboard() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [otp, setOtp] = React.useState("");
  const [sliderValue, setSliderValue] = React.useState([50]);
  const [switchChecked, setSwitchChecked] = React.useState(true);
  const [commandOpen, setCommandOpen] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setCommandOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b bg-card sticky top-0 z-40">
          <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
                1
              </div>
              <div>
                <h1 className="text-lg font-bold leading-tight">@coolaf/onecn</h1>
                <p className="text-xs text-muted-foreground">Component Library Showcase</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary">v0.1.0</Badge>
              <Badge>47+ Components</Badge>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 h-auto">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="buttons">Buttons</TabsTrigger>
              <TabsTrigger value="forms">Forms</TabsTrigger>
              <TabsTrigger value="feedback">Feedback</TabsTrigger>
              <TabsTrigger value="display">Display</TabsTrigger>
              <TabsTrigger value="navigation">Nav</TabsTrigger>
              <TabsTrigger value="overlays">Overlays</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Components</CardTitle>
                    <Smile className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">47+</div>
                    <p className="text-xs text-muted-foreground">shadcn/ui components bundled</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Primitives</CardTitle>
                    <Settings className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">Radix UI</div>
                    <p className="text-xs text-muted-foreground">Accessible unstyled primitives</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Styling</CardTitle>
                    <Bold className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">Tailwind</div>
                    <p className="text-xs text-muted-foreground">Utility-first CSS framework</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Icons</CardTitle>
                    <Mail className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">Lucide</div>
                    <p className="text-xs text-muted-foreground">Beautiful consistent icons</p>
                  </CardContent>
                </Card>
              </div>

              <ShowcaseSection title="Alert Examples">
                <div className="space-y-4">
                  <Alert>
                    <Mail className="h-4 w-4" />
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>
                      You can add components to your app using the CLI.
                    </AlertDescription>
                  </Alert>
                  <Alert variant="destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                      Your session has expired. Please log in again.
                    </AlertDescription>
                  </Alert>
                </div>
              </ShowcaseSection>

              <ShowcaseSection title="Quick Preview">
                <div className="grid gap-4 md:grid-cols-2">
                  <ComponentBox title="Button Variants">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                  </ComponentBox>
                  <ComponentBox title="Badge Variants">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                  </ComponentBox>
                  <ComponentBox title="Avatar">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        AB
                      </AvatarFallback>
                    </Avatar>
                  </ComponentBox>
                  <ComponentBox title="Progress">
                    <div className="w-full space-y-3">
                      <Progress value={33} />
                      <Progress value={66} />
                      <Progress value={100} />
                    </div>
                  </ComponentBox>
                </div>
              </ShowcaseSection>
            </TabsContent>

            {/* Buttons Tab */}
            <TabsContent value="buttons" className="space-y-6">
              <ShowcaseGrid>
                <ShowcaseSection title="Button Variants">
                  <div className="flex flex-wrap gap-3">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                  </div>
                </ShowcaseSection>
                <ShowcaseSection title="Button Sizes">
                  <div className="flex flex-wrap items-center gap-3">
                    <Button size="lg">Large</Button>
                    <Button>Default</Button>
                    <Button size="sm">Small</Button>
                    <Button size="icon">
                      <Check className="h-4 w-4" />
                    </Button>
                  </div>
                </ShowcaseSection>
                <ShowcaseSection title="Toggle">
                  <div className="flex flex-wrap gap-3">
                    <Toggle aria-label="Toggle bold">
                      <Bold className="h-4 w-4" />
                    </Toggle>
                    <Toggle aria-label="Toggle italic">
                      <Italic className="h-4 w-4" />
                    </Toggle>
                    <Toggle aria-label="Toggle underline">
                      <Underline className="h-4 w-4" />
                    </Toggle>
                  </div>
                </ShowcaseSection>
                <ShowcaseSection title="Toggle Group">
                  <ToggleGroup type="multiple">
                    <ToggleGroupItem value="bold" aria-label="Toggle bold">
                      <Bold className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="italic" aria-label="Toggle italic">
                      <Italic className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="underline" aria-label="Toggle underline">
                      <Underline className="h-4 w-4" />
                    </ToggleGroupItem>
                  </ToggleGroup>
                </ShowcaseSection>
                <ShowcaseSection title="Button with Icon">
                  <div className="flex flex-wrap gap-3">
                    <Button>
                      <Mail className="mr-2 h-4 w-4" /> Login with Email
                    </Button>
                    <Button variant="outline">
                      <Settings className="mr-2 h-4 w-4" /> Settings
                    </Button>
                  </div>
                </ShowcaseSection>
                <ShowcaseSection title="Loading / Disabled">
                  <div className="flex flex-wrap gap-3">
                    <Button disabled>Disabled</Button>
                    <Button variant="outline" disabled>
                      Outline Disabled
                    </Button>
                  </div>
                </ShowcaseSection>
              </ShowcaseGrid>
            </TabsContent>

            {/* Forms Tab */}
            <TabsContent value="forms" className="space-y-6">
              <ShowcaseGrid>
                <ShowcaseSection title="Input">
                  <div className="space-y-3 w-full">
                    <Input placeholder="Default input" />
                    <Input placeholder="Disabled input" disabled />
                    <Input type="file" />
                  </div>
                </ShowcaseSection>
                <ShowcaseSection title="Textarea">
                  <div className="space-y-3 w-full">
                    <Textarea placeholder="Type your message here." />
                    <Textarea placeholder="Disabled textarea" disabled />
                  </div>
                </ShowcaseSection>
                <ShowcaseSection title="Select">
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectContent>
                  </Select>
                </ShowcaseSection>
                <ShowcaseSection title="Checkbox">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">Accept terms and conditions</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" defaultChecked />
                    <Label htmlFor="newsletter">Subscribe to newsletter</Label>
                  </div>
                </ShowcaseSection>
                <ShowcaseSection title="Radio Group">
                  <RadioGroup defaultValue="comfortable">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="default" id="r1" />
                      <Label htmlFor="r1">Default</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="comfortable" id="r2" />
                      <Label htmlFor="r2">Comfortable</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="compact" id="r3" />
                      <Label htmlFor="r3">Compact</Label>
                    </div>
                  </RadioGroup>
                </ShowcaseSection>
                <ShowcaseSection title="Switch">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="airplane-mode"
                      checked={switchChecked}
                      onCheckedChange={setSwitchChecked}
                    />
                    <Label htmlFor="airplane-mode">Airplane Mode</Label>
                  </div>
                </ShowcaseSection>
                <ShowcaseSection title="Slider">
                  <div className="space-y-6 w-full">
                    <Slider value={sliderValue} onValueChange={setSliderValue} max={100} step={1} />
                    <p className="text-sm text-muted-foreground">Value: {sliderValue[0]}</p>
                  </div>
                </ShowcaseSection>
                <ShowcaseSection title="Calendar">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </ShowcaseSection>
                <ShowcaseSection title="Input OTP">
                  <div className="space-y-3">
                    <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                      </InputOTPGroup>
                      <InputOTPSeparator />
                      <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                    <p className="text-sm text-muted-foreground">OTP: {otp}</p>
                  </div>
                </ShowcaseSection>
              </ShowcaseGrid>
            </TabsContent>

            {/* Feedback Tab */}
            <TabsContent value="feedback" className="space-y-6">
              <ShowcaseGrid>
                <ShowcaseSection title="Alerts">
                  <div className="space-y-4 w-full">
                    <Alert>
                      <Mail className="h-4 w-4" />
                      <AlertTitle>Heads up!</AlertTitle>
                      <AlertDescription>
                        You can add components to your app using the CLI.
                      </AlertDescription>
                    </Alert>
                    <Alert variant="destructive">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>
                        Your session has expired. Please log in again.
                      </AlertDescription>
                    </Alert>
                  </div>
                </ShowcaseSection>
                <ShowcaseSection title="Badge">
                  <div className="flex flex-wrap gap-3">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                  </div>
                </ShowcaseSection>
                <ShowcaseSection title="Progress">
                  <div className="space-y-4 w-full">
                    <Progress value={33} />
                    <Progress value={66} />
                    <Progress value={100} />
                  </div>
                </ShowcaseSection>
                <ShowcaseSection title="Skeleton">
                  <div className="space-y-2 w-full">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-[80%]" />
                    <Skeleton className="h-4 w-[60%]" />
                    <div className="flex items-center space-x-4 pt-2">
                      <Skeleton className="h-12 w-12 rounded-full" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-[150px]" />
                        <Skeleton className="h-4 w-[100px]" />
                      </div>
                    </div>
                  </div>
                </ShowcaseSection>
                <ShowcaseSection title="Toast Preview">
                  <ToastProvider>
                    <div className="space-y-4">
                      <Toast>
                        <div className="grid gap-1">
                          <div className="text-sm font-semibold">Scheduled: Catch up</div>
                          <div className="text-sm opacity-90">
                            Friday, February 10, 2023 at 5:57 PM
                          </div>
                        </div>
                        <ToastAction altText="Undo">Undo</ToastAction>
                      </Toast>
                      <Toast variant="destructive">
                        <div className="grid gap-1">
                          <div className="text-sm font-semibold">Error</div>
                          <div className="text-sm opacity-90">Something went wrong.</div>
                        </div>
                      </Toast>
                    </div>
                    <ToastViewport />
                  </ToastProvider>
                </ShowcaseSection>
                <ShowcaseSection title="Aspect Ratio">
                  <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                      alt="Drew Beamer"
                      className="h-full w-full object-cover"
                    />
                  </AspectRatio>
                </ShowcaseSection>
              </ShowcaseGrid>
            </TabsContent>

            {/* Display Tab */}
            <TabsContent value="display" className="space-y-6">
              <ShowcaseGrid>
                <ShowcaseSection title="Card">
                  <Card className="w-full">
                    <CardHeader>
                      <CardTitle>Create project</CardTitle>
                      <CardDescription>Deploy your new project in one-click.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Your project will be deployed to our edge network.
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">Cancel</Button>
                      <Button>Deploy</Button>
                    </CardFooter>
                  </Card>
                </ShowcaseSection>
                <ShowcaseSection title="Table">
                  <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">Invoice</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>
                          <Badge variant="outline">Paid</Badge>
                        </TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">INV002</TableCell>
                        <TableCell>
                          <Badge variant="secondary">Pending</Badge>
                        </TableCell>
                        <TableCell>PayPal</TableCell>
                        <TableCell className="text-right">$150.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">INV003</TableCell>
                        <TableCell>
                          <Badge>Unpaid</Badge>
                        </TableCell>
                        <TableCell>Bank Transfer</TableCell>
                        <TableCell className="text-right">$350.00</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </ShowcaseSection>
                <ShowcaseSection title="Accordion">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Is it accessible?</AccordionTrigger>
                      <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Is it styled?</AccordionTrigger>
                      <AccordionContent>
                        Yes. It comes with default styles that matches the other components.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Is it animated?</AccordionTrigger>
                      <AccordionContent>
                        Yes. It&apos;s animated by default, but you can disable it.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </ShowcaseSection>
                <ShowcaseSection title="Collapsible">
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" className="flex w-full justify-between">
                        <span>@peduarte starred 3 repositories</span>
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-2">
                      <div className="rounded-md border px-4 py-3 font-mono text-sm">
                        @radix-ui/primitives
                      </div>
                      <div className="rounded-md border px-4 py-3 font-mono text-sm">
                        @radix-ui/colors
                      </div>
                      <div className="rounded-md border px-4 py-3 font-mono text-sm">
                        @stitches/react
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </ShowcaseSection>
                <ShowcaseSection title="Avatar">
                  <div className="flex flex-wrap gap-3">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        AB
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </ShowcaseSection>
                <ShowcaseSection title="Hover Card">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button variant="link">@nextjs</Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="flex justify-between space-x-4">
                        <Avatar>
                          <AvatarImage src="https://github.com/vercel.png" />
                          <AvatarFallback>VC</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold">@nextjs</h4>
                          <p className="text-sm">The React Framework for the Web.</p>
                          <div className="flex items-center pt-2">
                            <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
                            <span className="text-xs text-muted-foreground">
                              Joined December 2021
                            </span>
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </ShowcaseSection>
                <ShowcaseSection title="Scroll Area">
                  <ScrollArea className="h-48 w-full rounded-md border p-4">
                    <div className="space-y-4">
                      {Array.from({ length: 20 }).map((_, i) => (
                        // biome-ignore lint/suspicious/noArrayIndexKey: static demo list
                        <div key={`scroll-item-${i}`} className="text-sm">
                          Item {i + 1}
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </ShowcaseSection>
                <ShowcaseSection title="Separator">
                  <div className="space-y-2 w-full">
                    <div className="flex items-center space-x-4 text-sm">
                      <span>Item One</span>
                      <Separator orientation="vertical" className="h-4" />
                      <span>Item Two</span>
                      <Separator orientation="vertical" className="h-4" />
                      <span>Item Three</span>
                    </div>
                    <Separator />
                    <div className="flex h-5 items-center space-x-4 text-sm">
                      <span>Blog</span>
                      <Separator orientation="vertical" />
                      <span>Docs</span>
                      <Separator orientation="vertical" />
                      <span>Source</span>
                    </div>
                  </div>
                </ShowcaseSection>
                <ShowcaseSection title="Carousel">
                  <Carousel className="w-full max-w-xs mx-auto">
                    <CarouselContent>
                      {Array.from({ length: 5 }).map((_, index) => (
                        // biome-ignore lint/suspicious/noArrayIndexKey: static demo list
                        <CarouselItem key={index}>
                          <div className="p-1">
                            <Card>
                              <CardContent className="flex aspect-square items-center justify-center p-6">
                                <span className="text-4xl font-semibold">{index + 1}</span>
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </ShowcaseSection>
                <ShowcaseSection title="Resizable Panels">
                  <ResizablePanelGroup
                    direction="horizontal"
                    className="min-h-[150px] max-w-md rounded-lg border md:min-w-[300px]"
                  >
                    <ResizablePanel defaultSize={50}>
                      <div className="flex h-full items-center justify-center p-6">
                        <span className="font-semibold">One</span>
                      </div>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={50}>
                      <div className="flex h-full items-center justify-center p-6">
                        <span className="font-semibold">Two</span>
                      </div>
                    </ResizablePanel>
                  </ResizablePanelGroup>
                </ShowcaseSection>
              </ShowcaseGrid>
            </TabsContent>

            {/* Navigation Tab */}
            <TabsContent value="navigation" className="space-y-6">
              <ShowcaseGrid>
                <ShowcaseSection title="Breadcrumb">
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </ShowcaseSection>
                <ShowcaseSection title="Pagination">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>
                          2
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </ShowcaseSection>
                <ShowcaseSection title="Menubar">
                  <Menubar>
                    <MenubarMenu>
                      <MenubarTrigger>File</MenubarTrigger>
                      <MenubarContent>
                        <MenubarItem>
                          New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>New Window</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Share</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Print</MenubarItem>
                      </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                      <MenubarTrigger>Edit</MenubarTrigger>
                      <MenubarContent>
                        <MenubarItem>
                          Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>
                          Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarSub>
                          <MenubarSubTrigger>Find</MenubarSubTrigger>
                          <MenubarSubContent>
                            <MenubarItem>Search the web</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Find...</MenubarItem>
                            <MenubarItem>Find Next</MenubarItem>
                            <MenubarItem>Find Previous</MenubarItem>
                          </MenubarSubContent>
                        </MenubarSub>
                        <MenubarSeparator />
                        <MenubarItem>Cut</MenubarItem>
                        <MenubarItem>Copy</MenubarItem>
                        <MenubarItem>Paste</MenubarItem>
                      </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                      <MenubarTrigger>View</MenubarTrigger>
                      <MenubarContent>
                        <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
                        <MenubarCheckboxItem checked>Always Show Full URLs</MenubarCheckboxItem>
                        <MenubarSeparator />
                        <MenubarItem inset>
                          Reload <MenubarShortcut>⌘R</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem disabled inset>
                          Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem inset>Toggle Fullscreen</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem inset>Hide Sidebar</MenubarItem>
                      </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                      <MenubarTrigger>Profiles</MenubarTrigger>
                      <MenubarContent>
                        <MenubarRadioGroup value="benoit">
                          <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                          <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                          <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
                        </MenubarRadioGroup>
                        <MenubarSeparator />
                        <MenubarItem inset>Edit...</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem inset>Add Profile...</MenubarItem>
                      </MenubarContent>
                    </MenubarMenu>
                  </Menubar>
                </ShowcaseSection>
                <ShowcaseSection title="Tabs (Inline)">
                  <Tabs defaultValue="account" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="account">Account</TabsTrigger>
                      <TabsTrigger value="password">Password</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                      <Card>
                        <CardHeader>
                          <CardTitle>Account</CardTitle>
                          <CardDescription>Make changes to your account here.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <div className="space-y-1">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" defaultValue="Pedro Duarte" />
                          </div>
                          <div className="space-y-1">
                            <Label htmlFor="username">Username</Label>
                            <Input id="username" defaultValue="@peduarte" />
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button>Save changes</Button>
                        </CardFooter>
                      </Card>
                    </TabsContent>
                    <TabsContent value="password">
                      <Card>
                        <CardHeader>
                          <CardTitle>Password</CardTitle>
                          <CardDescription>Change your password here.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <div className="space-y-1">
                            <Label htmlFor="current">Current password</Label>
                            <Input id="current" type="password" />
                          </div>
                          <div className="space-y-1">
                            <Label htmlFor="new">New password</Label>
                            <Input id="new" type="password" />
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button>Save password</Button>
                        </CardFooter>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </ShowcaseSection>
              </ShowcaseGrid>
            </TabsContent>

            {/* Overlays Tab */}
            <TabsContent value="overlays" className="space-y-6">
              <ShowcaseGrid>
                <ShowcaseSection title="Dialog">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Open Dialog</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                          Make changes to your profile here. Click save when you&apos;re done.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="name" className="text-right">
                            Name
                          </Label>
                          <Input id="name" value="Pedro Duarte" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="username" className="text-right">
                            Username
                          </Label>
                          <Input id="username" value="@peduarte" className="col-span-3" />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Save changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </ShowcaseSection>
                <ShowcaseSection title="Alert Dialog">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline">Open Alert Dialog</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently delete your account
                          and remove your data from our servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </ShowcaseSection>
                <ShowcaseSection title="Sheet">
                  <div className="flex flex-wrap gap-3">
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline">Left</Button>
                      </SheetTrigger>
                      <SheetContent side="left">
                        <SheetHeader>
                          <SheetTitle>Edit profile</SheetTitle>
                          <SheetDescription>Make changes to your profile here.</SheetDescription>
                        </SheetHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                              Name
                            </Label>
                            <Input id="name" value="Pedro" className="col-span-3" />
                          </div>
                        </div>
                        <SheetFooter>
                          <SheetClose asChild>
                            <Button type="submit">Save changes</Button>
                          </SheetClose>
                        </SheetFooter>
                      </SheetContent>
                    </Sheet>
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline">Right</Button>
                      </SheetTrigger>
                      <SheetContent side="right">
                        <SheetHeader>
                          <SheetTitle>Edit profile</SheetTitle>
                          <SheetDescription>Make changes to your profile here.</SheetDescription>
                        </SheetHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                              Name
                            </Label>
                            <Input id="name" value="Pedro" className="col-span-3" />
                          </div>
                        </div>
                      </SheetContent>
                    </Sheet>
                  </div>
                </ShowcaseSection>
                <ShowcaseSection title="Drawer">
                  <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
                    <DrawerTrigger asChild>
                      <Button variant="outline">Open Drawer</Button>
                    </DrawerTrigger>
                    <DrawerContent>
                      <DrawerHeader className="text-left">
                        <DrawerTitle>Edit profile</DrawerTitle>
                        <DrawerDescription>
                          Make changes to your profile here. Click save when you&apos;re done.
                        </DrawerDescription>
                      </DrawerHeader>
                      <div className="px-4">
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                              Name
                            </Label>
                            <Input id="name" value="Pedro" className="col-span-3" />
                          </div>
                        </div>
                      </div>
                      <DrawerFooter className="pt-2">
                        <DrawerClose asChild>
                          <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
                </ShowcaseSection>
                <ShowcaseSection title="Popover">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline">Open Popover</Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <div className="grid gap-4">
                        <div className="space-y-2">
                          <h4 className="font-medium leading-none">Dimensions</h4>
                          <p className="text-sm text-muted-foreground">
                            Set the dimensions for the layer.
                          </p>
                        </div>
                        <div className="grid gap-2">
                          <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="width">Width</Label>
                            <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
                          </div>
                          <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="maxWidth">Max. width</Label>
                            <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
                          </div>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </ShowcaseSection>
                <ShowcaseSection title="Tooltip">
                  <div className="flex flex-wrap gap-4">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Hover me</Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Add to library</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p>Settings</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </ShowcaseSection>
                <ShowcaseSection title="Dropdown Menu">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">Open Menu</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <CreditCard className="mr-2 h-4 w-4" />
                        <span>Billing</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </ShowcaseSection>
                <ShowcaseSection title="Command Dialog">
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Press{" "}
                      <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                        <span className="text-xs">⌘</span>K
                      </kbd>{" "}
                      or click the button below
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setCommandOpen(true)}
                      className="w-full justify-start text-sm text-muted-foreground"
                    >
                      <Search className="mr-2 h-4 w-4" />
                      Search commands...
                    </Button>
                  </div>
                  <CommandDialog open={commandOpen} onOpenChange={setCommandOpen}>
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                      <CommandEmpty>No results found.</CommandEmpty>
                      <CommandGroup heading="Suggestions">
                        <CommandItem>
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          <span>Calendar</span>
                        </CommandItem>
                        <CommandItem>
                          <Smile className="mr-2 h-4 w-4" />
                          <span>Search Emoji</span>
                        </CommandItem>
                        <CommandItem>
                          <Calculator className="mr-2 h-4 w-4" />
                          <span>Calculator</span>
                        </CommandItem>
                      </CommandGroup>
                      <CommandSeparator />
                      <CommandGroup heading="Settings">
                        <CommandItem>
                          <User className="mr-2 h-4 w-4" />
                          <span>Profile</span>
                          <CommandShortcut>⌘P</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                          <CreditCard className="mr-2 h-4 w-4" />
                          <span>Billing</span>
                          <CommandShortcut>⌘B</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                          <Settings className="mr-2 h-4 w-4" />
                          <span>Settings</span>
                          <CommandShortcut>⌘S</CommandShortcut>
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </CommandDialog>
                </ShowcaseSection>
              </ShowcaseGrid>
            </TabsContent>
          </Tabs>

          {/* Footer */}
          <Separator className="my-8" />
          <footer className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              Built with @coolaf/onecn — All shadcn/ui components in one package.
            </p>
            <div className="flex items-center gap-2">
              <Badge variant="outline">React 18+</Badge>
              <Badge variant="outline">TailwindCSS</Badge>
              <Badge variant="outline">Radix UI</Badge>
            </div>
          </footer>
        </main>
      </div>
    </TooltipProvider>
  );
}

export const Dashboard: Story = {
  render: () => <ShowcaseDashboard />,
};
