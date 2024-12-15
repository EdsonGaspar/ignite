import { Card, CardContent, CardHeader } from "../ui/card";

export function Summary() {
  return (
    <section>
      <h1>Summary</h1>
      <Card className="text-[#C4C4CC] ">
        <CardHeader>
          <p>Entrada</p>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </section>
  );
}
