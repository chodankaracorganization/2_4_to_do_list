import TodolistDemo from "./Component/TodolistDemo";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100">
      <main className="flex flex-col items-center justify-center bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-8 text-gray-800">
          To do List Demo
        </h1>
        <TodolistDemo />
      </main>
    </div>
  );
}
