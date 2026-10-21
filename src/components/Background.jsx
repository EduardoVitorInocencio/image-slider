export default function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-lavender dark:bg-[#0f0a1f]">
      <div className="absolute -right-36 -top-36 size-[580px] rounded-full bg-violet-200/50 blur-3xl dark:bg-violet-700/20" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ebe5f6_1px,transparent_1px),linear-gradient(to_bottom,#ebe5f6_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-50 dark:bg-[linear-gradient(to_right,#2a1f4a_1px,transparent_1px),linear-gradient(to_bottom,#2a1f4a_1px,transparent_1px)]" />
    </div>
  );
}