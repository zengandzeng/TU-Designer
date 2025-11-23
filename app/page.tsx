import PsdExportDemo from "@/components/PsdExportDemo";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-zinc-900 dark:to-zinc-800 font-sans py-8 px-4">
      <main className="flex w-full max-w-4xl flex-col items-center gap-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            改图大师
          </h1>
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
            TU-Designer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            AI 智能设计评分与文件生成工具
          </p>
        </div>
        
        <PsdExportDemo />
      </main>
    </div>
  );
}
