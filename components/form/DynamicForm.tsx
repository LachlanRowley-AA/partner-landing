"use client";

import { useState, useRef } from 'react';
import {
  TextInput,
  Textarea,
  Button,
  Stack,
  Title,
  Paper,
  Group,
  Box,
  Center,
  Flex,
  ActionIcon,
  rem,
} from '@mantine/core';
import { AnimatePresence, motion } from 'motion/react';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

const MotionBox = motion.div;

type FormStep = {
  name: string;
  label: string;
  type?: 'text' | 'textarea';
  section?: string;
};

const formSteps: FormStep[] = [
  { section: 'Personal Info', name: 'fullName', label: 'What is your full name?' },
  { name: 'email', label: 'What is your email address?' },
  { section: 'Business Info', name: 'businessName', label: 'What is your business name?' },
  { name: 'businessType', label: 'What type of business is it?' },
  { name: 'message', label: 'Tell us more about what you\'re looking for', type: 'textarea' },
];

export default function ContactForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [inputValue, setInputValue] = useState('');
  const [direction, setDirection] = useState(1);
  const [prevStep, setPrevStep] = useState(0);

  const step = formSteps[currentStep];
  const isLastStep = currentStep === formSteps.length;

  // Determine direction based on step change
  const actualDirection = currentStep > prevStep ? 1 : -1;

  const endPoint = useRef(0);

  const handleNext = () => {
    if (!inputValue.trim()) return;
    setFormData((prev) => ({ ...prev, [step.name]: inputValue.trim() }));
    setInputValue('');
    endPoint.current = -100;
    setPrevStep(currentStep);
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      endPoint.current = 100;
      setPrevStep(currentStep);
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleForward = () => {
    if (!isLastStep) {
      setPrevStep(currentStep);
      setCurrentStep((prev) => prev + 1);
    }
  };

  const animationProps = {
    initial: { x: actualDirection === 1 ? 100 : -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 },
    style: { position: 'absolute', width: '100%' },
  };
  

  return (
    <Paper p="lg" shadow="md" radius="md" withBorder maw={500} mx="auto" mih={rem(250)}>
        <Flex justify="space-between">
            <ActionIcon
              variant="default"
              onClick={handleBack}
              disabled={currentStep === 0}
            >
                <IconArrowLeft/>
            </ActionIcon>
            <ActionIcon
              variant="default"
              onClick={handleForward}
              disabled={isLastStep}
            >
                <IconArrowRight/>
            </ActionIcon>
        </Flex>

      <Group justify="space-between" align="center" mb="sm">

        <Title order={4}>Contact Form</Title>
        <Group gap={6}>
          {formSteps.map((_, index) => (
            <Box
              key={index}
              w={rem(10)}
              h={rem(10)}
              bg={index === currentStep ? 'blue.6' : 'gray.3'}
              style={{ borderRadius: '50%' }}
            />
          ))}
        </Group>
      </Group>

      <Box
        h={rem(220)}
        pos="relative"
        style={{ overflow: 'hidden' }}
      >
        <AnimatePresence mode="wait">
          <MotionBox key={currentStep} {...animationProps as any}>
            {isLastStep ? (
              <Center h="100%">
                <Stack align="center">
                  <Title order={3}>Thank you!</Title>
                  <div>Your message has been submitted.</div>
                  <pre style={{ fontSize: '0.75rem' }}>{JSON.stringify(formData, null, 2)}</pre>
                </Stack>
              </Center>
            ) : (
              <Stack>
                {step.section && <Title order={5}>{step.section}</Title>}

                {step.type === 'textarea' ? (
                  <Textarea
                    label={step.label}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.currentTarget.value)}
                    autosize
                    minRows={3}
                  />
                ) : (
                  <TextInput
                    label={step.label}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.currentTarget.value)}
                  />
                )}

                <Button onClick={handleNext} mt="sm">
                  {currentStep === formSteps.length - 1 ? 'Submit' : 'Next'}
                </Button>
              </Stack>
            )}
          </MotionBox>
        </AnimatePresence>
      </Box>
    </Paper>
  );
}