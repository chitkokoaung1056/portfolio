import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { profileData } from "../data/profile";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: profileData.email,
      href: `mailto:${profileData.email}`,
    },
    {
      icon: Phone,
      title: "Phone",
      value: profileData.phone,
      href: `tel:${profileData.phone.replace(/\s/g, "")}`,
    },
    {
      icon: MapPin,
      title: "Location",
      value: profileData.location,
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4 font-bold tracking-tight text-white">
            Get In{" "}
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you!
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-4">
          {contactInfo.map((info) => {
            const Icon = info.icon;

            return (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="will-change-transform"
              >
                <div className="relative rounded-2xl overflow-hidden group">
                  <div className="absolute inset-0 rounded-2xl" style={{ backgroundColor: "rgba(255,255,255,0.04)" }} />
                  <div className="absolute inset-0 rounded-2xl backdrop-blur-[16px] backdrop-saturate-150" />
                  <div className="absolute inset-0 rounded-2xl border" style={{ borderColor: "rgba(255,255,255,0.09)" }} />
                  
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3b82f6]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#3b82f6]/5 via-transparent to-[#60a5fa]/5" />

                  <div className="relative p-6">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#3b82f6] to-[#60a5fa] rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                        <div className="relative w-12 h-12 bg-gradient-to-tr from-[#3b82f6] to-[#60a5fa] rounded-xl flex items-center justify-center">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                      </div>

                      <div className="flex-1">
                        <h4 className="text-sm text-gray-400 mb-0.5">
                          {info.title}
                        </h4>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-white hover:text-[#60a5fa] transition-colors font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white font-medium">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}