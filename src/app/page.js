import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-8 bg-gray-100 dark:bg-gray-900">
      <img
        src="https://cdn.pixabay.com/photo/2014/04/02/14/10/cogwheels-306402_1280.png"
        alt="Under Development"
        width={200}
        height={200}
        className="mb-6"
      />
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
        Website Under Development
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
        We are working hard to bring something amazing. Stay tuned!
      </p>
    </div>
  );
}