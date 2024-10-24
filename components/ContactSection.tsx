import React from "react";
import CustomText from "./ui/CustomText";
import { ContactForm } from "./ContactForm";

const ContactSection = () => {
  return (
    <section className="flex flex-col md:flex-row  gap-5 justify-between w-full px-5 max-w-7xl mx-auto py-20  md:px-8 lg:px-10">
      <div className="flex flex-col gap-4">
        <CustomText text="Contact Me" />

        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Wanna work together.
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Fell free to send me an email at mahatsumit5@gmail.com
        </p>
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactSection;
