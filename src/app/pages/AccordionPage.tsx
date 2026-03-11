import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

export function AccordionPage() {
  return (
    <section className="space-y-10">
      <header>
        <h2 className="text-2xl font-bold">Accordion</h2>
        <p className="text-muted-foreground mt-1">A vertically stacked set of collapsible sections.</p>
      </header>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Single</h3>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Network Configuration</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground">Primary: 10.0.0.1/24 — Gateway: 10.0.0.254</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Security Policies</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground">Firewall: active — IDS: monitoring — Encryption: AES-256</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>System Logs</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground">Last 24h: 1,247 events — 3 warnings — 0 errors</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Multiple</h3>
        <Accordion type="multiple" defaultValue={["m1", "m2"]}>
          <AccordionItem value="m1">
            <AccordionTrigger>Section A</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground">Multiple items can be expanded simultaneously.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="m2">
            <AccordionTrigger>Section B</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground">This section is also expanded by default.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="m3">
            <AccordionTrigger>Section C</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground">Click to expand this section too.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
