import { useState, type FormEvent } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'

type State = 'idle' | 'pending' | 'success' | 'error'

export const SERVICES = ['ספר תורה', 'תפילין', 'מזוזות', 'בדיקת מזוזות ותפילין', 'אחר'] as const

const field =
  'w-full rounded-lg border border-ink/15 bg-white/70 px-4 py-3 text-ink placeholder:text-ink/40 outline-none transition focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/30'

export function ContactForm() {
  const [state, setState] = useState<State>('idle')

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (state === 'pending') return
    const form = event.currentTarget
    const body = new URLSearchParams()
    new FormData(form).forEach((value, key) => body.append(key, String(value)))
    setState('pending')
    try {
      const response = await fetch('/contact-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
        signal: AbortSignal.timeout(15000),
      })
      if (!response.ok) throw new Error('Submission failed')
      // A plain static server echoes the registration file back instead of processing the form
      if (/\bdata-netlify\s*=/i.test(await response.text())) throw new Error('Form handling is unavailable')
      form.reset()
      setState('success')
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-white/70 p-10 text-center" role="status">
        <CheckCircle2 className="size-14 text-gold" strokeWidth={1.5} />
        <h3 className="mt-4 font-serif text-2xl font-bold">תודה, פנייתכם התקבלה</h3>
        <p className="mt-2 text-ink/70">נחזור אליכם בהקדם, בדרך כלל עוד באותו יום עסקים.</p>
        <button
          type="button"
          onClick={() => setState('idle')}
          className="mt-6 text-sm font-medium text-ink underline decoration-gold underline-offset-4 hover:text-gold"
        >
          שליחת פנייה נוספת
        </button>
      </div>
    )
  }

  return (
    <form
      name="contact"
      method="POST"
      action="/contact-form.html"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={submit}
      onChange={() => {
        if (state === 'error') setState('idle')
      }}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          נא לא למלא
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <fieldset disabled={state === 'pending'} className="grid gap-5 sm:grid-cols-2">
        <legend className="sr-only">פרטי התקשרות</legend>
        <label className="grid gap-1.5 text-sm font-medium">
          שם מלא
          <input name="name" autoComplete="name" required maxLength={100} className={field} placeholder="ישראל ישראלי" />
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          טלפון
          <input
            name="phone"
            type="tel"
            dir="ltr"
            autoComplete="tel"
            required
            maxLength={20}
            pattern="[0-9+\-\s]{9,20}"
            className={`${field} text-right`}
            placeholder="050-0000000"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          דוא״ל <span className="font-normal text-ink/50">(לא חובה)</span>
          <input
            name="email"
            type="email"
            dir="ltr"
            autoComplete="email"
            maxLength={254}
            className={`${field} text-right`}
            placeholder="name@example.com"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          במה נוכל לעזור?
          <select name="service" required defaultValue="" className={field}>
            <option value="" disabled>
              בחרו שירות
            </option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-1.5 text-sm font-medium sm:col-span-2">
          הודעה
          <textarea
            name="message"
            rows={4}
            maxLength={2000}
            className={`${field} resize-none`}
            placeholder="לדוגמה: מעוניין בבדיקת 6 מזוזות בדירה בירושלים"
          />
        </label>
        <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-3.5 font-medium text-parchment shadow-lg shadow-ink/20 transition hover:bg-ink-soft disabled:opacity-60"
          >
            {state === 'pending' && <Loader2 className="size-4 animate-spin" />}
            {state === 'pending' ? 'שולח…' : 'שליחת פנייה'}
          </button>
          {state === 'error' && (
            <p className="text-sm text-red-700" role="alert">
              השליחה לא הצליחה. נסו שוב או התקשרו אלינו ישירות.
            </p>
          )}
        </div>
      </fieldset>
    </form>
  )
}
