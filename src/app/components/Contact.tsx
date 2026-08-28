import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { Card } from "./ui/card";
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
          <h2 className="text-4xl mb-4 font-bold tracking-tight text-gray-900 dark:text-white">
            Get In{" "}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you!
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-6">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;

            return (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.03, y: -3 }}
              >
                <Card className="p-6 bg-card border-white/[0.08] hover:shadow-2xl hover:shadow-cyan-500/15 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-tr from-sky-500 to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/30">
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <div>
                      <h4 className="mb-1 text-gray-900 dark:text-white">
                        {info.title}
                      </h4>

                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-gray-600 dark:text-gray-300 hover:text-cyan-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-300">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}