import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQ {
  id: string
  question: string
  answer: string
}

interface BuyingGuideProps {
  faqs: FAQ[]
  title?: string
}

export default function BuyingGuide({ faqs, title = "Buying Guide & FAQs" }: BuyingGuideProps) {
  if (!faqs || faqs.length === 0) return null

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      <div className="bg-gray-50 rounded-lg p-6">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
              <AccordionContent>
                <div
                  className="text-gray-600 prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
