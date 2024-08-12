import ContactUsForm from "../components/Layouts/ContactUsForm";
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";


const Contact = () => {
  
  return (
    <>
      <Header />
      <h3 className="text-center mt-4">Contact Us Form</h3>
      <ContactUsForm />
      <Footer />
    </>
  );
};

export default Contact;
