import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Rocket, Target, Package, Lightbulb, ListChecks, Brain, Check, ShieldCheck } from "lucide-react";
import ebookMockup from "@/assets/ebook-mockup.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Método 7D – Genera Ingresos Online Desde Cero | AMSE Pro" },
      { name: "description", content: "Aprende a generar ingresos online desde casa con un sistema simple, paso a paso, incluso si empiezas desde cero." },
    ],
  }),
  component: Landing,
});

const benefits = [
  { icon: Rocket, title: "Cómo empezar desde cero", desc: "Bases claras para dar tu primer paso con confianza." },
  { icon: Target, title: "Métodos de afiliación", desc: "Estrategias reales y aplicables desde el día uno." },
  { icon: Package, title: "Productos digitales", desc: "Cómo identificar y promover ofertas que convierten." },
  { icon: Lightbulb, title: "Estrategias simples", desc: "Sin tecnicismos. Acciones que puedes aplicar hoy." },
  { icon: ListChecks, title: "Organización paso a paso", desc: "Un plan estructurado para no perderte en el camino." },
  { icon: Brain, title: "Mentalidad y enfoque", desc: "Hábitos clave para sostener tu crecimiento digital." },
];

const forYou = [
  "Quieres empezar online pero no sabes cómo",
  "Buscas ingresos extra desde casa",
  "No tienes experiencia en marketing digital",
  "Quieres una guía clara y directa",
  "Estás cansado/a de información confusa",
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-foreground flex items-center justify-center text-background text-xs font-bold">A</div>
            <span className="font-semibold tracking-tight">AMSE Pro</span>
          </div>
          <a href="https://pay.hotmart.com/U105714735B?checkoutMode=10" target="_blank" rel="noopener" className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90">
            Acceder <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ backgroundImage: "var(--gradient-hero)" }}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-2">
          <div className="animate-[fadeUp_0.8s_ease-out]">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Nuevo ebook digital · 2026
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Aprende a generar ingresos online desde casa <span className="text-accent">incluso si empiezas desde cero</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Descubre un sistema simple y explicado paso a paso para comenzar en el mundo digital sin experiencia previa.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="https://pay.hotmart.com/U105714735B?checkoutMode=10" target="_blank" rel="noopener" className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold tracking-wide text-background shadow-[var(--shadow-elegant)] transition hover:-translate-y-0.5 hover:opacity-95">
                QUIERO ACCEDER AHORA
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-accent" /> Acceso inmediato
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 -z-10 rounded-full bg-[var(--brand-blue-soft)] blur-3xl opacity-70" />
            <img
              src={ebookMockup}
              alt="Mockup del ebook Método 7D"
              width={1024}
              height={1024}
              className="w-full max-w-md drop-shadow-[0_30px_50px_rgba(15,23,42,0.25)] animate-[float_6s_ease-in-out_infinite]"
            />
          </div>
        </div>
      </section>

      {/* Problema */}
      <section className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">¿Te sientes perdido/a intentando ganar dinero online?</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            La mayoría de personas abandonan porque encuentran información confusa, promesas irreales o sistemas demasiado complicados. Esta guía está creada para ayudarte a empezar de forma clara, sencilla y práctica.
          </p>
        </div>
      </section>

      {/* Beneficios */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Lo que aprenderás dentro</h2>
          <p className="mt-4 text-muted-foreground">Seis pilares prácticos para construir tu camino digital con claridad.</p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-accent/40">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand-blue-soft)] text-accent transition group-hover:bg-accent group-hover:text-accent-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <a href="https://pay.hotmart.com/U105714735B?checkoutMode=10" target="_blank" rel="noopener" className="group inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-semibold tracking-wide text-background shadow-[var(--shadow-elegant)] transition hover:-translate-y-0.5 hover:opacity-95">
            QUIERO ACCEDER AHORA
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
        </div>
      </section>

      {/* Para quién es */}
      <section className="border-y border-border/60 bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Este ebook es ideal para ti si…</h2>
            <p className="mt-4 text-muted-foreground">Pensado para quienes buscan resultados reales, sin atajos imposibles.</p>
          </div>
          <ul className="space-y-3">
            {forYou.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-[var(--shadow-soft)]">
                <div className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </div>
                <span className="text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Confianza */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <div className="rounded-3xl border border-border bg-card p-10 text-center shadow-[var(--shadow-elegant)] sm:p-14">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Este contenido ha sido creado con un enfoque educativo y práctico para ayudarte a entender el mundo de los ingresos online de forma sencilla y estructurada.
          </p>
          <div className="mt-6 text-sm font-semibold tracking-widest text-foreground">— AMSE PRO —</div>
        </div>
      </section>

      {/* Precio */}
      <section className="mx-auto max-w-3xl px-6 pb-8 pt-4 sm:pb-16">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 text-center shadow-[var(--shadow-elegant)] sm:p-14">
          <div className="absolute inset-x-0 -top-24 -z-0 mx-auto h-48 w-48 rounded-full bg-[var(--brand-blue-soft)] blur-3xl" />
          <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Acceso completo al Método 7D
          </p>
          <div className="relative mt-6 flex items-end justify-center gap-1">
            <span className="text-6xl font-semibold tracking-tight text-foreground sm:text-7xl">Solo 9</span>
            <span className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">€</span>
          </div>
          <p className="relative mt-4 text-sm text-muted-foreground">
            Pago único · Acceso inmediato · Formato digital
          </p>
          <a
            href="https://pay.hotmart.com/U105714735B?checkoutMode=10" target="_blank" rel="noopener"
            className="group relative mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-semibold tracking-wide text-background shadow-[var(--shadow-elegant)] transition hover:-translate-y-0.5 hover:opacity-95"
          >
            QUIERO ACCEDER AHORA
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
        </div>
      </section>

      {/* CTA Final */}
      <section id="cta" className="relative overflow-hidden bg-foreground text-background">
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 30% 20%, oklch(0.62 0.13 245 / 0.6), transparent 50%)" }} />
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Empieza hoy tu camino digital</h2>
          <p className="mt-5 text-lg text-background/70">No necesitas hacerlo perfecto. Solo necesitas empezar.</p>
          <a href="https://pay.hotmart.com/U105714735B?checkoutMode=10" target="_blank" rel="noopener" className="mt-10 inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 text-sm font-semibold tracking-wide text-foreground shadow-[var(--shadow-elegant)] transition hover:-translate-y-0.5 hover:bg-background/95">
            ACCEDER AL MÉTODO 7D
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-xs text-muted-foreground">
          © 2026 AMSE Pro – Todos los derechos reservados
        </div>
      </footer>

      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
      `}</style>
    </div>
  );
}
