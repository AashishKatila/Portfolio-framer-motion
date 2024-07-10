import DiscloseImage from "../image/disclose-image";
import SwapText from "./swap-text";
import { motion } from "framer-motion";

interface FlipTextCardProps {
  title: string;
  initialText: string;
  finalText: string;
  imgSource: string;
}

export default function SwapTextCard({
  title,
  initialText,
  finalText,
  imgSource,
}: FlipTextCardProps) {
  console.log("Image Source: ", imgSource);

  return (
    <div className="group flex min-h-64 w-full flex-col gap-4 item rounded-3xl bg-gray-100 px-6 pt-6 md:max-w-[500px]">
      <div className="mb-2 text-sm font-medium uppercase tracking-wide text-gray-500">
        {title}
      </div>
      <motion.div
        className="flex justify-center "
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
      >
        {/* <img
          src={imgSource}
          alt="Animata"
          className="md:w-56 md:h-56 md:rounded-3xl rounded-xl w-40 h-40"
        /> */}
        <DiscloseImage
          alt="A beautiful image"
          doorClassName="bg-yellow-200"
          // src="https://plus.unsplash.com/premium_vector-1689096860582-07eee139f9f1?bg=FFFFFF&w=800&auto=format&fit=crop&q=100&ixlib=rb-4.0.3"
          src={imgSource}
        />
      </motion.div>
      <div className="flex flex-col justify-between md:min-w-72">
        <div className="md:hidden">
          <div className="text-lg font-semibold text-black">{initialText}</div>
          <div className="text-sm font-medium text-gray-500">{finalText}</div>
        </div>
        <SwapText
          initialText={initialText}
          finalText={finalText}
          disableClick
          // Set min height so that all the text content fits
          // use -mb-7 to hide the extra space when not active
          className=" hidden min-h-20 w-3/4 transition-all duration-200 group-hover:mb-0 md:flex md:flex-col"
          initialTextClassName="text-lg group-hover:opacity-0 h-full duration-200 font-semibold text-black"
          finalTextClassName="text-sm h-full duration-200 font-medium text-gray-500"
        />
      </div>
    </div>
  );
}
