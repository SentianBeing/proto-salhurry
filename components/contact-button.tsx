'use client';

import React from 'react';
import { useContactModal } from '@/context/contact-modal-context';

interface ContactButtonProps {
    text: string;
    className?: string;
}

export default function ContactButton({ text, className }: ContactButtonProps) {
    const { openModal } = useContactModal();

    return (
        <button onClick={openModal} className={className}>
            {text}
        </button>
    );
}
