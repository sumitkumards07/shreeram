import { Card, CardBody } from "@heroui/react";
import { Building2 } from "lucide-react";

export function LenderCredibility() {
  return (
    <section className="border-y border-hairline bg-surface-soft py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-6">
          <Building2 size={32} />
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Explore options from leading banks & NBFCs
        </h2>
        <p className="mt-4 text-base text-muted max-w-2xl mx-auto">
          We work with multiple financial institutions to help you find the most suitable interest rates, terms, and approval chances for your specific profile.
        </p>
        
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6 opacity-70">
          <Card shadow="none" className="bg-background">
            <CardBody className="p-4 flex items-center justify-center h-20 text-sm font-semibold text-ink">
              Public Sector Banks
            </CardBody>
          </Card>
          <Card shadow="none" className="bg-background">
            <CardBody className="p-4 flex items-center justify-center h-20 text-sm font-semibold text-ink text-center">
              Private Sector Banks
            </CardBody>
          </Card>
          <Card shadow="none" className="bg-background">
            <CardBody className="p-4 flex items-center justify-center h-20 text-sm font-semibold text-ink">
              Leading NBFCs
            </CardBody>
          </Card>
          <Card shadow="none" className="bg-background">
            <CardBody className="p-4 flex items-center justify-center h-20 text-sm font-semibold text-ink text-center">
              Housing Finance Cos.
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}
