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
    <section id="contact" className="py-20 bg-gradient-to-b from-indigo-50/70 to-violet-50/50 dark:from-[#1a1a3d] dark:to-[#12122a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4 font-bold tracking-tight text-gray-900 dark:text-white">
            Get In{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-fuchsia-500 bg-clip-text text-transparent dark:from-indigo-400 dark:to-fuchsia-400">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="p-6 dark:bg-[#1b1b36] dark:border-white/10 border-indigo-100/80 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-tr from-indigo-600 to-violet-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md shadow-indigo-500/25">
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <div>
                      <h4 className="mb-1 text-gray-900 dark:text-white">
                        {info.title}
                      </h4>

                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
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