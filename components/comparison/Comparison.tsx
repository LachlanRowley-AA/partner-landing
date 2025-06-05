import { Button } from "@/components/moving-border-button/button"
import clsx from "clsx";
import React from "react";
import { BiCheck, BiX } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";

type Feature = {
  text: string;
  items: React.ReactNode[];
};

type ImageProps = {
  src: string;
  alt?: string;
};

type ComparisonProducts = {
  title?: string;
  products: Product[];
};

type Product = {
  icon: ImageProps;
  productName: string;
  description: string;
};

type ButtonProps = {
  title: string;
  variant?: string;
  size?: string;
  iconRight?: React.ReactNode;
};

type Props = {
  heading: string;
  comparisonProducts: ComparisonProducts[];
  features: Feature[];
  buttons: ButtonProps[];
};

export type Comparison1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Comparison1 = (props: Comparison1Props) => {
  const { heading, comparisonProducts, features, buttons } = {
    ...Comparison1Defaults,
    ...props,
  };
  
  return (
    <section id="comparison" className="px-[5%] py-16 md:py-24 lg:py-28 bg-black text-white">
      <div className="container mx-auto">
        <div className="mx-auto text-center">
          <h2
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, #01E194 50%, #FFFFFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {heading}
          </h2>
        </div>
        
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-3 border-y border-white/20 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            {comparisonProducts.map((comparison, index) => (
              <React.Fragment key={index}>
                <div className="hidden h-full flex-col items-start justify-end py-4 pr-4 sm:py-6 sm:pr-6 md:flex lg:py-6 lg:pr-6">
                  <h2 className="text-md font-bold leading-[1.4] md:text-xl text-white">
                    {comparison.title}
                  </h2>
                </div>
                {comparison.products.map((plan, planIndex) => (
                  <ProductPlan key={planIndex} index={planIndex} {...plan} />
                ))}
              </React.Fragment>
            ))}
          </div>
          
          <FeaturesSection features={features} />
          
          {buttons && buttons.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              {buttons.map((button, index) => (
                <Button 
                  key={index}
                  size={button.size as any}
                  className="text-white"
                  contentStyle={{ backgroundColor: "#01E194"}}
                >
                  {button.title}
                  {button.iconRight && <span className="ml-2">{button.iconRight}</span>}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const ProductPlan = ({ index, ...product }: Product & { index: number }) => {
  return (
    <div
      className={clsx(
        "flex h-full flex-col justify-between px-2 py-4 sm:px-4 sm:py-6 lg:p-6 border-r border-white/20 last:border-r-0",
        {
          "bg-[#01E194]": index === 0,
          "bg-gray-800": index !== 0,
        }
      )}
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <img 
          src={product.icon.src} 
          alt={product.icon.alt || `${product.productName} icon`}
          className="size-12 object-contain" 
        />
        <div>
          <h3 className={clsx(
            "text-md font-bold leading-[1.4] mb-2",
            {
              "text-white text-xl": index === 0,
              "text-gray-200 text-lg": index !== 0,
            }
          )}>
            {product.productName}
          </h3>
          <p className="text-sm text-gray-300">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const FeaturesSection = ({ features }: { features: Feature[] }) => {
  return (
    <div className="divide-y divide-white/20 border-y border-white/20">
      {features.map((feature, featureIndex) => (
        <div
          key={featureIndex}
          className="grid grid-cols-3 md:grid-cols-[1.5fr_1fr_1fr_1fr] hover:bg-gray-900/30 transition-colors"
        >
          <div className="col-span-3 row-span-1 py-4 pr-4 md:col-span-1 md:pr-6 flex items-center">
            <p className="text-white font-medium">{feature.text}</p>
          </div>
          {feature.items.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className={clsx(
                "flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6 border-r border-white/10 last:border-r-0",
                {
                  "bg-[#01E194] text-white": itemIndex === 0,
                  "bg-gray-800 text-gray-200": itemIndex !== 0,
                }
              )}
            >
            <span className="flex items-center justify-center">
              {typeof item === 'string' ? item :
              React.isValidElement(item) ? React.cloneElement(item as React.ReactElement<any>, {
                className: clsx((item as React.ReactElement<any>).props.className,
                  itemIndex === 0 ? "text-white" : "text-gray-300")
              }) : item}
            </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export const Comparison1Defaults: Props = {
  heading: "The Asset Alley Advantage",
  comparisonProducts: [
    {
      title: "Product comparison",
      products: [
        {
          icon: {
            src: "./Asset Alley Brandmark_MonoScreenUse-cropped.svg",
            alt: "Asset Alley logo",
          },
          productName: "Asset Alley",
          description: "",
        },
        {
          icon: {
            src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
            alt: "Competitor 1 logo",
          },
          productName: "Competitor A",
          description: "",
        },
        {
          icon: {
            src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
            alt: "Competitor 2 logo",
          },
          productName: "Competitor B",
          description: "",
        },
      ],
    },
  ],
  features: [
    {
      text: "Feature 0",
      items: ["A", "B", "C"],
    },
    {
      text: "Feature 1",
      items: [<BiCheck className="size-6" />, <BiCheck className="size-6" />, <BiX className="size-6" />],
    },
    {
      text: "Feature 2",
      items: [<BiCheck className="size-6" />, <BiCheck className="size-6" />, <BiX className="size-6" />],
    },
    {
      text: "Feature 3",
      items: [<BiCheck className="size-6" />, <BiX className="size-6" />, <BiX className="size-6" />],
    },
    {
      text: "Feature 4",
      items: [<BiCheck className="size-6" />, <BiX className="size-6" />, <BiX className="size-6" />],
    },
  ],
  buttons: [
    {
      title: "Contact Us",
    },
  ],
};