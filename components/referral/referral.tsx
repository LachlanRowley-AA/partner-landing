"use client";
import { Container, Title, Text, SimpleGrid, Paper } from '@mantine/core';
import { motion } from 'motion/react';
import { IconDeviceDesktop, IconClock, IconReceipt2, IconSend, IconArrowRight } from '@tabler/icons-react';

const steps = [
  {
    title: "We build your landing page",
    description:
      "Get a beautiful, free landing page — fully co-branded or white-labeled to match your business.",
    icon: IconDeviceDesktop,
    number: "01"
  },
  {
    title: "Quick Customer Application",
    description:
      "Customers can log applications in under a minute.",
    icon: IconClock,
    number: "02"
  },
  {
    title: "Seamless integration with proposals & invoices",
    description:
      "Place our link on your proposals and tax invoices so if your customers want, they can calculate estimated repayments, see benefits, and enquire with our team.",
    icon: IconReceipt2,
    number: "03"
  },
  {
    title: "Refer however you want",
    description:
      "Referrals can be sent via email, SMS, or even a quick phone call — whatever works best for you and your clients.",
    icon: IconSend,
    number: "04"
  },
];

function ReferralProcessSection() {
  return (
    <section className="py-10 relative overflow-hidden" style={{ backgroundColor: '#F6F6F6' }}>
      <Container size="lg" className="relative z-10">
        {/* Enhanced Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-2 leading-tight" style={{ background: 'linear-gradient(0deg, #01E194 0%, #01E194 100%, #000000 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Seamless Integration
          </h2>

          <Text 
            size="xl" 
            className="max-w-2xl mx-auto leading-relaxed"
            style={{ color: '#000000', opacity: 0.7 }}
          >
            Tailored to your business — never one-size-fits-all.
          </Text>
        </motion.div>

        {/* Process Steps Grid */}
        <SimpleGrid
          cols={{ base: 1, md: 2 }}
          spacing="xl"
          verticalSpacing="xl"
          className="mt-10"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Paper 
                  shadow="lg" 
                  radius="2xl" 
                  p="xl" 
                  className="relative group cursor-pointer overflow-hidden h-full"
                  style={{ 
                    backgroundColor: '#FFFFFF',
                    border: '2px solid #EBEBEB'
                  }}
                >
                  {/* Animated background gradient on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{ 
                      background: `linear-gradient(135deg, #01E194 0%, rgba(1, 225, 148, 0.3) 100%)`
                    }}
                  />
                  
                  {/* Brand accent line */}
                  <div 
                    className="absolute left-0 top-0 bottom-0 w-2 rounded-l-2xl transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"
                    style={{ backgroundColor: '#01E194' }}
                  />
                  
                  <div className="flex items-start gap-6 relative z-10 color:#01E194">
                    {/* Enhanced Icon Container */}
                    <motion.div 
                      className="flex-shrink-0 p-2 rounded-2xl shadow-lg relative overflow-hidden"
                      style={{ backgroundColor: '#ebebeb', color:'#01E194' }}
                      whileHover={{ rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }
                    }
                    >
                    <Icon size={32} color="#01E194" className="relative z-10" strokeWidth='1.5px' />
                    </motion.div>
                    
                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <Text 
                        fw={700} 
                        size="xl" 
                        mb={8}
                        className="group-hover:translate-x-1 transition-transform duration-300"
                        style={{ color: '#000000' }}
                      >
                        {step.title}
                      </Text>
                      <Text 
                        size="md"
                        className="leading-relaxed"
                        style={{ color: '#000000', opacity: 0.8 }}
                      >
                        {step.description}
                      </Text>
                    </div>
                  </div>
                </Paper>
              </motion.div>
            );
          })}
        </SimpleGrid>
      </Container>

      <style jsx>{`
        .group {
          position: relative;
        }
      `}</style>
    </section>
  );
}

export { ReferralProcessSection };