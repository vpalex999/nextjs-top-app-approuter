import { Button, Htag, Paragraph } from "@/components";

export default function Home() {
  return (
    <div>
      <Htag tag="h1">Text1</Htag>
      <Htag tag="h2">Text2</Htag>
      <Htag tag="h3">Text3</Htag>
      <Button arrow="right">Button primary</Button>
      <Button arrow="down" appearance="ghost">
        Button ghost
      </Button>
      <Paragraph>Paragraph default size</Paragraph>
      <Paragraph size="l">Paragraph big size</Paragraph>
      <Paragraph size="m">Paragraph medium size</Paragraph>
      <Paragraph size="s">Paragraph small size</Paragraph>
    </div>
  );
}
