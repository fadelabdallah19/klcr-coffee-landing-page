import Reveal from "./Reveal";
import { testimonials } from "../lib/data";

function Stars({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      role="img"
      aria-label={`Rating ${rating} dari 5`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${
            i < rating ? "fill-amber-400" : "fill-stone-300"
          }`}
          aria-hidden="true"
        >
          <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.29 3.97a1 1 0 0 0 .95.69h4.18c.97 0 1.37 1.24.59 1.81l-3.39 2.46a1 1 0 0 0-.36 1.12l1.29 3.97c.3.92-.75 1.69-1.54 1.12L10.6 15.6a1 1 0 0 0-1.18 0l-3.38 2.46c-.79.57-1.84-.2-1.54-1.12l1.3-3.97a1 1 0 0 0-.37-1.12L2.04 9.4c-.78-.57-.38-1.81.6-1.81h4.17a1 1 0 0 0 .95-.69l1.29-3.97Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimoni" className="bg-brand-light/50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="font-sans text-3xl font-bold leading-tight sm:text-4xl">
            Kata Pengunjung
          </h2>
          <p className="mt-3 leading-relaxed text-stone-600">
            Ini beberapa yang pernah mampir. Selebihnya, silakan cobain sendiri.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal
              as="figure"
              key={testimonial.name}
              delay={index * 80}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-sm"
            >
              <blockquote className="flex-1 leading-relaxed text-stone-700">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t border-stone-100 pt-4">
                <div className="mb-1.5">
                  <Stars rating={testimonial.rating} />
                </div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-stone-500">{testimonial.role}</p>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
