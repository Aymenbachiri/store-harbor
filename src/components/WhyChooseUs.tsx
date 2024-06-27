import CustomerServiceIcon from "@/lib/svg/CustomerServiceIcon";
import FastShippingIcon from "@/lib/svg/FastShippingIcon";
import QualityIcon from "@/lib/svg/QualityIcon";

const Features = [
  {
    title: "Unbeatable Quality",
    paragraph:
      "At Store Harbor, we take pride in offering products of unmatched quality. Each item in our collection undergoes rigorous quality control measures to ensure that our customers receive only the best of the best. From materials to craftsmanship, we pay attention to every detail to guarantee that you're getting a product that meets the highest standards.",
    icon: <QualityIcon />,
  },
  {
    title: "Exceptional Customer Service",
    paragraph:
      "What sets Store Harbor apart is our commitment to providing exceptional customer service. Our dedicated team is here to assist you every step of the way, from helping you find the perfect product to addressing any post-purchase queries or concerns you may have. Your satisfaction is our top priority, and we go above and beyond to ensure that your shopping experience with us is nothing short of extraordinary.",
    icon: <CustomerServiceIcon />,
  },
  {
    title: "Fast and Reliable Shipping",
    paragraph:
      "With our swift and reliable shipping services, you can shop with peace of mind knowing that your order will reach you in no time. We understand the anticipation of receiving your purchase, which is why we work tirelessly to process and dispatch orders promptly. Whether you're shopping for a special occasion or just treating yourself, you can trust Store Harbor to deliver your items safely and efficiently.",
    icon: <FastShippingIcon />,
  },
];

export default function WhyChooseUs() {
  return (
    <main className="items-start container mx-auto my-20 gap-4 grid grid-cols-1 md:grid-cols-3">
      {Features.map((feature) => (
        <div key={feature.title}>
          <div className="flex items-center rounded-md size-[40px] bg-emerald-500 p-2 text-white">
            {feature.icon}
          </div>
          <section className="flex w-full min-w-0 flex-col items-start justify-center gap-0 text-base">
            <h3 className="mb-2 py-2 text-lg leading-6 text-slate-700">
              {feature.title}
            </h3>
            <p className="text-slate-500">{feature.paragraph}</p>
          </section>
        </div>
      ))}
    </main>
  );
}
