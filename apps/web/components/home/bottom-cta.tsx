import { Contactus, Donate } from "../buttons"

export default function BottomCta() {
  return (
    <section className="alt-section px-5 py-10 md:px-12 lg:pt-20 lg:pb-32">
      <div className="mx-auto max-w-5xl rounded-2xl bg-linear-to-br from-pink to-blue py-10 text-center md:p-20">
        <h2
          className={
            "mb-12 text-2xl leading-tight font-medium text-white sm:text-3xl md:text-4xl lg:text-5xl"
          }
        >
          Ready to Make an Impact?
          <br />
          Support a Girl Today.
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <Donate
            text={"Donate Today"}
            className={"mx-8 w-full bg-white text-foreground sm:mx-0 sm:w-fit"}
          />
          <Contactus className={"mx-8 w-full sm:mx-0 sm:w-fit"} />
        </div>
      </div>
    </section>
  )
}
