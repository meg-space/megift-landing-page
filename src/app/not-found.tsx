'use client';

import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#ED2F59] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Página não encontrada
        </h2>
        <p className="text-gray-600 mb-8">
          Desculpe, a página que você está procurando não existe.
        </p>
        <Link
          href="/"
          className="inline-flex items-center bg-[#ED2F59] text-white px-6 py-3 rounded-2xl font-semibold hover:bg-[#B51235] transition-colors"
        >
          <FaArrowLeft className="mr-2" />
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
}
