import { type ReactNode, useEffect, useRef, useState } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: SectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`section reveal ${isVisible ? "is-visible" : ""} ${className}`.trim()}
    >
      <div className="section__heading">
        <p className="section__eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {intro ? <p className="section__intro">{intro}</p> : null}
      </div>
      {children}
    </section>
  );
}
