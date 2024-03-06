import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ButtonShadcn } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "../ui/use-toast";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
      name: "",
    },
  });

  {
    /**2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);

    emailjs.send(process.env.REACT_APP_SERVICE_ID || "", process.env.REACT_APP_TEMPLATE_ID || "", values, process.env.REACT_APP_PUBLIC_KEY || "").then(
      (result) => {
        console.log(result.text, "DEU CERTO");
        toast({
          title: "Your email was sent successfully!",
          description: ` Thank you for reaching out ${values.name}. I will get back to you as soon as possible.`,
        });
      },
      (error) => {
        console.log(error.text);
        toast({
          variant: "destructive",
          title: "Your email was not sent!",
          description: "There was a problem with your email, try again or send it to raphael.malburg@gmail.com.",
        });
      }
    );
    form.reset();
  } */
  }
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: import.meta.env.VITE_SERVICE_ID,
          template_id: import.meta.env.VITE_TEMPLATE_ID,
          user_id: import.meta.env.VITE_PUBLIC_KEY,
          template_params: {
            name: values.name,
            email: values.email,
            message: values.message,
          },
        }),
      });
      if (!response.ok) {
        toast({
          variant: "destructive",
          title: "Your email was not sent!",
          description: "There was a problem with your email, try again later.",
        });
      }

      toast({
        title: "Your email was sent successfully!",
        description: `Thank you for reaching out ${values.name}. I will get back to you as soon as possible.`,
      });

      form.reset(); // Reset the form after successful submission
    } catch (error) {
      console.error("Email sending error:", error);
      toast({
        variant: "destructive",
        title: "Your email was not sent!",
        description: "There was a problem with your email, try again later.",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} className="border-darkCharcoal" />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="your@email.com" {...field} type="textarea" className="border-darkCharcoal" />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Input placeholder="Write your message" {...field} className=" text-wrap pb-20 pt-4 border-darkCharcoal" />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <ButtonShadcn type="submit">Submit</ButtonShadcn>
      </form>
    </Form>
  );
}
