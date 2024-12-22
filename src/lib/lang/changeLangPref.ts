"use server"

import getUserDataWithQrCodeId from "../user/getUserDataWithQrCodeId"

export default async function changeLangPref(qrCodeId: string) {
  const userData = await getUserDataWithQrCodeId(qrCodeId)

  let preferredLanguage = "en"
  const currentLangPref = userData.preferredLanguage
  if (currentLangPref == "en") {
    preferredLanguage = "ja"
  } else {
    preferredLanguage = "en"
  }

  const updateCount = await prisma.user.update({
    where: {
      qrCode: qrCodeId,
    },
    data: {
      preferredLanguage,
    },
  })

  return preferredLanguage
}