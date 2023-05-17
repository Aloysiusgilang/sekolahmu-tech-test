"use client";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [invoices, setInvoices] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await fetch("/api/hello/route");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        con;
        setInvoices(data);
      } catch (error) {
        console.error(error);
        setError(error);
      }
    };

    fetchInvoices();
  }, []);

  return (
    <div className="flex items-center justify-center">
      <main className="max-w-3xl items-center w-full justify-center">
        <h1>Sekolahmu</h1>
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Detail pembelian
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Personal details and application.
          </p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Nama Pengguna
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Margot Foster
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                No tagihan
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Tanggal pembeliann
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Email address
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                margotfoster@example.com
              </dd>
            </div>
          </dl>
        </div>
        <div>
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Pembayaran :
          </h3>
          <div className="flex flex-col">
            <p> metode pembayaran </p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Detail pembelian
          </h3>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <p>Nama item</p>
              <p>Harga barang</p>
            </div>
            <div className="flex justify-between">
              <p>Nama item</p>
              <p>Harga barang</p>
            </div>

            <div className="flex justify-between">
              <p>Nama item</p>
              <p>Harga barang</p>
            </div>
          </div>
          <div>
            <div className="flex justify-between mt-8 border-t-2 py-4">
              <p>Subtotal</p>
              <p>Harga barang</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
