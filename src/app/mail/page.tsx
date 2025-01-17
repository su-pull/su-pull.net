import MailForm from '@/components/MailForm';
import generateSEOData from '@/lib/generateSEOData';
import { Metadata } from 'next';
import { JSX } from 'react';

export const metadata: Metadata = generateSEOData({
  title: 'Mail',
  subtitle: 'mail form',
  date: undefined,
});

const Mail = (): JSX.Element => {
  return <MailForm />;
};

export default Mail;
