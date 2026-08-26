'use client';

import React, { createContext, useContext, useState } from 'react';
import ContactModal from '@/components/contact-modal';

interface ContactModalContextType {
  openModal: (defaultPackage?: string | React.MouseEvent<HTMLElement>) => void;
  closeModal: () => void;
  selectedPackage?: string | null;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const openModal = (defaultPackage?: string | React.MouseEvent<HTMLElement>) => {
    if (typeof defaultPackage === 'string') {
      setSelectedPackage(defaultPackage);
    } else {
      setSelectedPackage(null);
    }
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedPackage(null);
  };

  return (
    <ContactModalContext.Provider value={{ openModal, closeModal, selectedPackage }}>
      {children}
      <ContactModal isOpen={isOpen} onClose={closeModal} defaultPackage={selectedPackage} />
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (context === undefined) {
    throw new Error('useContactModal must be used within a ContactModalProvider');
  }
  return context;
}

