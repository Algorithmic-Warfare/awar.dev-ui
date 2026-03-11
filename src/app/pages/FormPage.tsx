import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

const proposalSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  category: z.string().min(1, "Select a category"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  amount: z.string().regex(/^\d+(\.\d+)?$/, "Enter a valid amount").optional(),
})

type ProposalForm = z.infer<typeof proposalSchema>

export function FormPage() {
  const form = useForm<ProposalForm>({
    resolver: zodResolver(proposalSchema),
    defaultValues: {
      title: "",
      category: "",
      description: "",
      amount: "",
    },
  })

  function onSubmit(data: ProposalForm) {
    toast.success("Proposal submitted", {
      description: `"${data.title}" in ${data.category}`,
    })
    form.reset()
  }

  return (
    <section className="space-y-10">
      <header>
        <h2 className="text-2xl font-bold">Form</h2>
        <p className="text-muted-foreground mt-1">
          react-hook-form + zod validation with accessible error messages.
        </p>
      </header>

      <div className="max-w-md">
        <h3 className="text-base font-semibold mb-4">DAO Proposal</h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Proposal title..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="treasury">Treasury</SelectItem>
                      <SelectItem value="governance">Governance</SelectItem>
                      <SelectItem value="protocol">Protocol</SelectItem>
                      <SelectItem value="community">Community</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="0.00" {...field} />
                  </FormControl>
                  <FormDescription>Requested SUI amount</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describe your proposal..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Submit Proposal</Button>
          </form>
        </Form>
      </div>
    </section>
  )
}
