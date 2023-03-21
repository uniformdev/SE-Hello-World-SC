import {
  ComponentProps,
  registerUniformComponent,
} from "@uniformdev/canvas-react";
import Image from "next/image";

type HeroProps = ComponentProps<{
  datasource?: {
    ItemName: string;
    src?: string;
  };
}>;

const Hero: React.FC<HeroProps> = ({ datasource }: HeroProps) => {
  const { ItemName, src } = datasource || {};
  return (
    <div>
      <h1 className="title">{ItemName}</h1>

      <div className="description" />
      <Image src={src} width={600} height={300} />
    </div>
  );
};

// making sure `<UniformSlot />` how to render components with type 'hero'
registerUniformComponent({
  type: "hero",
  component: Hero,
});

export default Hero;
