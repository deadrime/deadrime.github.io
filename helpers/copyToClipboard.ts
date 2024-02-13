"use client";

export const copyToClipboard = async (text: string) => {
  window.navigator.clipboard.writeText(text)
};
