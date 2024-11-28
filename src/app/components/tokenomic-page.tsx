"use client";
import { Lock } from "lucide-react";
import { Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { Alocation: "Foundation", Tokenomic: 10, fill: "var(--color-Foundation )" },
  { Alocation: "Circulation", Tokenomic: 90, fill: "var(--color-Circulation)" },
];
const chartConfig = {
  Tokenomic: {
    label: "Visitors",
  },
  Foundation: {
    label: "Foundation",
    color: "hsl(var(--chart-1))",
  },
  Circulation: {
    label: "Circulation",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function TokenomicPage() {
  return (
    <div>
      <section id="tokenomic">
        <div className="  py-2">
          <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-8">
            <div className="flex flex-col w-full  md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
              <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
                Tokenomic
              </p>
              <ul className="text-sm md:text-base  mb-4">
                <li>Total Supply: 1.000.000.000 $SAINT</li>
                <li>Circulation Supply: 1.000.000.000 $SAINT</li>
                <li>Tax: 0% on All Transaction</li>
                <li>
                  10% $SAINT Token alocation for Foundation Locked 2 Years
                </li>
              </ul>
            </div>
            <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <Card className="flex flex-col">
                    <CardHeader className="items-center pb-0">
                      <CardTitle>Tokenomic</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 pb-0">
                      <ChartContainer
                        config={chartConfig}
                        className="mx-auto aspect-square max-h-[250px]"
                      >
                        <PieChart>
                          <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                          />
                          <Pie
                            data={chartData}
                            dataKey="Tokenomic"
                            nameKey="Alocation"
                            innerRadius={60}
                          />
                        </PieChart>
                      </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col gap-2 text-sm">
                      <div className="flex items-center gap-2 font-medium leading-none">
                        10% Alocation For Foundation Locked 2 Years{" "}
                        <Lock className="h-4 w-4" />
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
