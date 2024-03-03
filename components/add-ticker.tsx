import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import "@/app/page"
import { Dispatch, SetStateAction } from "react"
import { Toaster } from "./ui/toaster"
import { useToast } from "./ui/use-toast"
import { restClient } from "@polygon.io/client-js"
import dotenv from "dotenv"

dotenv.config();
const apiKey = process.env.POLY_API_KEY;

const formSchema = z.object({
  ticker: z.string(),
});

const rest = restClient(apiKey);

export default function AddTicker({ setTicker }: { setTicker: Dispatch<SetStateAction<string>> }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ticker: "",
    },
  });

  const { toast } = useToast();

  function onSubmit(ticker: z.infer<typeof formSchema>) {
    let stock = ticker.ticker.toUpperCase();
    rest.reference.tickerDetails(stock).then((data) => {
      console.log(data);
    }).catch(e => {
      console.log('Erorr');
    });
    setTicker(stock);
    toast({
      title: `${stock} Added`,
      description: `${stock} will now be tracked in your watchlist.`
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="ticker"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Stock Ticker</FormLabel>
              <FormControl>
                <Input placeholder="AAPL" {...field} />
              </FormControl>
              <FormDescription>
                Enter the ticker of the asset you'd like to track.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
      <Toaster />
    </Form>
  )
}
