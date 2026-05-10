"use client";

import { useState } from "react";

import Button from "@/shared/ui/button";
import { copyToClipboard } from "@/shared/utils/copy-to-clipboard";

type CopyButtonProps = {
  textToCopy: string;
  buttonText?: string;
};

export default function CopyButton({
  textToCopy,
  buttonText = "Copy",
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await copyToClipboard(textToCopy)

    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <Button
      variant="transparent"
      onClick={handleCopy}
    >
      {copied ? "Copied!" : buttonText}
    </Button>
  );
}