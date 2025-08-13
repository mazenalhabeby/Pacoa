import {toast} from "sonner"
import {contactInfo} from "@/data/contactInfo"
import {useForm} from "react-hook-form"
import {Button} from "@/components/ui/button"

interface ContactFormData {
  Name: string
  Email: string
  Nachricht: string
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {isSubmitting},
  } = useForm<ContactFormData>({
    defaultValues: {
      Name: "",
      Email: "",
      Nachricht: "",
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/peter.hauer@pacoa.at",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...data,
            _subject: "Neue Kontaktanfrage von der Pacoa.at Website",
            _captcha: false,
          }),
        }
      )

      const result = await response.json()

      if (result.success === "true") {
        reset()
        toast.success("Nachricht erfolgreich gesendet!")
      } else {
        toast.error("Fehler beim Senden. Bitte versuchen Sie es erneut.")
      }
    } catch (err) {
      console.error(err)
      toast.error(
        "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut."
      )
    }
  }

  return (
    <section className="bg-[#f9f9f9] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#b85b16] uppercase">
            Kontaktieren Sie uns
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Wir helfen Ihnen gerne weiter – senden Sie uns eine Nachricht oder
            kontaktieren Sie uns direkt!
          </p>
        </div>

        {/* Form & Info */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-8 rounded-lg shadow-lg space-y-5"
          >
            <input
              type="text"
              id="name"
              placeholder="Ihr Name"
              {...register("Name", {required: true})}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b85b16]"
            />
            <input
              type="email"
              id="email"
              placeholder="Ihre E-Mail"
              {...register("Email", {required: true})}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b85b16]"
            />
            <textarea
              rows={6}
              placeholder="Ihre Nachricht"
              id="message"
              {...register("Nachricht")}
              className="w-full px-4 py-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#b85b16]"
            />
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Wird gesendet..." : "Absenden"}
            </Button>
          </form>

          {/* Contact Info Cards */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between h-full">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              {contactInfo.map(({title, content, Icon}, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 border-b pb-4 last:border-b-0"
                >
                  <div className="p-3 bg-[#fff2e4] rounded-full shadow">
                    <Icon className="text-[#b85b16] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#b85b16]">
                      {title}
                    </h3>
                    <div className="text-gray-700 text-sm mt-1 space-y-1">
                      {content.map((line, idx) => (
                        <p key={idx}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full h-[400px] rounded-md overflow-hidden shadow-md">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2727.080349260757!2d13.804593615753898!3d48.0612035792157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477136fe35f4a91f%3A0x823b2e4bca15a228!2sPeiskam%206%2C%204694%20Ohlsdorf%2C%20Austria!5e0!3m2!1sen!2sat!4v1720590459271"
            width="100%"
            height="100%"
            style={{border: 0}}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default Contact
