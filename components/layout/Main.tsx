import Image from "next/image";
import Card from "../Card";
import FavouriteCard from "../FavouriteCard";
import Testimonial from "../Testimonial";
import Link from "next/link";
import { MdOutlineSearch } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { CgSearch } from "react-icons/cg";
import { Tabs } from "../Tabs";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export const Main = () => {
  return (
    <>
      <section className="relative h-screen items-center justify-center text-center text-white bg-black bg-opacity-50 hidden md:flex">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/MACHU_PICCHU.png" 
            alt="Background Image"
            fill={true}
            priority={true}
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="brightness-75"
          />
        </div>

        {/* Contenido central */}
        <div className="space-y-6 max-w-xl px-4">
          <h1 className="font-bold md:text-5xl">
            Descubre los mejores lugares para visitar en tus vacaciones 😍
          </h1>

          {/* Buscador */}
          <div className="flex items-center gap-2 bg-white rounded-full shadow-lg p-2">
            <input
              type="text"
              placeholder="Comienza tu búsqueda aquí..."
              className="ml-4 flex-grow p-2 text-gray-700 outline-none"
            />
            <MdOutlineSearch
              className="mr-6"
              size={24}
              color="oklch(var(--p))"
            />
          </div>
        </div>
      </section>

      {/* Responsive mobile section  */}
      <section className="flex items-center justify-center text-white md:hidden mt-18 w-full max-w-3xl">
        {/* Contenido central */}
        <div className="px-6 w-full">
          {/* Buscador */}
          <div className="flex justify-center items-center gap-2 bg-white rounded-full shadow-lg p-2 py-3 w-full min-w-72 my-6 ">
            <CgSearch className="ml-2" size={22} color="oklch(var(--p))" />

            <input
              type="text"
              placeholder="Comienza tu búsqueda aquí..."
              className="mr-2 flex-grow p-2 text-gray-700 outline-none"
            />
          </div>
        </div>
      </section>

      {/* Responsive mobile section  */}
      <section className="px-8 py-12 md:hidden mt-18 w-full max-w-3xl">
        {/* Encabezado */}
        {/* Títulos a la izquierda */}
        <h2 className="text-3xl font-bold  mb-6">Descubre Lugares</h2>

        <Tabs />
      </section>

      {/* Desktop section  */}
      <section className="px-8 py-12 hidden md:block max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="flex items-center justify-between mb-4">
          {/* Títulos a la izquierda */}
          <div className="">
            <h2 className="text-3xl font-bold text-primary">
              Descubre nuestros Tours
            </h2>
            <p className="text-lg text-gray-500">
              Encuentra tus próximas{" "}
              <span className="text-primary font-semibold">aventuras</span>
            </p>
          </div>

          {/* Link a la derecha */}
          <Link
            href="/tours"
            className="text-primary flex justify-center items-center gap-2 btn btn-ghost rounded-full hover:bg-primary hover:text-white "
          >
            Ver todos <FaArrowRight size={22} />
          </Link>
        </div>

        {/*Cards Swiper Component*/}
        <Swiper
          
          slidesPerView={3}
          spaceBetween={12}
          freeMode={true}
          pagination={{
            clickable: true,
            dynamicBullets: true
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Card
              mobileTitle="Canon Colca"
              isMobile={false}
              imageSrc="/CAÑON_DEL_COLCA.jpg"
              title="Tour en el Cañón del Colca"
              isPrimary={true}
              description="Un tour de dos días al Cañón del Colca, uno de los cañones más profundos del mundo. Además de disfrutar de paisajes espectaculares, puedes avistar el majestuoso cóndor andino. El tour suele partir desde Arequipa."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              mobileTitle="Paracas"
              isMobile={false}
              imageSrc="/RESERVA_NACIONAL_PARACAS.png"
              title="Reserva Nacional de Paracas"
              isPrimary={true}
              description="Explora la hermosa Reserva Nacional de Paracas, ubicada en la costa del Pacífico. Este tour te permite disfrutar de impresionantes paisajes desérticos, playas aisladas y una rica fauna marina. Puedes avistar flamencos, lobos marinos y aves guaneras."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              mobileTitle="Valle Sagrado"
              isMobile={false}
              imageSrc="/SACRED_VALLEY.png"
              title="Valle Sagrado"
              isPrimary={false}
              description="Un tour de un día completo para explorar el Valle Sagrado de los Incas, que incluye visitas a Pisac, Ollantaytambo y los vibrantes mercados de Chinchero. Conocerás la cultura inca, verás pueblos tradicionales y disfrutarás de paisajes impresionantes."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              mobileTitle="Paracas"
              isMobile={false}
              imageSrc="/RESERVA_NACIONAL_PARACAS.png"
              title="Reserva Nacional de Paracas"
              isPrimary={true}
              description="Explora la hermosa Reserva Nacional de Paracas, ubicada en la costa del Pacífico. Este tour te permite disfrutar de impresionantes paisajes desérticos, playas aisladas y una rica fauna marina. Puedes avistar flamencos, lobos marinos y aves guaneras. Además, visitarás la famosa Catedral de Paracas, una formación rocosa icónica, y disfrutarás de las vistas del Océano Pacífico desde diversos miradores."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              mobileTitle="Valle Sagrado"
              isMobile={false}
              imageSrc="/SACRED_VALLEY.png"
              title="Valle Sagrado"
              isPrimary={false}
              description="Un tour de un día completo para explorar el Valle Sagrado de los Incas, que incluye visitas a Pisac, Ollantaytambo y los vibrantes mercados de Chinchero. Conocerás la cultura inca, verás pueblos tradicionales y disfrutarás de paisajes impresionantes."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              mobileTitle="Paracas"
              isMobile={false}
              imageSrc="/RESERVA_NACIONAL_PARACAS.png"
              title="Reserva Nacional de Paracas"
              isPrimary={true}
              description="Explora la hermosa Reserva Nacional de Paracas, ubicada en la costa del Pacífico. Este tour te permite disfrutar de impresionantes paisajes desérticos, playas aisladas y una rica fauna marina. Puedes avistar flamencos, lobos marinos y aves guaneras. Además, visitarás la famosa Catedral de Paracas, una formación rocosa icónica, y disfrutarás de las vistas del Océano Pacífico desde diversos miradores."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              mobileTitle="Valle Sagrado"
              isMobile={false}
              imageSrc="/SACRED_VALLEY.png"
              title="Valle Sagrado"
              isPrimary={false}
              description="Un tour de un día completo para explorar el Valle Sagrado de los Incas, que incluye visitas a Pisac, Ollantaytambo y los vibrantes mercados de Chinchero. Conocerás la cultura inca, verás pueblos tradicionales y disfrutarás de paisajes impresionantes."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              mobileTitle="Paracas"
              isMobile={false}
              imageSrc="/RESERVA_NACIONAL_PARACAS.png"
              title="Reserva Nacional de Paracas"
              isPrimary={true}
              description="Explora la hermosa Reserva Nacional de Paracas, ubicada en la costa del Pacífico. Este tour te permite disfrutar de impresionantes paisajes desérticos, playas aisladas y una rica fauna marina. Puedes avistar flamencos, lobos marinos y aves guaneras. Además, visitarás la famosa Catedral de Paracas, una formación rocosa icónica, y disfrutarás de las vistas del Océano Pacífico desde diversos miradores."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              mobileTitle="Valle Sagrado"
              isMobile={false}
              imageSrc="/SACRED_VALLEY.png"
              title="Valle Sagrado"
              isPrimary={false}
              description="Un tour de un día completo para explorar el Valle Sagrado de los Incas, que incluye visitas a Pisac, Ollantaytambo y los vibrantes mercados de Chinchero. Conocerás la cultura inca, verás pueblos tradicionales y disfrutarás de paisajes impresionantes."
            />
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Responsive mobile section  */}
      <section className="px-8 py-12 md:hidden ">
        {/* Encabezado */}
        <div className="flex items-center justify-between ">
          {/* Títulos a la izquierda */}
          <h2 className="text-3xl font-bold">Favoritos</h2>
          {/* Link a la derecha */}
          <Link
            href="/tours"
            className="text-secondary text-lg font-semibold flex justify-center items-center gap-2 btn btn-ghost rounded-full hover:bg-secondary hover:text-white"
          >
            Ver todos
            <FaArrowRight />
          </Link>
        </div>
        <FavouriteCard
          imageSrc="/CAÑON_DEL_COLCA.jpg"
          title="Tour en el Cañón del Colca"
        />
      </section>

      {/* Desktop Section */}
      <section className="px-8 py-12 hidden md:block max-w-7xl mx-auto ">
        {/* Encabezado */}
        <div className="flex items-center justify-between mb-4">
          {/* Títulos a la izquierda */}
          <div>
            <h2 className="text-3xl font-bold text-secondary">
              Descubre nuestras actividades
            </h2>
            <p className="text-lg text-gray-500">
              Explora{" "}
              <span className="text-secondary font-semibold">
                experiencias increíbles
              </span>
            </p>
          </div>

          {/* Link a la derecha */}
          <Link
            href="/tours"
            className="text-secondary flex justify-center items-center gap-2 btn btn-ghost rounded-full hover:bg-secondary hover:text-white "
          >
            Ver todos <FaArrowRight size={24} />

          </Link>
        </div>

        {/*Cards Swiper Component*/}
        <Swiper
          slidesPerView={3}
          spaceBetween={12}
          freeMode={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Card
              mobileTitle="Canon Colca"
              isMobile={false}
              imageSrc="/CAÑON_DEL_COLCA.jpg"
              title="Tour en el Cañón del Colca"
              isPrimary={true}
              description="Un tour de dos días al Cañón del Colca, uno de los cañones más profundos del mundo. Además de disfrutar de paisajes espectaculares, puedes avistar el majestuoso cóndor andino. El tour suele partir desde Arequipa."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              mobileTitle="Paracas"
              isMobile={false}
              imageSrc="/RESERVA_NACIONAL_PARACAS.png"
              title="Reserva Nacional de Paracas"
              isPrimary={true}
              description="Explora la hermosa Reserva Nacional de Paracas, ubicada en la costa del Pacífico. Este tour te permite disfrutar de impresionantes paisajes desérticos, playas aisladas y una rica fauna marina. Puedes avistar flamencos, lobos marinos y aves guaneras."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              mobileTitle="Valle Sagrado"
              isMobile={false}
              imageSrc="/SACRED_VALLEY.png"
              title="Valle Sagrado"
              isPrimary={false}
              description="Un tour de un día completo para explorar el Valle Sagrado de los Incas, que incluye visitas a Pisac, Ollantaytambo y los vibrantes mercados de Chinchero. Conocerás la cultura inca, verás pueblos tradicionales y disfrutarás de paisajes impresionantes."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              mobileTitle="Paracas"
              isMobile={false}
              imageSrc="/RESERVA_NACIONAL_PARACAS.png"
              title="Reserva Nacional de Paracas"
              isPrimary={true}
              description="Explora la hermosa Reserva Nacional de Paracas, ubicada en la costa del Pacífico. Este tour te permite disfrutar de impresionantes paisajes desérticos, playas aisladas y una rica fauna marina. Puedes avistar flamencos, lobos marinos y aves guaneras. Además, visitarás la famosa Catedral de Paracas, una formación rocosa icónica, y disfrutarás de las vistas del Océano Pacífico desde diversos miradores."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              mobileTitle="Valle Sagrado"
              isMobile={false}
              imageSrc="/SACRED_VALLEY.png"
              title="Valle Sagrado"
              isPrimary={false}
              description="Un tour de un día completo para explorar el Valle Sagrado de los Incas, que incluye visitas a Pisac, Ollantaytambo y los vibrantes mercados de Chinchero. Conocerás la cultura inca, verás pueblos tradicionales y disfrutarás de paisajes impresionantes."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              mobileTitle="Paracas"
              isMobile={false}
              imageSrc="/RESERVA_NACIONAL_PARACAS.png"
              title="Reserva Nacional de Paracas"
              isPrimary={true}
              description="Explora la hermosa Reserva Nacional de Paracas, ubicada en la costa del Pacífico. Este tour te permite disfrutar de impresionantes paisajes desérticos, playas aisladas y una rica fauna marina. Puedes avistar flamencos, lobos marinos y aves guaneras. Además, visitarás la famosa Catedral de Paracas, una formación rocosa icónica, y disfrutarás de las vistas del Océano Pacífico desde diversos miradores."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              mobileTitle="Valle Sagrado"
              isMobile={false}
              imageSrc="/SACRED_VALLEY.png"
              title="Valle Sagrado"
              isPrimary={false}
              description="Un tour de un día completo para explorar el Valle Sagrado de los Incas, que incluye visitas a Pisac, Ollantaytambo y los vibrantes mercados de Chinchero. Conocerás la cultura inca, verás pueblos tradicionales y disfrutarás de paisajes impresionantes."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              mobileTitle="Paracas"
              isMobile={false}
              imageSrc="/RESERVA_NACIONAL_PARACAS.png"
              title="Reserva Nacional de Paracas"
              isPrimary={true}
              description="Explora la hermosa Reserva Nacional de Paracas, ubicada en la costa del Pacífico. Este tour te permite disfrutar de impresionantes paisajes desérticos, playas aisladas y una rica fauna marina. Puedes avistar flamencos, lobos marinos y aves guaneras. Además, visitarás la famosa Catedral de Paracas, una formación rocosa icónica, y disfrutarás de las vistas del Océano Pacífico desde diversos miradores."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              mobileTitle="Valle Sagrado"
              isMobile={false}
              imageSrc="/SACRED_VALLEY.png"
              title="Valle Sagrado"
              isPrimary={false}
              description="Un tour de un día completo para explorar el Valle Sagrado de los Incas, que incluye visitas a Pisac, Ollantaytambo y los vibrantes mercados de Chinchero. Conocerás la cultura inca, verás pueblos tradicionales y disfrutarás de paisajes impresionantes."
            />
          </SwiperSlide>
        </Swiper>
      </section>

      <button className="btn btn-primary text-white my-12 btn-wide mx-auto rounded-3xl hidden md:block">
        Explora mas Opciones
      </button>

      <section className="px-8 py-12 hidden md:block max-w-7xl mx-auto">
        {/* Encabezado */}
        {/* Títulos a la izquierda */}
        <div>
          <h2 className="text-3xl font-bold text-gray-500 text-center">
            Lo que los usuarios de{" "}
            <span className="text-primary font-semibold">Turisteando </span>
            están diciendo
          </h2>
        </div>

        {/*Testimonial Swiper Component*/}
        <Swiper
          slidesPerView={3}
          spaceBetween={12}
          freeMode={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
          <Testimonial
            userImage="/juanuser.jpg"
            userName="Juan Pérez"
            city="Bogotá"
            country="Colombia"
            date="mayo 2024"
            reviewText="Me encantó el servicio, realmente superó mis expectativas y lo recomendaría a cualquiera.Me encantó el servicio, realmente superó mis expectativas y lo recomendaría a cualquiera."
          />
          </SwiperSlide>
          <SwiperSlide>
          <Testimonial
            userImage="/sarauser.jpg"
            userName="Sara User"
            city="Bogotá"
            country="Colombia"
            date="mayo 2024"
            reviewText="Me encantó el servicio, realmente superó mis expectativas y lo recomendaría a cualquiera.Me encantó el servicio, realmente superó mis expectativas y lo recomendaría a cualquiera."
          />
          </SwiperSlide>
          <SwiperSlide>
          <Testimonial
            userImage="/anauser.jpg"
            userName="Ana Susana"
            city="Bogotá"
            country="Colombia"
            date="mayo 2024"
            reviewText="Me encantó el servicio, realmente superó mis expectativas y lo recomendaría a cualquiera.Me encantó el servicio, realmente superó mis expectativas y lo recomendaría a cualquiera."
          />
          </SwiperSlide>
          <SwiperSlide>
          <Testimonial
            userImage="/juanuser.jpg"
            userName="Juan Pérez"
            city="Bogotá"
            country="Colombia"
            date="mayo 2024"
            reviewText="Me encantó el servicio, realmente superó mis expectativas y lo recomendaría a cualquiera.Me encantó el servicio, realmente superó mis expectativas y lo recomendaría a cualquiera."
          />
          </SwiperSlide>
          <SwiperSlide>
          <Testimonial
            userImage="/anauser.jpg"
            userName="Ana Susana"
            city="Bogotá"
            country="Colombia"
            date="mayo 2024"
            reviewText="Me encantó el servicio, realmente superó mis expectativas y lo recomendaría a cualquiera.Me encantó el servicio, realmente superó mis expectativas y lo recomendaría a cualquiera."
          />
          </SwiperSlide>

        </Swiper>
      </section>
    </>
  );
};