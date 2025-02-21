export const sendEmail = async (e) => {
  e.preventDefault;

  const from_name = e.target.from_name.value;
  const message = `Email: <br> ${e.target.email.value} <br> Mensaje: <br> ${e.target.message.value}`;

  const data = {
    service_id: "default_service",
    template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    template_params: {
      from_name,
      message,
    },
  };

  try {
    const response = await fetch(import.meta.env.VITE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw Error("Error sending email, try later");

    return {
      isSuccess: true,
      data: response,
    };
  } catch (err) {
    console.log(err);
    return {
      isSuccess: false,
      data: null,
      error: err,
    };
  }
};
