import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem,
  BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage as BreadcrumbPageItem, BreadcrumbEllipsis,
} from '@/components/ui/breadcrumb'

export function BreadcrumbPage() {
  return (
    <section className="space-y-10">
      <header>
        <h2 className="text-2xl font-bold">Breadcrumb</h2>
        <p className="text-muted-foreground mt-1">Shows the current page location within a hierarchy.</p>
      </header>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Simple</h3>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink href="#">Components</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPageItem>Breadcrumb</BreadcrumbPageItem></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">With Ellipsis</h3>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbEllipsis /></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink href="#">Category</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPageItem>Current Page</BreadcrumbPageItem></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </section>
  )
}
