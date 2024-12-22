"use client"

import changeLangPref from "@/lib/lang/changeLangPref";
import gt from "@/lib/lang/gt";
import CookieErrorUI from "./CookieErrorUI";

/**
 * set true for full width, set false for a normal button.
 * @param width
 * @returns a change Language button
 */
export default function ChangeLangButton({ qrCodeId, width }: { qrCodeId: string, width: boolean }) {

  async function changeLang() {
    const preferredLanguage = await changeLangPref(qrCodeId)
    document.cookie = "langPref=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = `langPref=${preferredLanguage}; path=/;`;
    window.location.reload();
  }

  if (width) {
    return (
      <button className="btn mb-2 w-full" onClick={() => changeLang()}>change language/言語を変更</button>
    )
  } else {
    return (
      <button className="btn" onClick={() => changeLang()}>change language/言語を変更</button>
    )
  }
}
