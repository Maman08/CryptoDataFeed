import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="bg-red-900/20 border border-red-500 rounded-lg p-4 flex items-center space-x-2 text-red-400">
      <AlertCircle size={20} />
      <span>{message}</span>
    </div>
  );
}