import { Button, Htag } from "@/components";

export default function Home() {
  return (
    <div>
      <Htag tag="h1">Text1</Htag>
      <Htag tag="h2">Text2</Htag>
      <Htag tag="h3">Text3</Htag>
      <Button>Button primary</Button>
      <Button appearance="ghost">Button ghost</Button>
    </div>
  );
}
