import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import CustomCard from "@/widgets/cards/CustomCard";
import ContactUsForm from "@/components/ContactUs";

export function Home() {
  const cardData = [
    {
      imageSrc: "/img/cookingMaid.jpg",
      title: "Cooks",
      rating: 4,
    },
    {
      imageSrc: "/img/cleaningMaid.jpg",
      title: "Clean",
      rating: 5,
    },
    {
      imageSrc: "/img/allrounderMaid.png",
      title: "All rounders",
      rating: 4.5,
    },
    {
      imageSrc: "/img/babysitMaid.jpg",
      title: "Babysitter / Japa",
      rating: 4.5,
    },

    // Add more data as needed
  ];
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/bgHome.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h2"
                color="white"
                className="mb-6 font-black"
              >
                "Elite Home Maid: Your All-in-One Service Solution"
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                "Experience the epitome of home care with Elite Home Maid. From
                meticulous cleaning to personalized services, we cater to every
                aspect of your home, ensuring a haven of comfort and
                cleanliness."
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4 bg-[url('/img/bgsection.jpg')] bg-cover bg-center">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 hover:cursor-pointer">
            {featuresData.map(({ image, title, description }) => (
              <FeatureCard
                key={title}
                image={image}
                title={title}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32">
            <div className="mx-auto w-full px-4 md:w-5/12 text-center">
              <Typography variant="h6" className="mb-3 font-bold" color="blue">
                Our Featured Service
              </Typography>
              <Typography variant="h2" className="mt-4 mb-8 font-bold">
                Hire Professionals, Experienced Specifically for Your Needs
              </Typography>
            </div>
            <div className="mx-auto mt-24 flex flex-wrap justify-center gap-20">
              {cardData.map((card, index) => (
                <CustomCard key={index} {...card} />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle section="Our Team" heading="Here are our heroes">
            According to the National Oceanic and Atmospheric Administration,
            Ted, Scambos, NSIDClead scentist, puts the potentially record
            maximum.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-xl fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section> */}
      <section className="-mt-2 relative bg-white py-24 px-4 bg-[url('/img/bgcontact.jpg')] bg-cover bg-center">
        <div className="container mx-auto">
          <PageTitle section="Contact Us" heading="Want some help?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <ContactUsForm />
        </div>
      </section>
      <div className="bg-gray-300">
        <Footer />
      </div>
    </>
  );
}

export default Home;
