import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export const ConstructionHero = () => (
  <div className="pt-28 md:pt-24 pb-12 bg-secondary/50">
    <div className="container-custom">
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>Construction Zone</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="heading-lg mb-4">Construction Zone</h1>
      <p className="paragraph max-w-3xl">
        Thoughtful Designs & Seamless Project Execution for Inspired Living
      </p>
    </div>
  </div>
);