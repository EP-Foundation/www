export default function SectionHeader({
  heading,
  eyebrow,
}: {
  heading: string
  eyebrow: string
}) {
  return (
    <div className={"mb-8 md:mb-16"}>
      <div className={"mb-4 flex items-center gap-3"}>
        <div className={"h-0.75 w-5 bg-light-pink-page"} />
        <p
          className={
            "font-sans text-[10px] font-semibold tracking-[4px] text-pink-page uppercase"
          }
        >
          {eyebrow}
        </p>
        <div className={"h-0.75 w-5 bg-light-pink-page"} />
      </div>
      <h2
        className={
          "font-heading text-[40px] font-semibold tracking-widest uppercase md:text-5xl"
        }
      >
        {heading}
      </h2>
    </div>
  )
}
