import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
const images = [
    "https://www.aaronreedphotography.com/images/xl/Sweet-Dreams-2022.jpg",
    "https://th-thumbnailer.cdn-si-edu.com/8ciAzzKoUyvv-4kt1rLa3mLgwU0=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/04/8e/048ed839-a581-48af-a0ae-fac6fec00948/gettyimages-168346757_web.jpg",
    "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
    "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=4000&hei=2200&scl=0.752",
    "https://depositphotos-blog.s3.eu-west-1.amazonaws.com/uploads/2017/07/Soothing-nature-backgrounds-2.webp",
    "https://windows10spotlight.com/wp-content/uploads/2023/09/cf1548e0a43cf73063107df3634e1205.jpg"
  ]; // Replace with your image paths
export default function CarouselDemo() {
  return (
    <div className="relative w-screen h-screen">
    {/* Carousel */}
    <Carousel className="w-screen h-screen">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="w-screen h-screen">
            <img
              src={image}
              alt={`Carousel Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Arrow Buttons */}
      <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full">
        &lt; {/* Replace with an icon if desired */}
      </CarouselPrevious>
      <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full">
        &gt; {/* Replace with an icon if desired */}
      </CarouselNext>
    </Carousel>
  </div>
  )
}