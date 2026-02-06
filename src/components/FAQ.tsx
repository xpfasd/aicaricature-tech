import { useState } from 'react';

type Item = {
  question: string;
  answer: string;
};

type Props = {
  title: string;
  items: Item[];
};

export default function FAQ({ title, items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-card p-6 sm:p-8">
      <h2 className="text-2xl font-bold text-ink">{title}</h2>
      <div className="mt-4 divide-y divide-border">
        {items.map((item, index) => (
          <div key={item.question} className="py-3">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-3 text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-semibold text-ink">{item.question}</span>
              <span className="text-primary">{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index ? <p className="mt-2 text-sm leading-6 text-muted">{item.answer}</p> : null}
          </div>
        ))}
      </div>
    </section>
  );
}
