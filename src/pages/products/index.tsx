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
  image,
  description,
  price,
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
        "https://formsubmit.co/ajax/amd07dev@gmail.com",
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
          className="bg-gray-50 shadow-md rounded-lg p-6 text-center cursor-pointer hover:shadow-lg transition flex flex-col"
        >
          <img
            src={image}
            alt={`Pallet Grade ${grade}`}
            className="w-full h-40 object-contain mb-4"
          />
          <h3 className="text-2xl font-bold text-[#b85b16]">{grade}</h3>
          <p className="text-gray-600 mt-2 text-sm flex-1">{description}</p>
          <p className="mt-4 text-xl font-semibold text-[#b85b16] text-end">
            €{price.toFixed(2)}
          </p>
        </div>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Bestellanfrage</DialogTitle>
          <DialogDescription>
            Anfrage für {grade} — €{price.toFixed(2)}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div>
            <Label htmlFor="name">Ihr Name</Label>
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
            <Label htmlFor="email">Ihre E-Mail</Label>
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
            <Label htmlFor="quantity">Menge</Label>
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
            <Label htmlFor="message">Nachricht (optional)</Label>
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
