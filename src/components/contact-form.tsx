import { useForm } from "@tanstack/react-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
     Card,
     CardContent,
     CardDescription,
     CardFooter,
     CardHeader,
     CardTitle,
} from "@/components/ui/card"
import {
     Field,
     FieldDescription,
     FieldError,
     FieldGroup,
     FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
     InputGroup,
     InputGroupAddon,
     InputGroupText,
     InputGroupTextarea,
} from "@/components/ui/input-group"

const formSchema = z.object({
     name: z
          .string()
          .min(3, "Name must be at least 3 characters.")
          .max(40, "Name must be at most 40 characters."),
     email: z
          .string()
          .email("Please enter a valid email address."),
     message: z
          .string()
          .min(20, "Message must be at least 20 characters.")
          .max(200, "Message must be at most 200 characters."),
})

const ContactForm = () => {
     const form = useForm({
          defaultValues: {
               name: "",
               email: "",
               message: "",
          },
          validators: {
               onSubmit: formSchema,
          },
          onSubmit: async ({ value }) => {
               console.log("Bakery Contact:", value)
          },
     })

     return (
          <Card className="w-full rounded-none border-2 border-primary border-dashed md:rounded">
               <CardHeader>
                    <CardTitle>Contact Wema Bakery</CardTitle>
                    <CardDescription>
                         Have a question, special order, or feedback? Let us know 🍰
                    </CardDescription>
               </CardHeader>

               <CardContent>
                    <form
                         id="bakery-contact-form"
                         onSubmit={(e) => {
                              e.preventDefault()
                              form.handleSubmit()
                         }}
                    >
                         <FieldGroup>
                              {/* Name */}
                              <form.Field
                                   name="name"
                                   children={(field) => {
                                        const isInvalid =
                                             field.state.meta.isTouched && !field.state.meta.isValid
                                        return (
                                             <Field data-invalid={isInvalid}>
                                                  <FieldLabel htmlFor={field.name}>
                                                       Your Name
                                                  </FieldLabel>
                                                  <Input
                                                       id={field.name}
                                                       value={field.state.value}
                                                       onBlur={field.handleBlur}
                                                       onChange={(e) => field.handleChange(e.target.value)}
                                                       placeholder="John Doe"
                                                       aria-invalid={isInvalid}
                                                  />
                                                  {isInvalid && (
                                                       <FieldError errors={field.state.meta.errors} />
                                                  )}
                                             </Field>
                                        )
                                   }}
                              />

                              {/* Email */}
                              <form.Field
                                   name="email"
                                   children={(field) => {
                                        const isInvalid =
                                             field.state.meta.isTouched && !field.state.meta.isValid
                                        return (
                                             <Field data-invalid={isInvalid}>
                                                  <FieldLabel htmlFor={field.name}>
                                                       Email Address
                                                  </FieldLabel>
                                                  <Input
                                                       id={field.name}
                                                       type="email"
                                                       value={field.state.value}
                                                       onBlur={field.handleBlur}
                                                       onChange={(e) => field.handleChange(e.target.value)}
                                                       placeholder="you@example.com"
                                                       aria-invalid={isInvalid}
                                                       autoComplete="email"
                                                  />
                                                  {isInvalid && (
                                                       <FieldError errors={field.state.meta.errors} />
                                                  )}
                                             </Field>
                                        )
                                   }}
                              />

                              {/* Message */}
                              <form.Field
                                   name="message"
                                   children={(field) => {
                                        const isInvalid =
                                             field.state.meta.isTouched && !field.state.meta.isValid
                                        return (
                                             <Field data-invalid={isInvalid}>
                                                  <FieldLabel htmlFor={field.name}>
                                                       Message / Order Details
                                                  </FieldLabel>

                                                  <InputGroup>
                                                       <InputGroupTextarea
                                                            id={field.name}
                                                            value={field.state.value}
                                                            onBlur={field.handleBlur}
                                                            onChange={(e) => field.handleChange(e.target.value)}
                                                            placeholder="I would like to order a birthday cake for Saturday..."
                                                            rows={6}
                                                            className="min-h-24 resize-none"
                                                            aria-invalid={isInvalid}
                                                       />
                                                       <InputGroupAddon align="block-end">
                                                            <InputGroupText className="tabular-nums">
                                                                 {field.state.value.length}/200
                                                            </InputGroupText>
                                                       </InputGroupAddon>
                                                  </InputGroup>

                                                  <FieldDescription>
                                                       Include quantity, date, and any special instructions.
                                                  </FieldDescription>

                                                  {isInvalid && (
                                                       <FieldError errors={field.state.meta.errors} />
                                                  )}
                                             </Field>
                                        )
                                   }}
                              />
                         </FieldGroup>
                    </form>
               </CardContent>

               <CardFooter>
                    <Field orientation="horizontal">
                         <Button
                              type="button"
                              variant="outline"
                              onClick={() => form.reset()}
                         >
                              Reset
                         </Button>
                         <Button type="submit" form="bakery-contact-form">
                              Send Message
                         </Button>
                    </Field>
               </CardFooter>
          </Card>
     )
}

export default ContactForm
