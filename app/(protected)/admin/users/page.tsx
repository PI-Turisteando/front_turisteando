"use client";
import { useSession } from "next-auth/react"; // Importar useSession para obtener el token
import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";

import { useRouter } from "next/navigation";
import UserTable from "@/components/UserTable/UserTable";
import Link from "next/link";
import { User } from "@/types/user";
import { deleteUser, getUsers } from "@/lib/user/userActions";

export default function Home() {
  const [user, setUser] = useState<User[]>([]);
  const { data: session } = useSession(); // Obtener la sesión y el token
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  console.log(user);

  const confirmDelete = async () => {
    return new Promise<boolean>((resolve) => {
      toast(
        (t) => (
          <div>
            <p>¿Estás seguro de que deseas eliminar este usuario?</p>
            <div className="flex justify-end gap-2 mt-2">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => {
                  toast.dismiss(t.id);
                  resolve(true);
                }}
              >
                Sí, eliminar
              </button>
              <button
                className="bg-gray-300 text-black px-4 py-2 rounded"
                onClick={() => {
                  toast.dismiss(t.id);
                  resolve(false);
                }}
              >
                Cancelar
              </button>
            </div>
          </div>
        ),
        { duration: Infinity } // Evita que el toast desaparezca automáticamente
      );
    });
  };

  // Fetch Users when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      if (session) {
        //@ts-ignore
        const token: string = session?.accessToken;
        try {
          const response = await getUsers(token);
          setUser(response);
          setLoading(false);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchUsers();
  }, [session]);

  // Método para redirigir al formulario de edición
  const handleEdit = (id: string) => {
    router.push(`/admin/edituser/${id}`);
  };

  // Método para eliminar una caracteristica
  const handleDelete = async (id: string) => {
    const confirmed = await confirmDelete();
    if (!confirmed || !session) return;

    /* @ts-expect-error: session object contains accessToken, but TypeScript doesn't recognize it */
    const token = session?.accessToken;
    try {
      const response = await deleteUser(token, id);
      if (response) {
         toast.success("El usuario se ha borrado con éxito");
         setUser(user.filter(element=>element.id!==id));
         setLoading(false);
      }
    } catch (error) {
      console.error("Error eliminando usuario:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="ml-60">
      <div className="flex justify-between items-center mt-5 mb-14">
        <span className="text-4xl font-bold flex items-center">
          <svg
            className="fill-current"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.10322 0.956299H2.53135C1.5751 0.956299 0.787598 1.7438 0.787598 2.70005V6.27192C0.787598 7.22817 1.5751 8.01567 2.53135 8.01567H6.10322C7.05947 8.01567 7.84697 7.22817 7.84697 6.27192V2.72817C7.8751 1.7438 7.0876 0.956299 6.10322 0.956299ZM6.60947 6.30005C6.60947 6.5813 6.38447 6.8063 6.10322 6.8063H2.53135C2.2501 6.8063 2.0251 6.5813 2.0251 6.30005V2.72817C2.0251 2.44692 2.2501 2.22192 2.53135 2.22192H6.10322C6.38447 2.22192 6.60947 2.44692 6.60947 2.72817V6.30005Z"
              fill=""
            />
            <path
              d="M15.4689 0.956299H11.8971C10.9408 0.956299 10.1533 1.7438 10.1533 2.70005V6.27192C10.1533 7.22817 10.9408 8.01567 11.8971 8.01567H15.4689C16.4252 8.01567 17.2127 7.22817 17.2127 6.27192V2.72817C17.2127 1.7438 16.4252 0.956299 15.4689 0.956299ZM15.9752 6.30005C15.9752 6.5813 15.7502 6.8063 15.4689 6.8063H11.8971C11.6158 6.8063 11.3908 6.5813 11.3908 6.30005V2.72817C11.3908 2.44692 11.6158 2.22192 11.8971 2.22192H15.4689C15.7502 2.22192 15.9752 2.44692 15.9752 2.72817V6.30005Z"
              fill=""
            />
            <path
              d="M6.10322 9.92822H2.53135C1.5751 9.92822 0.787598 10.7157 0.787598 11.672V15.2438C0.787598 16.2001 1.5751 16.9876 2.53135 16.9876H6.10322C7.05947 16.9876 7.84697 16.2001 7.84697 15.2438V11.7001C7.8751 10.7157 7.0876 9.92822 6.10322 9.92822ZM6.60947 15.272C6.60947 15.5532 6.38447 15.7782 6.10322 15.7782H2.53135C2.2501 15.7782 2.0251 15.5532 2.0251 15.272V11.7001C2.0251 11.4188 2.2501 11.1938 2.53135 11.1938H6.10322C6.38447 11.1938 6.60947 11.4188 6.60947 11.7001V15.272Z"
              fill=""
            />
            <path
              d="M15.4689 9.92822H11.8971C10.9408 9.92822 10.1533 10.7157 10.1533 11.672V15.2438C10.1533 16.2001 10.9408 16.9876 11.8971 16.9876H15.4689C16.4252 16.9876 17.2127 16.2001 17.2127 15.2438V11.7001C17.2127 10.7157 16.4252 9.92822 15.4689 9.92822ZM15.9752 15.272C15.9752 15.5532 15.7502 15.7782 15.4689 15.7782H11.8971C11.6158 15.7782 11.3908 15.5532 11.3908 15.272V11.7001C11.3908 11.4188 11.6158 11.1938 11.8971 11.1938H15.4689C15.7502 11.1938 15.9752 11.4188 15.9752 11.7001V15.272Z"
              fill=""
            />
          </svg>
          <h1 className="pl-2">Usuarios</h1>
        </span>
        <Link href={"/admin/adduser"}>
          <button className="bg-primary hover:bg-primary hover:opacity-80 text-white px-10 py-2 rounded-full font-medium">
            Agregar Nuevo
          </button>
        </Link>
      </div>
      <div className="flex justify-center">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <UserTable users={user} onEdit={handleEdit} onDelete={handleDelete} />
        )}
      </div>
    </div>
  );
}