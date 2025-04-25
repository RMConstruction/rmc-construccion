import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export const PermissionsHero = () => (
  <div className="pt-28 md:pt-24 pb-12 bg-secondary/50">
    <div className="container-custom">
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>Building Permits</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="heading-lg mb-4">Building Permits</h1>
      <p className="paragraph max-w-3xl">
        Complete management of permits, licenses, and legal procedures to ensure your project complies with all regulations.
      </p>
    </div>
  </div>
);