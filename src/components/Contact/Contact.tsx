import { useIntersectionObserver } from "./useIntersectionObserver";
import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";
import { contactFormSchema, type ContactFormValues } from "./contact-schema";

const Contact = () => {
  const sectionRef = useIntersectionObserver();

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const response = await fetch("https://rmcdesignstudio.co/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          service: data.service || "No especificado",
          message: data.message
        })
      });

      const result = await response.json();

      if (result.success) {
        alert("Message sent successfully!");
      } else {
        alert("There was an error sending the message. Please try again later.");
      }
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
      alert("Hubo un error al enviar el mensaje. Intenta más tarde.");
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-secondary/50 opacity-0 transition-opacity duration-1000"
    >
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Contact Us</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ContactInfo />
          <ContactForm onSubmit={onSubmit} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
