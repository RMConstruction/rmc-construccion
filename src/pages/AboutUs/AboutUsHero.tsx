import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { breadcrumbItems } from "./about-data";

export const AboutUsHero = () => (
  <div className="pt-20 md:pt-24 pb-12 bg-secondary/50">
    <div className="container-custom">
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          {breadcrumbItems.map((item, index) => (
            <BreadcrumbItem key={index}>
              {item.href ? (
                <>
                  <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                  {index < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
                </>
              ) : (
                <BreadcrumbLink>{item.label}</BreadcrumbLink>
              )}
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="heading-lg mb-4">About Us</h1>
      <p className="paragraph max-w-3xl">
        Creating Timeless Spaces with Purpose and Passion.
      </p>
    </div>
  </div>
);