"use client";

import ReusableSmallForm from "@/components/ReusableSmallForm/ReusableSmallForm";
import { createCharacteristic } from "@/lib/actions";
import { Characteristics } from "@/types/characteristics";
import handleBackendError from "@/utils/validators/validatorBackendErrors";
import handleFrontendError from "@/utils/validators/validatorFrontendErrors";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

export default function Home() {
  const router = useRouter();
  const { data: session } = useSession();
  const [form, setForm] = useState<Characteristics>({
    name: "",
    image: undefined,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isPending, setIsPending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!handleFrontendError({ form, setErrors })) {
      toast.error("Por favor, corrige los errores en el formulario.");
      return;
    }
    setIsPending(true);

    if (!session) {
      toast.error("No se encontró la sesión.");
      setIsPending(false);
      return;
    }

    // @ts-expect-error: session object contains accessToken, but TypeScript doesn't recognize it
    const token = session?.user?.accessToken;

    const characteristic = JSON.stringify({
      ...form,
      image: undefined,
    });

    const formData = new FormData();
    formData.append(
      "characteristic",
      new Blob([characteristic], { type: "application/json" })
    ); // Agregar el JSON en el campo "category"

    if (form.image instanceof File) {
      formData.append("image", form.image);
    } // Agregar el archivo en el campo "image"

    try {
      const response = await createCharacteristic(token, formData);
      if ("debugMessage" in response) {
        handleBackendError(response, "characteristic");

        toast.error(response.message);
        setIsPending(false);
      } else {
        toast.success("Característica creada exitosamente");

        setTimeout(() => {
          setIsPending(false);
          router.push("/admin/characteristics");
        }, 1000);
      }
    } catch (error) {
      console.error("Error al crear la característica:", error);

      toast.error("Error al crear la característica. Intenta nuevamente.");
      setIsPending(false);
    }
  };

  return (
    <>
      <div className="ml-96 flex justify-center">
        <Toaster position="top-center" />
        <ReusableSmallForm
          entityType="característica"
          form={form}
          setForm={setForm}
          handleChange={handleChange}
          errors={errors}
          onSubmit={handleSubmit}
          isPending={isPending}
          isEditing={false}
        />
      </div>
    </>
  );
}
