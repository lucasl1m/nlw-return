import React, { useState } from "react";

import { ChatTeardropDots } from "phosphor-react";

import { Popover } from "@headlessui/react";
import { WidgetForm } from "./WidgetForm";

export const Widget: React.FC = () => {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  function toogleWidgetVisibility() {
    setIsWidgetOpen(!isWidgetOpen);
  }

  return (
    <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button
        className="bg-brand-500 rounded-full px-3 h-12 flex items-center group"
        onClick={toogleWidgetVisibility}
      >
        <ChatTeardropDots className="w-6 h-6 text-white" />

        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="text-white pl-2">Feedback</span>
        </span>
      </Popover.Button>
    </Popover>
  );
};
