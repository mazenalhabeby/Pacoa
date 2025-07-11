import {useState} from "react"
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

const Products = () => {
  const [selected, setSelected] = useState<null | {
    grade: string
    price: number
  }>(null)
  const [form, setForm] = useState({
    email: "",
    quantity: 1,
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(
      `Requested: ${selected?.grade} x ${form.quantity} for €${selected?.price}\nEmail: ${form.email}\nMessage: ${form.message}`
    )
    // You can connect EmailJS/FormSubmit backend here
  }

  return (
    <>
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-12 bg-white">
        {palletQualities.map(({grade, image, description, price}) => (
          <Dialog key={grade}>
            <DialogTrigger asChild>
              <div
                onClick={() => setSelected({grade, price})}
                className="bg-gray-50 shadow-md rounded-lg p-6 text-center cursor-pointer hover:shadow-lg transition"
              >
                <img
                  src={image}
                  alt={`Pallet Grade ${grade}`}
                  className="w-full h-40 object-contain mb-4"
                />
                <h3 className="text-2xl font-bold text-[#b85b16]">
                  Grade {grade}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">{description}</p>
                <p className="mt-4 text-xl font-semibold text-[#b85b16] text-end">
                  €{price.toFixed(2)}
                </p>
              </div>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Bestellanfrage</DialogTitle>
                <DialogDescription>
                  Anfrage für Grade {grade} — €{price.toFixed(2)}
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div>
                  <Label htmlFor="email" className="my-4">
                    Ihre E-Mail
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="quantity" className="my-4">
                    Menge
                  </Label>
                  <Input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min={1}
                    value={form.quantity}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="my-4">
                    Nachricht (optional)
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <DialogFooter>
                  <Button type="submit">Absenden</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        ))}
      </section>
    </>
  )
}

export default Products
