// googleSheets.ts (but this now submits to Google Forms, not Sheets API)

export async function submitToGoogleSheets(formData: {
  name: string;
  email: string;
  message: string;
}) {
  const googleFormURL =
    "https://docs.google.com/forms/d/e/1FAIpQLSdpe_LQZINfbW7DZr4pHgU8PVh6lhMNP0z-mG5-SzRt9hsVAQ/formResponse";

  const params = new URLSearchParams();
  params.append("entry.2005620554", formData.name);     // Name
  params.append("entry.1045781291", formData.email);    // Email
  params.append("entry.839337160", formData.message);   // Message

  try {
    const response = await fetch(googleFormURL, {
      method: "POST",
      mode: "no-cors", // Google Forms requires this
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    return { success: true };
  } catch (error) {
    console.error("Error submitting to Google Form:", error);
    return { success: false, error };
  }
}
