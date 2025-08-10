import {useState} from "react"
import {useForm} from "react-hook-form"
import {toast} from "sonner"
import {palletQualities} from "@/data"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import {Label} from "@/components/ui/label"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Button} from "@/components/ui/button"

interface PalletFormData {
  Name: string
  Email: string
  Menge: number
  Nachricht?: string
}

const Products = () => {
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-12 bg-white max-w-7xl mx-auto">
      {palletQualities.map(({grade, image, description, price}) => (
        <PalletDialog
          key={grade}
          grade={grade}
          image={image}
          description={description}
          price={price}
        />
      ))}
    </section>
  )
}

export default Products

// Pallet Dialog component
const PalletDialog = ({
  grade,
  description,
  price,
  image,
}: {
  grade: string
  image: string
  description: string
  price: number
}) => {
  const [open, setOpen] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors, isSubmitting},
  } = useForm<PalletFormData>({
    defaultValues: {
      Email: "",
      Menge: 1,
      Nachricht: "",
    },
  })

  const onSubmit = async (data: PalletFormData) => {
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
            Grade: grade,
            Preis: `${price} EUR`,
            ...data,
            _subject: `Produktanfrage für ${grade} (€${price})`,
            _captcha: false,
          }),
        }
      )

      const result = await response.json()

      if (result.success === "true") {
        reset()
        setOpen(false)
        toast.success(`Anfrage für ${grade} erfolgreich gesendet!`)
      } else {
        toast.error("Fehler beim Senden. Bitte versuchen Sie es erneut.")
      }
    } catch (error) {
      console.error(error)
      toast.error(
        "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut."
      )
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div
          onClick={() => setOpen(true)}
          className="bg-gradient-to-br from-[#fefefe] to-[#f4f4f4] shadow-lg rounded-xl p-6 text-center cursor-pointer hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-[#e0e0e0]"
        >
          <img
            src={image}
            alt={grade}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-extrabold text-[#b85b16] mb-2">
            {grade}
          </h3>
          <p className="text-gray-700 text-sm flex-1 mb-6">{description}</p>
          <div className="mt-auto px-4 py-2 bg-[#b85b16] hover:bg-[#a24e13] text-white font-semibold rounded-full transition-colors duration-300">
            Jetzt bestellen
          </div>
        </div>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Bestellanfrage</DialogTitle>
          <DialogDescription>Anfrage für {grade}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div>
            <Label htmlFor="name" className="my-2">
              Ihr Name
            </Label>
            <Input
              id="name"
              type="text"
              {...register("Name", {required: true})}
            />
            {errors.Name && (
              <p className="text-red-500 text-sm mt-1">
                Bitte geben Sie Ihren Namen ein.
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="email" className="my-2">
              Ihre E-Mail
            </Label>
            <Input
              id="email"
              type="email"
              {...register("Email", {required: true})}
            />
            {errors.Email && (
              <p className="text-red-500 text-sm mt-1">
                Bitte geben Sie Ihre E-Mail ein.
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="quantity" className="my-2">
              Menge
            </Label>
            <Input
              id="quantity"
              type="number"
              min={1}
              {...register("Menge", {required: true, min: 1})}
            />
            {errors.Menge && (
              <p className="text-red-500 text-sm mt-1">
                Bitte geben Sie eine gültige Menge ein.
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="message" className="my-2">
              Nachricht (optional)
            </Label>
            <Textarea id="message" {...register("Nachricht")} rows={3} />
          </div>

          <DialogFooter>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Wird gesendet..." : "Absenden"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
