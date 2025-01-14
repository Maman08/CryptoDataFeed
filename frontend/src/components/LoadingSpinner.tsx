import React from 'react';

export function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center p-8">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#9164FF] border-t-transparent"></div>
    </div>
  );
}