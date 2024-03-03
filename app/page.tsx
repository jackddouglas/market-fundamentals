"use client"

import PageHeader from "@/components/page-header";
import { ThemeProvider } from "@/components/theme-provider";
import AddTicker from "@/components/add-ticker";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from "@/components/ui/card";
import { useState } from "react";
import Graph from "@/components/graph";

export default function Home() {
  const [ticker, setTicker] = useState("");

  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <PageHeader />
            <Card className={"w-[750px], inline-block"}>
              <CardHeader>
                <CardTitle>Chart</CardTitle>
                <CardDescription>Asset 1</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div>
                  <Graph />
                </div>
              </CardContent>
            </Card>
            <Card className={"w-[380px], inline-block"}>
              <CardHeader>
                <CardTitle>Add a Stock</CardTitle>
                <CardDescription>Track a new asset here.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div>
                  <AddTicker setTicker={setTicker} />
                </div>
              </CardContent>
            </Card>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
