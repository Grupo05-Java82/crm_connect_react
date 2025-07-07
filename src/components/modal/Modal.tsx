// src/components/Modal.tsx (Atualizado para Responsividade)
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed backdrop-blur-md inset-0 flex items-center justify-center z-50 p-4 sm:p-6 lg:p-8" 
      onClick={onClose} 
    >
      <div
        className="relative bg-white rounded-2xl w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto p-0 z-50 shadow-lg animate-fade-in-up" 
        onClick={(e) => e.stopPropagation()} 
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;