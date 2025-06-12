'use client';

import { Marquee } from '../Marquee/Marquee';
import { Container, ContainerProps, GridProps, Group, Text, TextProps } from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandMantine,
  IconBrandMedium,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandVercelFilled,
} from '@tabler/icons-react';
import { ReactNode } from 'react';
import { JumboTitle } from '../jumbo-title/jumbo-title'
import NextImage from 'next/image'

import dsigns from '../../public/dsigns-logo.webp';
import creades from '../../public/creades-logo.webp';
import endspace from '../../public/endspace.png';
import dijgtal from '../../public/Dijgtal.svg';
import brandlab from '../../public/BRANDLAB-LOGO-white.png';
import chase from '../../public/Chase-e-Design-Logo-flat.png';

const ITEMS = [
  <Group key="branding" wrap="nowrap">
    <NextImage src='the-branding-lab-logo.svg' height={100} width={300} alt='the-branding-lab' />
  </Group>,
    <Group key="dijgtal" wrap="nowrap">
    <NextImage src={dijgtal} height={100} width={300} alt='dijgtal' />
  </Group>,
  <Group key="born" wrap="nowrap">
    <NextImage src='born-creators.svg' height={80} width={150} alt='born' />
    </Group>,
  <Group key="dsigns" wrap="nowrap">
    <NextImage src={dsigns} height={50} width={150} alt='dsigns' />
  </Group>,
  <Group key="brandlab" wrap="nowrap">
  <NextImage src={brandlab} height={40} width={200} alt='brand lab' />
</Group>,
<Group key="creades" wrap="nowrap">
    <NextImage src={creades} height={50} width={150} alt='creades' />
    </Group>,
  <Group key="endspace" wrap="nowrap">
    <NextImage src={endspace} height={40} width={150} alt='endspace' />
  </Group>,
    <Group key="chase" wrap="nowrap">
    <NextImage src={chase} height={40} width={150} alt='chase' />
  </Group>,

];

export type Logos03Props = ContainerProps & {
  items?: ReactNode[];
  gridProps?: GridProps;
  title?: string;
  titleProps?: TextProps;
};

export const Logos03 = ({
  title = 'We\'ve Already Partnered With',
  items = ITEMS,
  gridProps,
  titleProps,
  ...containerProps
}: Logos03Props) => (
  <Container
    py={{
      base: 'calc(var(--mantine-spacing-lg) * 1)',
      xs: 'calc(var(--mantine-spacing-lg) * 1)',
      lg: 'calc(var(--mantine-spacing-lg) * 1)',
    }}
    fluid
    {...containerProps}
  >

    <JumboTitle order={2} fz="xs" ta="center" style={{ textWrap: 'balance' }} mb="sm" c='var(--mantine-color-white)'>
    Trusted By
    </JumboTitle>
    <Marquee items={items} gap="calc(var(--mantine-spacing-lg) * 2)" duration={15} />
  </Container>
);