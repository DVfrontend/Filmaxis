"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/main");
    }, 5000);
  }, [router]);
  return (
    <div>
      <div className="flex justify-center items-center">
        <Image
          src="/404.svg"
          alt="404"
          width={400}
          height={400}
          className="bg-white rounded-3xl"
        />
      </div>
      <div>
        <h1 className="text-2xl">Ошибка 404!</h1>
        <h2 className="text-xl">
          В течении 5 секунд вы вернетесь на главную страницу
        </h2>
      </div>
    </div>
  );
}
