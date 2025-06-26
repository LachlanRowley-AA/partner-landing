import React, { useState } from "react";
import { BiCheck, BiX, BiInfoCircle } from "react-icons/bi";
import { BsBank2 } from "react-icons/bs";
import { Button } from "@/components/moving-border-button/button"

type Feature = {
  text: string;
  items: React.ReactNode[];
  info?: string;
  green: boolean[];
};

type ImageProps = {
  src: string | React.ComponentType<any>;
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

const scrollToSection = (id: string) => {
  console.log('click');
  const section = document.getElementById(id);
  if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      console.log('section found');
  }
  else {
    console.log('section not found');
  }
};

export type Comparison1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

const InfoTooltip = ({ info }: { info: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="relative inline-block ml-2">
      <BiInfoCircle
        className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-help transition-colors"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      />
      {isVisible && (
        <div className="absolute z-10 px-3 py-2 text-sm text-white bg-gray-900 border border-gray-700 rounded-lg shadow-lg -top-2 left-6 w-64 transform -translate-y-full">
          <div className="relative">
            {info}
            <div className="absolute top-full left-0 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900 transform -translate-x-3"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export const Comparison1 = (props: Comparison1Props) => {
  const { heading, comparisonProducts, features, buttons } = {
    ...Comparison1Defaults,
    ...props,
  };
 
  return (
    <section id="comparison" className="px-[5%] py-16 md:py-24 lg:py-28 bg-white text-black">
      <div className="container mx-auto">
        <div className="mx-auto text-center">
          <h2
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-[#01E194]"
          >
            {heading}
          </h2>
        </div>
       
        <div className="mx-auto max-w-6xl">
          {/* Table container with complete border */}
          <div className="border border-black">
            {/* Header row */}
            <div className="grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr]">
              {comparisonProducts.map((comparison, index) => (
                <React.Fragment key={index}>
                  <div className="hidden h-full flex-col items-start justify-end py-4 pr-4 sm:py-6 sm:pr-6 md:flex lg:py-6 lg:pr-6 border-r border-black">
                    <h2 className="text-md font-bold leading-[1.4] md:text-xl text-black px-4">
                      {comparison.title}
                    </h2>
                  </div>
                  {comparison.products.map((plan, planIndex) => (
                    <ProductPlan key={planIndex} index={planIndex} {...plan} />
                  ))}
                </React.Fragment>
              ))}
            </div>
           
            {/* Features section */}
            <FeaturesSection features={features} />
          </div>
         
          {buttons && buttons.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  size={button.size as any}
                  className="text-black"
                  contentStyle={{ backgroundColor: "#01E194"}}
                  onClick={(e: any) => {
                  e.preventDefault();
                  scrollToSection('endcontact');
                }}

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
      className={`flex h-full flex-col justify-between px-2 py-4 sm:px-4 sm:py-6 lg:p-6 border-r border-black last:border-r-0 ${
        index === 0 ? "bg-[#01E194]" : "bg-gray-800"
      }`}
    >
      <div className="flex flex-col items-center gap-4 text-center">
        {typeof product.icon.src === 'string' ? (
          <img
            src={product.icon.src}
            alt={product.icon.alt || `${product.productName} icon`}
            className="w-12 h-12 object-contain"
          />
        ) : (
          React.createElement(product.icon.src, {
            className: `w-12 h-12 ${index === 0 ? "text-black" : "text-gray-300"}`,
            alt: product.icon.alt || `${product.productName} icon`
          })
        )}
        <div>
          <h3 className={`text-md font-bold leading-[1.4] mb-2 ${
            index === 0 ? "text-white text-xl" : "text-gray-200 text-lg"
          }`}>
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
    <>
      {features.map((feature, featureIndex) => (
        <div
          key={featureIndex}
          className="grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr] hover:bg-gray-900/30 transition-colors border-t border-black"
        >
          <div className="col-span-2 row-span-1 py-4 px-4 md:col-span-1 md:pr-6 flex items-center border-r border-black">
            <div className="flex items-center">
              <p className="text-black font-medium">{feature.text}</p>
              {feature.info && <InfoTooltip info={feature.info} />}
            </div>
          </div>
          {feature.items.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className={`flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6 border-r border-black last:border-r-0 ${
                itemIndex === 0 || feature.green[itemIndex] === true
                  ? "bg-[#01E194] text-white"
                  : "bg-gray-800 text-gray-200"
              }`}
            >
              <span className="flex items-center justify-center">
                {typeof item === 'string' ? item :
                React.isValidElement(item) ? React.cloneElement(item as React.ReactElement<any>, {
                  className: `w-6 h-6 ${
                    itemIndex === 0 || feature.green[itemIndex] === true ? "text-white" : "text-gray-300"
                  }`
                }) : item}
              </span>
            </div>
          ))}
        </div>
      ))}
    </>
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
            src: BsBank2,
            alt: "Competitor 1 logo",
          },
          productName: "Establishment Banks",
          description: "",
        },
      ],
    },
  ],
  features: [
    {
      text: "Line Fees",
      items: [<BiX className="w-6 h-6" />, <BiCheck className="w-6 h-6" />],
      info: "Monthly or annual fees charged for maintaining a line of credit, regardless of usage.",
      green: [true, false]
    },
    {
      text: "Establishment Fees",
      items: [<BiX className="w-6 h-6" />, <BiCheck className="w-6 h-6" />],
      info: "One-time setup fees charged when opening a new credit facility or loan account.",
      green: [true, false]
    },
    {
      text: "Financials Required",
      items: [<BiX className="w-6 h-6" />, <BiCheck className="w-6 h-6" />],
      info: "Whether detailed financial statements, tax returns, or business records are required for approval.",
      green: [true, false]
    },
    {
      text: "Credit Score Safe",
      items: [<BiCheck className="w-6 h-6" />, <BiX className="w-6 h-6" />],
      info: "Whether the application process protects the customer's credit score from hard inquiries that could lower it.",
      green: [true, false]
    },
    {
      text: "Turnaround Time",
      items: ["2-3 Days", "Weeks"],
      info: "The typical time from application submission to funding approval and disbursement.",
      green: [true, false]
    },
    {
      text: "Funds Paid To",
      items: ["You (agency)", "Customer"],
      info: "Who receives the approved funds - either your business directly or your customer/client.",
      green: [true, false]
    },
    {
      text: "Business Security",
      items: [<BiX className="w-6 h-6" />, <BiCheck className="w-6 h-6" />],
      info: "Whether the customer's business assets or guarantees are required as collateral for the credit facility.",
      green: [true, false]
    },
    {
      text: "Security Required",
      items: [<BiX className="w-6 h-6" />, <BiX className="w-6 h-6" />],
      info: "Whether additional security deposits, guarantees, or collateral are needed to secure funding.",
      green: [true, true]
    },
    {
      text: "Interest Range",
      items: ["12.95-16.95%", "12-15%"],
      info: "The annual percentage rate (APR) range the customer can expect to pay on borrowed funds.",
      green: [true, true]
    },
  ],
  buttons: [
    {
      title: "Contact Us",
    },
  ],
};

export default Comparison1;